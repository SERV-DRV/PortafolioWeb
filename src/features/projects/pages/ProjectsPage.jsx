import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from '../../../shared/components/layout/PillNav';
import CircularGallery from '../../../shared/components/ui/CircularGallery';
import Particles from '../../../shared/components/ui/Particles';
import { projects } from '../../../shared/data/portfolioData';
import './ProjectsPage.css';

const generateCoverImage = (title, index) => {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  
  // Colores dinámicos basados en el índice
  const hue = (index * 60) % 360;
  const grad = ctx.createLinearGradient(0, 0, 800, 800);
  grad.addColorStop(0, `hsl(${hue}, 80%, 20%)`);
  grad.addColorStop(1, `hsl(${hue + 40}, 80%, 40%)`);
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 800);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Dividir título largo en líneas si es necesario
  const words = title.split(' ');
  if (words.length > 2) {
    ctx.fillText(words.slice(0, 2).join(' '), 400, 350);
    ctx.fillText(words.slice(2).join(' '), 400, 450);
  } else {
    ctx.fillText(title, 400, 400);
  }
  
  return canvas.toDataURL('image/png');
};

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems = useMemo(() => projects.map((p, idx) => ({
    image: generateCoverImage(p.name, idx),
    text: p.name
  })), []);
  
  const activeProject = projects[activeIndex];

  return (
    <div className="page-container projects-immersive-page">
      <div className="background-layer">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <PillNav />
      
      <div className="gallery-wrapper">
        <h1 className="cinematic-title">Mis Proyectos</h1>
        <div className="gallery-full-container">
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            items={galleryItems}
            onActiveIndexChange={(idx) => {
              if (idx !== activeIndex) setActiveIndex(idx);
            }} 
          />
        </div>
        
        {/* Botón interactivo central */}
        <div className="active-project-action">
          <motion.button 
            className="view-project-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Explorar: {activeProject?.name}
          </motion.button>
        </div>
      </div>

      {/* Modal de Detalles del Proyecto */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="project-modal-content glass-panel"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>×</button>
              
              <div className="modal-header">
                <h2>{activeProject.name}</h2>
                <span className="project-year">{activeProject.year}</span>
              </div>
              
              <p className="modal-full-desc">{activeProject.fullDescription || activeProject.description}</p>
              
              <div className="modal-tech-stack">
                {activeProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="modal-actions">
                {activeProject.demoLink && (
                  <a href={activeProject.demoLink} target="_blank" rel="noreferrer" className="primary-btn">
                    Ver Demo en Vivo
                  </a>
                )}
                {activeProject.link && (
                  <a href={activeProject.link} target="_blank" rel="noreferrer" className="secondary-btn">
                    Código en GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
