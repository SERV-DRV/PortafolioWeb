import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../features/home/pages/HomePage';
import ProjectsPage from '../../features/projects/pages/ProjectsPage';
import ProjectDetailsPage from '../../features/projects/pages/ProjectDetailsPage';
import SkillsPage from '../../features/skills/pages/SkillsPage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
