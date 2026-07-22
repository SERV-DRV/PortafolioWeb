import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../../features/home/pages/HomePage'));
const ProjectsPage = lazy(() => import('../../features/projects/pages/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('../../features/projects/pages/ProjectDetailsPage'));
const SkillsPage = lazy(() => import('../../features/skills/pages/SkillsPage'));


export default function AppRoutes() {
  return (
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#030712', color: '#38bdf8' }}>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
