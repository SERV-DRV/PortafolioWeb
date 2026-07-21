import React from 'react';
import PillNav from '../../../shared/components/layout/PillNav';
import CircularGallery from '../../../shared/components/ui/CircularGallery';
import Particles from '../../../shared/components/ui/Particles';
import { projects } from '../../../shared/data/portfolioData';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const galleryItems = projects.map(p => ({
    image: p.logo || p.images[0],
    text: p.name
  }));

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
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} items={galleryItems} />
        </div>
      </div>
    </div>
  );
}
