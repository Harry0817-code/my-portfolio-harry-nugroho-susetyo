import React from 'react';

const Education = () => {
  const certs = [
    {
      title: 'Certificate in Fundamental Back-End Development with JavaScript',
      issuer: 'Dicoding Indonesia',
      date: 'Jul 2025 – Jul 2028',
      desc: 'Learned server management, authentication, RabbitMQ, and REST API development aligned with AWS standards.'
    },
    {
      title: 'Certificate in Fundamentals Web Application Development with React',
      issuer: 'Dicoding Indonesia',
      date: 'Jul 2025 – Jul 2028',
      desc: 'Built responsive React web apps using routing, context, and hooks.'
    },
    {
      title: 'Building Web Applications with React',
      issuer: 'Dicoding Indonesia',
      date: 'May 2025 – May 2028',
      desc: 'Developed reusable UI components and managed state with functional and controlled components.'
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2>Education & <span>Certifications</span></h2>
        
        <div className="education-section" style={{ marginBottom: '4rem' }}>
          <div className="card glass" style={{ borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Universitas Gunadarma</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h4 style={{ color: 'var(--accent-color)', fontWeight: 500 }}>Bachelor's degree, Information Technology</h4>
              <span className="badge">2014 – 2018</span>
            </div>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}>Focused on programming logic, data structures, and software development.</li>
              <li>Completed individual and group projects across various programming disciplines.</li>
            </ul>
          </div>
        </div>

        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-primary)' }}>Certifications</h3>
        <div className="certs-grid" style={gridStyle}>
          {certs.map((cert, index) => (
            <div key={index} className="card glass">
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', lineHeight: '1.4' }}>{cert.title}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{cert.issuer}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{cert.date}</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

export default Education;
