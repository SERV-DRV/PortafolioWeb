import React from 'react';
import { motion } from 'framer-motion';
import PillNav from '../../../shared/components/layout/PillNav';
import { projects } from '../../../shared/data/portfolioData';
import SpotlightCard from '../../../shared/components/ui/SpotlightCard';
import CardSwap, { Card } from '../../../shared/components/ui/CardSwap';
import './ProjectsPage.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <PillNav />
      
      <main className="page-content">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1 className="page-title">Proyectos Destacados</h1>
          <p className="page-subtitle">Explora mi trabajo reciente y proyectos académicos.</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SpotlightCard className="project-card glass-panel" spotlightColor="rgba(2, 132, 199, 0.2)">
                <div className="project-image-container">
                  {project.images.length > 1 ? (
                    <CardSwap width={300} height={200} pauseOnHover={true}>
                      {project.images.map((img, idx) => (
                         <Card key={idx}>
                           <img src={img} alt={`${project.name} ${idx}`} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
                         </Card>
                      ))}
                    </CardSwap>
                  ) : (
                    <img src={project.images[0]} alt={project.name} className="project-image" style={{width: '300px', height: '200px', objectFit: 'cover', borderRadius: '12px'}} />
                  )}
                  <div className="project-year-badge">{project.year}</div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-secondary btn-sm">Ver Repositorio</a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-primary-solid btn-sm">Ver Demo</a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
