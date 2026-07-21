import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import AnimatedList from '../../../shared/components/ui/AnimatedList';
import { skills, softSkills } from '../../../shared/data/portfolioData';
import './SkillsPage.css';

export default function SkillsPage() {
  const hardSkillsFormatted = skills.map(s => `${s.name} - ${s.percentage}%`);
  const softSkillsFormatted = softSkills.map(s => `${s.name}: ${s.description}`);

  return (
    <div className="page-container">
      <PillNav />
      <main className="page-content">
        <div className="page-header">
          <h1 className="page-title">Habilidades y Tecnologías</h1>
          <p className="page-subtitle">Mi stack tecnológico y habilidades blandas.</p>
        </div>

        <div className="skills-grid">
          <div className="skills-column glass-panel">
            <h2>Hard Skills</h2>
            <div className="list-wrapper">
              <AnimatedList 
                items={hardSkillsFormatted} 
                className="skills-animated-list"
              />
            </div>
          </div>
          
          <div className="skills-column glass-panel">
            <h2>Soft Skills</h2>
            <div className="list-wrapper">
              <AnimatedList 
                items={softSkillsFormatted} 
                className="skills-animated-list"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
