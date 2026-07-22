import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PillNav from '../../../shared/components/layout/PillNav';
import Particles from '../../../shared/components/ui/Particles';
import { skills, softSkills } from '../../../shared/data/portfolioData';
import { 
  FaCss3Alt, FaJava, FaJsSquare, FaGitAlt, FaDatabase, 
  FaReact, FaHtml5, FaNodeJs, FaLeaf, FaEnvira, FaCode,
  FaBrain, FaUsers, FaPuzzlePiece, FaSyncAlt, FaBookReader, FaComments
} from 'react-icons/fa';
import './SkillsPage.css';

const getIcon = (iconName, color, size = 40) => {
  switch(iconName) {
    case 'css3-alt': return <FaCss3Alt size={size} color={color} />;
    case 'java': return <FaJava size={size} color={color} />;
    case 'js-square': return <FaJsSquare size={size} color={color} />;
    case 'git-alt': return <FaGitAlt size={size} color={color} />;
    case 'database': return <FaDatabase size={size} color={color} />;
    case 'react': return <FaReact size={size} color={color} />;
    case 'html5': return <FaHtml5 size={size} color={color} />;
    case 'node-js': return <FaNodeJs size={size} color={color} />;
    case 'leaf': return <FaLeaf size={size} color={color} />;
    case 'envira': return <FaEnvira size={size} color={color} />;
    case 'code': return <FaCode size={size} color={color} />;
    default: return <FaCode size={size} color={color} />;
  }
};

const getSoftIcon = (iconName, color, size = 40) => {
  switch(iconName) {
    case 'brain': return <FaBrain size={size} color={color} />;
    case 'users': return <FaUsers size={size} color={color} />;
    case 'puzzle-piece': return <FaPuzzlePiece size={size} color={color} />;
    case 'sync-alt': return <FaSyncAlt size={size} color={color} />;
    case 'book-reader': return <FaBookReader size={size} color={color} />;
    case 'comments': return <FaComments size={size} color={color} />;
    default: return <FaBrain size={size} color={color} />;
  }
};

const getSkillDescription = (name) => {
  const desc = {
    "CSS3": "Maquetación avanzada, animaciones complejas y diseño responsivo enfocado en UX/UI.",
    "JAVA": "Desarrollo backend robusto, programación orientada a objetos y estructuras de datos.",
    "JavaScript": "Lógica del lado del cliente, manipulación del DOM y arquitecturas asíncronas modernas.",
    "Git": "Control de versiones, trabajo colaborativo y flujos de integración continua.",
    "MySQL": "Diseño de bases de datos relacionales, consultas complejas y optimización de rendimiento.",
    "React": "Desarrollo de interfaces declarativas, gestión de estado global y ecosistema frontend.",
    "HTML5": "Estructurado semántico, accesibilidad y optimización para motores de búsqueda (SEO).",
    "Node.js": "Desarrollo de APIs RESTful, escalabilidad y procesamiento del lado del servidor.",
    "Spring Boot": "Creación de microservicios empresariales y despliegues rápidos en el ecosistema Java.",
    "MongoDB": "Modelado de datos NoSQL, alta disponibilidad y almacenamiento de documentos flexibles.",
    "PostgreSQL": "Bases de datos relacionales avanzadas, seguridad de datos e integridad referencial.",
    "C#": "Desarrollo de aplicaciones de escritorio y backend utilizando el framework .NET."
  };
  return desc[name] || "Herramienta técnica esencial en el flujo de desarrollo de software.";
};

// Componente para Gráfica Circular Animada SVG
const CircularProgress = ({ percentage, color, iconName }) => {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-container">
      <svg className="circular-svg" width="300" height="300" viewBox="0 0 300 300">
        {/* Fondo del anillo */}
        <circle 
          cx="150" cy="150" r={radius} 
          fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="15" 
        />
        {/* Anillo de Progreso Animado */}
        <motion.circle 
          cx="150" cy="150" r={radius} 
          fill="none" stroke={color} strokeWidth="15" 
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 10px ${color})`
          }}
          transform="rotate(-90 150 150)"
        />
      </svg>
      <div className="circular-center">
        {getIcon(iconName, color, 60)}
        <motion.div 
          className="circular-percentage" 
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {percentage}%
        </motion.div>
      </div>
    </div>
  );
};

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

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
      
      <main className="page-content skills-dashboard-content">
        <div className="page-header">
          <h1 className="cinematic-title">Ecosistema Técnico</h1>
          <p className="page-subtitle text-slate-400">
            Selecciona una tecnología para ver su nivel de dominio.
          </p>
        </div>

        <div className="dashboard-wrapper">
          {/* Lado Izquierdo: Lista de Botones de Habilidades */}
          <div className="skills-selector">
            {skills.map((s, idx) => {
              const isActive = activeSkill.name === s.name;
              return (
                <button 
                  key={idx}
                  className={`skill-select-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveSkill(s)}
                  style={{
                    borderColor: isActive ? s.color : 'rgba(255,255,255,0.1)',
                    background: isActive ? `linear-gradient(90deg, rgba(255,255,255,0.05), transparent)` : 'transparent'
                  }}
                >
                  <div className="skill-btn-icon">
                    {getIcon(s.icon, isActive ? s.color : '#64748b', 24)}
                  </div>
                  <span className="skill-btn-name" style={{ color: isActive ? '#fff' : '#94a3b8' }}>
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Lado Derecho: Visualizador Principal */}
          <div className="skills-visualizer glass-panel">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSkill.name}
                className="visualizer-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="visualizer-chart">
                  <CircularProgress 
                    percentage={activeSkill.percentage} 
                    color={activeSkill.color} 
                    iconName={activeSkill.icon}
                  />
                </div>
                
                <div className="visualizer-details">
                  <h2 style={{ color: activeSkill.color }}>{activeSkill.name}</h2>
                  <p className="skill-desc">
                    {getSkillDescription(activeSkill.name)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Soft Skills Premium Dashboard */}
        <div className="soft-skills-dashboard mt-12 w-full max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="cinematic-title text-3xl">Habilidades Blandas</h2>
            <p className="page-subtitle text-slate-400">Competencias interpersonales y cognitivas</p>
          </div>
          <div className="soft-skills-grid">
            {softSkills.map((s, idx) => (
              <motion.div 
                key={idx} 
                className="soft-skill-card glass-panel"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="soft-skill-icon-wrapper">
                  {getSoftIcon(s.icon, "#38bdf8", 40)}
                </div>
                <div className="soft-skill-content">
                  <h3 className="soft-skill-title text-white">{s.name}</h3>
                  <p className="text-slate-400 text-sm mt-2">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
