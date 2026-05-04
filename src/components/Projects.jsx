import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Jaga Sehat',
      description: 'Web application for health & welfare innovation. Built with React (Vite), Node.js (Hapi.js), and PostgreSQL.',
      tech: ['React', 'Vite', 'Node.js', 'Hapi.js', 'PostgreSQL']
    },
    {
      title: 'DPN (Digital Promotion National)',
      description: 'Payment system for managing invoice receipts across branch offices.',
      tech: ['C#', 'ASP.NET', 'SQL Server']
    },
    {
      title: 'E-Document',
      description: 'Application for submitting and processing agreement requests with predefined templates.',
      tech: ['C#', 'ASP.NET', 'SQL Server']
    },
    {
      title: 'SMS (Service Management System)',
      description: 'IT service catalog application with multiple request templates.',
      tech: ['C#', 'ASP.NET', 'SQL Server']
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured <span>Projects</span></h2>
        <div className="projects-grid" style={gridStyle}>
          {projects.map((project, index) => (
            <div key={index} className="card glass">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{project.title}</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

export default Projects;
