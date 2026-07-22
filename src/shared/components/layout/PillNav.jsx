import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { personalInfo } from '../../../shared/data/portfolioData';
import './PillNav.css';

export default function PillNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
    <>
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

          <div className="nav-socials">
            <a href={personalInfo.links.github} target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={`mailto:${personalInfo.contact.email}`} title={personalInfo.contact.email}>
              <FaEnvelope size={20} />
            </a>
            <a href="#" title="LinkedIn" onClick={(e) => e.preventDefault()}>
              <FaLinkedin size={20} />
            </a>
          </div>
          
          <div className="nav-action">
            <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
              <Menu size={24} color="#fff" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-menu-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Off-Canvas Mobile Menu */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="nav-logo">
            <Terminal size={20} color="#38bdf8" />
            <span className="logo-text">Menú</span>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={24} color="#fff" />
          </button>
        </div>
        
        <div className="drawer-links">
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Habilidades</Link>
          <Link to="/#about" onClick={(e) => { handleScrollToAbout(e); setIsOpen(false); }}>Sobre Mí</Link>
        </div>

        <div className="drawer-socials">
          <a href={personalInfo.links.github} target="_blank" rel="noreferrer">
            <FaGithub size={24} /> GitHub
          </a>
          <a href={`mailto:${personalInfo.contact.email}`}>
            <FaEnvelope size={24} /> {personalInfo.contact.email}
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <FaLinkedin size={24} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}