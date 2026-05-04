import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['React.js', 'Vite', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Back-End',
      skills: ['Node.js', 'Hapi.js', 'REST API', 'RabbitMQ', 'PostgreSQL', 'SQL Server', 'ASP.NET']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>My <span>Skills</span></h2>
        <div className="skills-grid" style={gridStyle}>
          {skillCategories.map((category, index) => (
            <div key={index} className="card glass skill-card">
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="badge">
                    {skill}
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

export default Skills;
