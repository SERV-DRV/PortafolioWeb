import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from '../../../shared/components/layout/PillNav';
import Particles from '../../../shared/components/ui/Particles';
import SpotlightCard from '../../../shared/components/ui/SpotlightCard';
import CardSwap, { Card } from '../../../shared/components/ui/CardSwap';
import { projects } from '../../../shared/data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="page-container projects-immersive-page">
      <div className="background-layer">
        <Particles
          particleColors={['#38bdf8', '#0ea5e9']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <PillNav />
      
      <div className="projects-content-wrapper">
        <h1 className="cinematic-title">Mis Proyectos</h1>
        <p className="page-subtitle text-slate-400 mb-12" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px'}}>
          Explora mi trabajo reciente. Haz clic en un proyecto para ver capturas, demos y más detalles.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} onClick={() => setActiveProject(p)} className="project-card-wrapper">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(56, 189, 248, 0.15)">
                <div className="card-image-preview">
                  <img src={p.images[0]} alt={p.name} />
                  <div className="card-overlay">
                    <FaPlay className="play-icon" />
                    <span>Explorar</span>
                  </div>
                </div>
                <div className="card-info">
                  <h3>{p.name}</h3>
                  <span className="card-year">{p.year}</span>
                  <p>{p.description}</p>
                  <div className="card-tags">
                    {p.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="mini-tag">{tech}</span>
                    ))}
                    {p.technologies.length > 3 && <span className="mini-tag">+{p.technologies.length - 3}</span>}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inmersivo de Detalles */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="rich-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="rich-modal-content glass-panel"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="rich-close-btn" onClick={() => setActiveProject(null)}>×</button>
              
              <div className="rich-modal-layout">
                {/* Lado Izquierdo: Multimedia (CardSwap / Video) */}
                <div className="rich-modal-media">
                  {activeProject.video ? (
                    <div className="video-container">
                      <video 
                        src={activeProject.video} 
                        autoPlay 
                        loop 
                        muted 
                        controls 
                        className="project-video"
                      />
                    </div>
                  ) : (
                    <div className="card-swap-wrapper">
                      <CardSwap
                        width={350}
                        height={220}
                        cardDistance={30}
                        verticalDistance={40}
                        pauseOnHover={true}
                        delay={3000}
                      >
                        {activeProject.images.map((img, idx) => (
                          <Card key={idx} className="swap-card-image">
                            <img src={img} alt={`Captura ${idx + 1}`} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
                          </Card>
                        ))}
                      </CardSwap>
                    </div>
                  )}
                </div>

                {/* Lado Derecho: Info y Enlaces */}
                <div className="rich-modal-info">
                  <div className="rich-modal-header">
                    <h2>{activeProject.name}</h2>
                    <span className="rich-year">{activeProject.year}</span>
                  </div>
                  
                  <p className="rich-full-desc">{activeProject.fullDescription || activeProject.description}</p>
                  
                  <div className="rich-tech-stack">
                    {activeProject.technologies.map((tech, i) => (
                      <span key={i} className="rich-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="rich-actions">
                    {activeProject.demoLink && (
                      <a href={activeProject.demoLink} target="_blank" rel="noreferrer" className="btn-primary">
                        <FaExternalLinkAlt style={{marginRight: '8px'}} /> Demo
                      </a>
                    )}
                    {activeProject.link && (
                      <a href={activeProject.link} target="_blank" rel="noreferrer" className="btn-secondary">
                        <FaGithub style={{marginRight: '8px'}} /> Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
