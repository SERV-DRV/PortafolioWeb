import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../features/home/pages/HomePage';
import ProjectsPage from '../../features/projects/pages/ProjectsPage';
import SkillsPage from '../../features/skills/pages/SkillsPage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
