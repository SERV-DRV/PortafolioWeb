import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../../shared/data/portfolioData';
import CardSwap, { Card } from '../../../shared/components/ui/CardSwap';
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

  // Usar la primera imagen como fondo difuminado
  const bgImage = project.images[0];

  return (
    <div className="project-details-page">
      {/* Fondo inmersivo basado en la primera imagen del proyecto */}
      <div 
        className="details-background" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
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
            {project.video ? (
              <div className="details-video-wrapper">
                <video 
                  src={project.video} 
                  autoPlay 
                  loop 
                  muted 
                  controls 
                  className="details-video"
                />
              </div>
            ) : (
              <div className="details-gallery-wrapper">
                <CardSwap
                  width={500}
                  height={320}
                  cardDistance={35}
                  verticalDistance={45}
                  pauseOnHover={true}
                  delay={3000}
                >
                  {project.images.map((img, idx) => (
                    <Card key={idx} className="details-swap-card">
                      <img src={img} alt={`Captura ${idx + 1}`} />
                    </Card>
                  ))}
                </CardSwap>
              </div>
            )}
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