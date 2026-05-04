import React from 'react';
import myPicture from '../assets/my-picture.jpg';

const Hero = () => {
  return (
    <section id="hero" style={heroStyle}>
      <div className="container" style={containerStyle}>
        <div className="hero-content">
          <div className="greeting" style={{ fontFamily: 'monospace', color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            &lt;Hello World /&gt;
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>
            I'm <span className="text-accent">Harry Nugroho Susetyo</span>
          </h1>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Full-Stack Web Developer
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-tertiary)' }}>
            Motivated Full-Stack Developer with hands-on experience in React.js and Node.js.
            Passionate about creating efficient, maintainable, and user-friendly web applications.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-wrapper" style={imageWrapperStyle}>
          {/* We use a glowing border effect for the image */}
          <div className="image-glow"></div>
          <img src={myPicture} alt="Harry Nugroho Susetyo" style={imageStyle} />
        </div>
      </div>
    </section>
  );
};

const heroStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '80px', // Account for header
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap-reverse', // Image on top for mobile
  gap: '4rem',
  width: '100%',
};

const imageWrapperStyle = {
  position: 'relative',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  flexShrink: 0,
  margin: '0 auto',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  position: 'relative',
  zIndex: 2,
  border: '4px solid var(--surface-color)',
  boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)'
};

export default Hero;
