import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import AnimatedList from '../../../shared/components/ui/AnimatedList';
import ScrollStack, { ScrollStackItem } from '../../../shared/components/ui/ScrollStack';
import { skills, softSkills } from '../../../shared/data/portfolioData';
import { 
  FaCss3Alt, FaJava, FaJsSquare, FaGitAlt, FaDatabase, 
  FaReact, FaHtml5, FaNodeJs, FaLeaf, FaEnvira, FaCode 
} from 'react-icons/fa';
import './SkillsPage.css';

const getIcon = (iconName, color) => {
  switch(iconName) {
    case 'css3-alt': return <FaCss3Alt size={32} color={color} />;
    case 'java': return <FaJava size={32} color={color} />;
    case 'js-square': return <FaJsSquare size={32} color={color} />;
    case 'git-alt': return <FaGitAlt size={32} color={color} />;
    case 'database': return <FaDatabase size={32} color={color} />;
    case 'react': return <FaReact size={32} color={color} />;
    case 'html5': return <FaHtml5 size={32} color={color} />;
    case 'node-js': return <FaNodeJs size={32} color={color} />;
    case 'leaf': return <FaLeaf size={32} color={color} />;
    case 'envira': return <FaEnvira size={32} color={color} />;
    case 'code': return <FaCode size={32} color={color} />;
    default: return <FaCode size={32} color={color} />;
  }
};

export default function SkillsPage() {
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
            <h2>Hard Skills (Scroll para apilar)</h2>
            <div className="scroll-stack-wrapper">
              <ScrollStack
                itemDistance={100}
                itemStackDistance={30}
                baseScale={0.85}
                rotationAmount={2}
                blurAmount={1.5}
                className="my-scroll-stack"
              >
                {skills.map((s, index) => (
                  <ScrollStackItem key={index} itemClassName="skill-stack-item">
                    <div className="skill-card-content">
                      <div className="skill-icon">{getIcon(s.icon, s.color)}</div>
                      <div className="skill-info">
                        <h3>{s.name}</h3>
                        <div className="skill-bar-container">
                          <div className="skill-bar-fill" style={{width: `${s.percentage}%`, backgroundColor: s.color}}></div>
                        </div>
                        <span className="skill-percent">{s.percentage}%</span>
                      </div>
                    </div>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
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
