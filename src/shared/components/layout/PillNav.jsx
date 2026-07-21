import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import './PillNav.css';

export default function PillNav() {
  return (
    <nav className="pill-nav-container">
      <div className="pill-nav glass-panel">
        <div className="nav-logo">
          <Terminal size={20} color="#fff" />
          <span className="logo-text">SERV-DRV</span>
        </div>
        
        <div className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/about">About</Link>
        </div>
        
        <div className="nav-action">
          <Link to="/contact" className="btn-primary-solid">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
