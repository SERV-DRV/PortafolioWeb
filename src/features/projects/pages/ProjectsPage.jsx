import React from 'react';
import { useNavigate } from 'react-router-dom';
import PillNav from '../../../shared/components/layout/PillNav';
import Particles from '../../../shared/components/ui/Particles';
import Folder from '../../../shared/components/ui/Folder';
import { projects } from '../../../shared/data/portfolioData';
import './ProjectsPage.css';

// Colores únicos para los folders
const folderColors = ['#5227FF', '#FF2768', '#27FF80', '#FFB027', '#27D6FF'];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container projects-immersive-page">
      <div className="background-layer">
        <Particles
          particleColors={['#38bdf8', '#0ea5e9']}
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
      
      <div className="projects-content-wrapper">
        <h1 className="cinematic-title">Mis Proyectos</h1>
        <p className="page-subtitle text-slate-400 mb-12">
          Haz clic en un folder para abrirlo y explora las capturas. Presiona una captura para ver detalles del proyecto.
        </p>

        <div className="folders-grid">
          {projects.map((p, idx) => {
            const fColor = folderColors[idx % folderColors.length];

            // Crear los "papeles" (imágenes) para el folder
            const folderItems = p.images.slice(0, 3).map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Captura ${i}`} 
                className="folder-paper-img"
                loading="lazy"
                decoding="async"
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que el folder se cierre
                  navigate(`/projects/${p.id}`);
                }}
                style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ));

            return (
              <div key={p.id} className="folder-item-container">
                <Folder 
                  color={fColor} 
                  size={2.5} 
                  items={folderItems} 
                  className="project-folder"
                />
                <h3 className="folder-title" style={{ color: fColor }}>{p.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}