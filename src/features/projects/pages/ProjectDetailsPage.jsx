import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../../shared/data/portfolioData';
import MediaCarousel from '../../../shared/components/ui/MediaCarousel';
import Particles from '../../../shared/components/ui/Particles';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './ProjectDetailsPage.css';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = useMemo(() => {
    return projects.find(p => p.id === parseInt(id));
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Proyecto no encontrado</h2>
        <button onClick={() => navigate('/projects')}>Volver</button>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* Fondo inmersivo temático (LetterGlitch para todos) */}
      <div className="details-background">
        <Particles 
          particleColors={['#38bdf8', '#0ea5e9', '#0284c7', '#ffffff']}
          particleCount={window.innerWidth < 768 ? 100 : 250}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={100}
          sizeRandomness={1}
          moveParticlesOnHover={true}
          pixelRatio={Math.min(window.devicePixelRatio || 1, 1.5)}
        />
        <div className="details-background-overlay"></div>
      </div>

      <div className="details-nav">
        <button className="back-btn" onClick={() => navigate('/projects')}>
          <FaArrowLeft /> Volver a Proyectos
        </button>
      </div>

      <motion.div 
        className="details-content-wrapper glass-panel"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="details-header">
          <h1>{project.name}</h1>
          <span className="details-year">{project.year}</span>
        </div>

        <div className="details-layout">
          <div className="details-media-section">
            <MediaCarousel 
              media={[
                ...(project.video ? [{ type: 'video', src: project.video, poster: project.images?.[0] }] : []),
                ...(project.images ? project.images.map(img => ({ type: 'image', src: img })) : [])
              ]} 
            />
          </div>

          <div className="details-info-section">
            <h2 className="section-title">Sobre el Proyecto</h2>
            <p className="details-description">
              {project.fullDescription || project.description}
            </p>

            <h2 className="section-title mt-4">Tecnologías Utilizadas</h2>
            <div className="details-tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="details-tech-badge">{tech}</span>
              ))}
            </div>

            <div className="details-actions">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="details-btn-primary">
                  <FaExternalLinkAlt /> Ver Demo
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="details-btn-secondary">
                  <FaGithub /> Código Fuente
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}