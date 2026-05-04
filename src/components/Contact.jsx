import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Get In <span>Touch</span></h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
        </p>

        <div className="contact-buttons" style={btnWrapperStyle}>
          <a href="mailto:harrynugrohosusetyo@gmail.com" className="btn btn-primary glass-btn">
            <Mail size={20} />
            Email Me
          </a>

          <a href="https://www.linkedin.com/in/harryns" target="_blank" rel="noopener noreferrer" className="btn btn-outline glass-btn">
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a href="https://github.com/Harry0817-code" target="_blank" rel="noopener noreferrer" className="btn btn-outline glass-btn">
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const btnWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

export default Contact;
