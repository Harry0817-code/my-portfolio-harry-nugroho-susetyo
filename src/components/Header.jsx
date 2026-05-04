import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'glass' : ''}`} style={headerStyle}>
      <div className="container" style={containerStyle}>
        <div className="logo" style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--accent-color)' }}>
          <a href="#hero" style={{ cursor: 'pointer' }}>Harry Nugroho Susetyo</a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={desktopNavStyle}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" style={iconBtnStyle}>
            {theme === 'dark' ? <Sun size={20} color="var(--accent-color)" /> : <Moon size={20} color="var(--text-primary)" />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="mobile-toggle-wrapper" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="theme-toggle mobile-theme-toggle" aria-label="Toggle Theme" style={{ ...iconBtnStyle, display: 'flex' }}>
            {theme === 'dark' ? <Sun size={20} color="var(--accent-color)" /> : <Moon size={20} color="var(--text-primary)" />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ ...iconBtnStyle, color: 'var(--text-primary)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass" style={mobileMenuStyle}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// Basic inline styles to structure Header
const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  padding: '1rem 0'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const desktopNavStyle = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
};

const iconBtnStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: 0
};

const mobileMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderTop: '1px solid var(--border-color)',
};

export default Header;
