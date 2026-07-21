import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './PillNav.css';

export default function PillNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScrollToAbout = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="pill-nav-container">
      <div className="pill-nav glass-panel">
        <div className="nav-logo">
          <Terminal size={20} color="#fff" />
          <Link to="/" className="logo-text">SERV-DRV</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/#about" onClick={handleScrollToAbout}>Sobre Mí</Link>
        </div>
        
        <div className="nav-action">
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Habilidades</Link>
          <Link to="/#about" onClick={(e) => { handleScrollToAbout(e); setIsOpen(false); }}>Sobre Mí</Link>
        </div>
      )}
    </nav>
  );
}
