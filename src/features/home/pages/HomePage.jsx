import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import Lightfall from '../../../shared/components/ui/Lightfall';
import LetterGlitch from '../../../shared/components/ui/LetterGlitch';
import { personalInfo } from '../../../shared/data/portfolioData';
import './HomePage.css';

const certifications = [
  { id: 1, src: '/assets/certifications/ECOCredGT.png', title: 'ECOCredGT' },
  { id: 2, src: '/assets/certifications/manejoCaracters.png', title: 'Manejo Caracter' }
];

export default function HomePage() {
  const [selectedCert, setSelectedCert] = useState(null);

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

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="certifications-section">
          {/* Fondo Hacker/Matrix (LetterGlitch) */}
          <div className="cert-background">
            <LetterGlitch glitchSpeed={60} centerVignette={true} glitchColors={['#38bdf8', '#0ea5e9', '#0284c7']} />
            <div className="cert-background-overlay"></div>
          </div>

          <div className="cert-content">
            <motion.h2 
              className="cert-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Mis Certificaciones
            </motion.h2>
            <p className="cert-subtitle">
              A lo largo de mi trayectoria he obtenido reconocimientos y validaciones 
              que respaldan mis habilidades técnicas y mi compromiso con el aprendizaje 
              continuo en el mundo del desarrollo de software.
            </p>

            <div className="cert-grid">
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.id} 
                  className="cert-card glass-panel"
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setSelectedCert(cert.src)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <img src={cert.src} alt={cert.title} />
                  <div className="cert-card-overlay">
                    <span>Ver Certificado</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal para Certificaciones */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <button className="cert-close-btn" onClick={() => setSelectedCert(null)}>×</button>
            <motion.img 
              src={selectedCert} 
              alt="Certificado Ampliado" 
              className="cert-lightbox-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}