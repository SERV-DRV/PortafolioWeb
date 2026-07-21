import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import LetterGlitch from '../../../shared/components/ui/LetterGlitch';
import FluidGlass from '../../../shared/components/ui/FluidGlass';
import { personalInfo } from '../../../shared/data/portfolioData';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="page-container about-immersive-page">
      <div className="background-layer">
        <LetterGlitch 
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      
      <PillNav />
      
      <main className="page-content about-glass-content">
        <div className="fluid-glass-wrapper">
          {/* Fluid Glass provides a 3D Canvas, we layer the HTML content over it */}
          <FluidGlass text="Sobre Mí" mode="lens" />
        </div>

        <div className="about-details-overlay">
          <div className="glass-panel-content">
            <img 
              src="https://avatars.githubusercontent.com/u/129759868?v=4" 
              alt="Avatar" 
              className="about-avatar"
            />
            <h2>{personalInfo.name}</h2>
            <h3 className="about-title">{personalInfo.title}</h3>
            
            <div className="about-bio-box">
              <p className="bio-text">{personalInfo.bio}</p>
            </div>

            <div className="edu-section">
              <h3>Educación</h3>
              <p><strong>{personalInfo.education}</strong> - {personalInfo.institution}</p>
            </div>
            
            <div className="links-section">
              <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="btn-primary-solid">
                Ver GitHub
              </a>
              <a href={personalInfo.links.email} className="btn-secondary-solid">
                Contactar por Email
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
