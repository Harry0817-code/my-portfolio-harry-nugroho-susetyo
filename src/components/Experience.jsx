import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'React & Back-End Developer (Bootcamp Project)',
      company: 'Remote',
      date: 'July 2025',
      points: [
        'Developed Jaga Sehat, a full-stack health-tech platform built with React (Vite), Node.js (Hapi.js), and PostgreSQL.',
        'Integrated Gemini AI (2.5 Flash Lite) to provide users with smart BMI analysis and personalized health advice.',
        'Built a real-time text chat feature via WebSocket for seamless patient-doctor consultations.',
        'Designed a secure Admin Dashboard with full CRUD capabilities to manage doctor data and hospital information.',
        'Implemented robust security using JWT for authentication and Bcrypt for password hashing.',
        'Live Prototype: jaga-sehat-prototype.vercel.app',
        'Full-stack Repo: github.com/Harry0817-code/my-project-fullstack-jaga-sehat'
      ]
    },
    {
      title: 'Administration and System',
      company: 'AJB Bumiputera 1912',
      date: 'December 2020 – March 2025',
      points: [
        'Designed & reviewed agency databases for accuracy and completeness.',
        'Generated reports on agent development & productivity.',
        'Verified agency data across multiple sources.'
      ]
    },
    {
      title: '.Net Developer',
      company: 'PT Bentang Mitraguna',
      date: 'January 2019 – June 2020',
      points: [
        'Contributed to full-stack application development, handling both front-end and back-end tasks.',
        'Collaborated with the team to manage client projects and document feature requests or modifications.',
        'Performed application review and User Acceptance Testing (UAT) with clients to ensure system quality.',
        'Provided technical support by checking database and resolving code-related issues.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2>Work <span>Experience</span></h2>
        <div className="timeline" style={timelineStyle}>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item card glass" style={timelineItemStyle}>
              <div className="timeline-header" style={headerStyle}>
                <div>
                  <h3 style={{ color: 'var(--accent-color)' }}>{exp.title}</h3>
                  <h4 style={{ fontWeight: 500, color: 'var(--text-primary)', marginTop: '0.25rem' }}>{exp.company}</h4>
                </div>
                <span className="badge" style={{ alignSelf: 'flex-start' }}>{exp.date}</span>
              </div>
              <ul style={listStyle}>
                {exp.points.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const timelineStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  position: 'relative',
  paddingLeft: '1.5rem',
  borderLeft: '2px solid var(--border-color)',
};

const timelineItemStyle = {
  position: 'relative',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '1rem',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '1rem',
};

const listStyle = {
  paddingLeft: '1.25rem',
};

export default Experience;
