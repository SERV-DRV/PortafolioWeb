import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import CircularGallery from '../../../shared/components/ui/CircularGallery';
import Particles from '../../../shared/components/ui/Particles';
import { projects } from '../../../shared/data/portfolioData';
import './ProjectsPage.css';

const generateCoverImage = (title, index) => {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  
  // Colores dinámicos basados en el índice
  const hue = (index * 60) % 360;
  const grad = ctx.createLinearGradient(0, 0, 800, 800);
  grad.addColorStop(0, `hsl(${hue}, 80%, 20%)`);
  grad.addColorStop(1, `hsl(${hue + 40}, 80%, 40%)`);
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 800);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Dividir título largo en líneas si es necesario
  const words = title.split(' ');
  if (words.length > 2) {
    ctx.fillText(words.slice(0, 2).join(' '), 400, 350);
    ctx.fillText(words.slice(2).join(' '), 400, 450);
  } else {
    ctx.fillText(title, 400, 400);
  }
  
  return canvas.toDataURL('image/png');
};

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const galleryItems = useMemo(() => projects.map((p, idx) => ({
    image: generateCoverImage(p.name, idx),
    text: p.name
  })), []);
  
  const activeProject = projects[activeIndex];

  return (
    <div className="page-container projects-immersive-page">
      <div className="background-layer">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <PillNav />
      
      <div className="gallery-wrapper">
        <h1 className="cinematic-title">Mis Proyectos</h1>
        <div className="gallery-full-container">
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            items={galleryItems}
            onActiveIndexChange={(idx) => {
              if (idx !== activeIndex) setActiveIndex(idx);
            }} 
          />
        </div>
        
        {/* Botón interactivo central */}
        <div className="active-project-action">
          <motion.button 
            className="view-project-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/projects/${activeProject.id}`)}
          >
            Explorar: {activeProject?.name}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
