import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import ProfileCard from '../../../shared/components/ui/ProfileCard';
import { personalInfo } from '../../../shared/data/portfolioData';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="page-container">
      <PillNav />
      <main className="page-content about-content">
        <div className="about-header">
          <h1 className="page-title">Sobre Mí</h1>
        </div>
        <div className="profile-container">
          <ProfileCard
            avatarUrl="https://avatars.githubusercontent.com/u/129759868?v=4" // GitHub Avatar fallback
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
        </div>
        <div className="about-details glass-panel">
          <h2>Biografía</h2>
          <p className="bio-text">{personalInfo.bio}</p>
          <div className="edu-section">
            <h3>Educación</h3>
            <p><strong>{personalInfo.education}</strong> - {personalInfo.institution}</p>
          </div>
          <div className="links-section">
            <a href={personalInfo.links.email} className="btn-primary-solid">Contactar por Email</a>
          </div>
        </div>
      </main>
    </div>
  );
}
