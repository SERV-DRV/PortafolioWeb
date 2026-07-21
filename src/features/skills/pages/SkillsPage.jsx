import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import OrbitImages from '../../../shared/components/ui/OrbitImages';
import GridMotion from '../../../shared/components/ui/GridMotion';
import { skills, softSkills } from '../../../shared/data/portfolioData';
import { 
  FaCss3Alt, FaJava, FaJsSquare, FaGitAlt, FaDatabase, 
  FaReact, FaHtml5, FaNodeJs, FaLeaf, FaEnvira, FaCode 
} from 'react-icons/fa';
import './SkillsPage.css';

const getIcon = (iconName, color) => {
  switch(iconName) {
    case 'css3-alt': return <FaCss3Alt size={48} color={color} />;
    case 'java': return <FaJava size={48} color={color} />;
    case 'js-square': return <FaJsSquare size={48} color={color} />;
    case 'git-alt': return <FaGitAlt size={48} color={color} />;
    case 'database': return <FaDatabase size={48} color={color} />;
    case 'react': return <FaReact size={48} color={color} />;
    case 'html5': return <FaHtml5 size={48} color={color} />;
    case 'node-js': return <FaNodeJs size={48} color={color} />;
    case 'leaf': return <FaLeaf size={48} color={color} />;
    case 'envira': return <FaEnvira size={48} color={color} />;
    case 'code': return <FaCode size={48} color={color} />;
    default: return <FaCode size={48} color={color} />;
  }
};

export default function SkillsPage() {
  const orbitItems = skills.map((s, idx) => (
    <div key={idx} className="orbit-icon-wrapper" title={s.name}>
      {getIcon(s.icon, s.color)}
    </div>
  ));

  return (
    <div className="page-container immersive-page">
      <div className="background-layer">
        <GridMotion 
          gradientColor="#0284c7"
          gridLineColor="#38bdf8"
          backgroundColor="#030712"
        />
      </div>
      
      <PillNav />
      
      <main className="page-content skills-immersive-content">
        <div className="page-header" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="cinematic-title">Mis Habilidades</h1>
          <p className="page-subtitle" style={{ color: 'white', textShadow: '0 0 10px rgba(0,0,0,0.8)'}}>Tecnologías que orbitan en mi universo</p>
        </div>

        <div className="orbit-section">
          <OrbitImages
            items={orbitItems}
            radius={250}
            itemSize={80}
            duration={30}
            shape="circle"
            responsive={true}
            centerContent={
              <div className="center-core">
                <h3>Core Stack</h3>
              </div>
            }
          />
        </div>
        
        <div className="soft-skills-glass panel">
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
