import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import BackgroundRain from '../../../shared/components/ui/BackgroundRain';
import { personalInfo } from '../../../shared/data/portfolioData';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <BackgroundRain />
      <PillNav />
      
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
          <Link to="/contact" className="btn-secondary">Contáctame</Link>
        </motion.div>
      </main>
    </div>
  );
}
