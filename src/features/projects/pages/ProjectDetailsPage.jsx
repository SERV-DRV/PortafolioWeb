import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../../shared/data/portfolioData';
import MediaCarousel from '../../../shared/components/ui/MediaCarousel';
import Particles from '../../../shared/components/ui/Particles';
import Lightfall from '../../../shared/components/ui/Lightfall';
import LetterGlitch from '../../../shared/components/ui/LetterGlitch';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './ProjectDetailsPage.css';

const getThematicBackground = (id) => {
  switch (id) {
    case 1:
    case 5:
      return <Particles particleColors={['#ffffff', '#38bdf8']} particleCount={150} speed={0.3} particleBaseSize={120} />;
    case 2:
    case 6:
      return <Lightfall color="#38bdf8" speed={1.5} />;
    case 3:
    case 4:
      return <LetterGlitch glitchSpeed={60} centerVignette={true} glitchColors={['#38bdf8', '#0ea5e9', '#0284c7']} />;
    default:
      return <Particles particleColors={['#38bdf8', '#0ea5e9']} particleCount={100} />;
  }
};

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
      {/* Fondo inmersivo temático */}
      <div className="details-background">
        {getThematicBackground(project.id)}
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
                ...(project.video ? [{ type: 'video', src: project.video }] : []),
                ...(project.images ? project.images.map(img => ({ type: 'image', src: img })) : [])
              ]} 
            />
          </div>

          <div className="details-info-section">
            <h3 className="section-title">Sobre el Proyecto</h3>
            <p className="details-description">
              {project.fullDescription || project.description}
            </p>

            <h3 className="section-title mt-4">Tecnologías Utilizadas</h3>
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