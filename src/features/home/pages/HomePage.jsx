import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import Lightfall from '../../../shared/components/ui/Lightfall';
import { personalInfo } from '../../../shared/data/portfolioData';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="fixed-background">
        <Lightfall 
          backgroundColor="#000000"
          colors={['#0284c7', '#38bdf8', '#7dd3fc']}
          density={0.7}
        />
      </div>
      
      <PillNav />
      
      <div className="scrollable-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <main className="hero-content">
            <motion.div 
              className="badge-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="status-badge glass-panel">
                <span className="badge-highlight">NUEVO</span>
                <span className="badge-text">Disponible para trabajar</span>
              </div>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {personalInfo.name || "Santiago De Rosa"}
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.title || "Full Stack Developer"}
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/projects" className="btn-primary">Ver Proyectos</Link>
              <a href="#about" className="btn-secondary">Sobre Mí</a>
            </motion.div>
          </main>
        </section>

        {/* EDITORIAL ABOUT SECTION */}
        <section id="about" className="about-editorial-section">
          <div className="editorial-wrapper">
            
            <motion.div 
              className="editorial-image-container"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="image-geometry-crop">
                <img 
                  src="https://avatars.githubusercontent.com/u/129759868?v=4" 
                  alt={personalInfo.name} 
                  className="editorial-img"
                />
                <div className="image-overlay-gradient"></div>
              </div>
            </motion.div>

            <motion.div 
              className="editorial-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="editorial-headline">
                Transformando ideas complejas en experiencias <span className="text-glow">digitales impecables</span>.
              </h2>
              
              <div className="editorial-divider"></div>
              
              <div className="editorial-body">
                <p>
                  Soy un desarrollador apasionado por crear software que no solo funcione, 
                  sino que deslumbre. Especializado en arquitectura <strong>Full Stack</strong>, 
                  combino un profundo conocimiento del código con una atención obsesiva por el detalle y la interfaz de usuario.
                </p>
                <p>
                  {personalInfo.bio}
                </p>
              </div>

              <div className="editorial-meta">
                <div className="meta-block">
                  <span className="meta-label">Enfoque</span>
                  <span className="meta-value">Innovación & Rendimiento</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">Educación</span>
                  <span className="meta-value">{personalInfo.education}</span>
                </div>
              </div>

              <div className="editorial-actions">
                <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="btn-outline">
                  Explorar Repositorios
                </a>
              </div>
            </motion.div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
