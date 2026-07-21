import React from 'react';
import { motion } from 'framer-motion';
import PillNav from '../../../shared/components/layout/PillNav';
import Particles from '../../../shared/components/ui/Particles';
import { skills, softSkills } from '../../../shared/data/portfolioData';
import { 
  FaCss3Alt, FaJava, FaJsSquare, FaGitAlt, FaDatabase, 
  FaReact, FaHtml5, FaNodeJs, FaLeaf, FaEnvira, FaCode 
} from 'react-icons/fa';
import './SkillsPage.css';

const getIcon = (iconName, color) => {
  switch(iconName) {
    case 'css3-alt': return <FaCss3Alt size={40} color={color} />;
    case 'java': return <FaJava size={40} color={color} />;
    case 'js-square': return <FaJsSquare size={40} color={color} />;
    case 'git-alt': return <FaGitAlt size={40} color={color} />;
    case 'database': return <FaDatabase size={40} color={color} />;
    case 'react': return <FaReact size={40} color={color} />;
    case 'html5': return <FaHtml5 size={40} color={color} />;
    case 'node-js': return <FaNodeJs size={40} color={color} />;
    case 'leaf': return <FaLeaf size={40} color={color} />;
    case 'envira': return <FaEnvira size={40} color={color} />;
    case 'code': return <FaCode size={40} color={color} />;
    default: return <FaCode size={40} color={color} />;
  }
};

export default function SkillsPage() {
  return (
    <div className="page-container immersive-page">
      <div className="background-layer">
        <Particles
          particleColors={['#0284c7', '#38bdf8']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <PillNav />
      
      <main className="page-content skills-immersive-content">
        <div className="page-header" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="cinematic-title">Mis Habilidades</h1>
          <p className="page-subtitle" style={{ color: '#94a3b8' }}>
            Nivel de dominio técnico y habilidades blandas
          </p>
        </div>

        <div className="skills-bento-grid">
          {skills.map((s, idx) => (
            <motion.div 
              key={idx} 
              className="skill-bento-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-box" style={{ background: `rgba(255,255,255,0.05)` }}>
                  {getIcon(s.icon, s.color)}
                </div>
                <div className="skill-percentage" style={{ color: s.color }}>
                  {s.percentage}%
                </div>
              </div>
              
              <div className="skill-card-bottom">
                <h3>{s.name}</h3>
                <div className="skill-bar-bg">
                  <motion.div 
                    className="skill-bar-fill" 
                    style={{ backgroundColor: s.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1), duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="soft-skills-glass panel" style={{ marginTop: '40px' }}>
          <h2>Soft Skills</h2>
          <div className="soft-skills-tags">
            {softSkills.map((s, idx) => (
              <span key={idx} className="soft-skill-tag" title={s.description}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
