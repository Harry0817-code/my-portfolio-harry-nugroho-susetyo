import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle} className="glass">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Harry Nugroho Susetyo. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  padding: '2rem 0',
  textAlign: 'center',
  borderTop: '1px solid var(--border-color)',
  color: 'var(--text-tertiary)',
  fontSize: '0.9rem',
};

export default Footer;
