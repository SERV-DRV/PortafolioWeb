import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import Lightfall from '../../../shared/components/ui/Lightfall';
import ProfileCard from '../../../shared/components/ui/ProfileCard';
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

        <section id="about" className="about-section">
          <div className="about-content-wrapper">
            <motion.div 
              className="profile-side"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ProfileCard
                avatarUrl="https://avatars.githubusercontent.com/u/129759868?v=4"
                name={personalInfo.name}
                title={personalInfo.title}
                handle={personalInfo.alias}
                status="Estudiante"
                contactText="Ver GitHub"
                onContactClick={() => window.open(personalInfo.links.github, '_blank')}
                innerGradient="linear-gradient(145deg,#0284c78c 0%,#7dd3fc44 100%)"
                behindGlowColor="rgba(2, 132, 199, 0.6)"
                miniAvatarUrl="https://avatars.githubusercontent.com/u/129759868?v=4"
              />
            </motion.div>

            <motion.div 
              className="bio-side glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Sobre Mí</h2>
              <p className="bio-text">{personalInfo.bio}</p>
              
              <div className="edu-section mt-6">
                <h3>Educación</h3>
                <p><strong>{personalInfo.education}</strong> - {personalInfo.institution}</p>
              </div>

              <div className="links-section mt-8">
                <a href={personalInfo.links.email} className="btn-primary-solid">Contactar por Email</a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
