"use client";

import { useState } from 'react';
import { profile, projects, oss, experience } from './data';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AI/ML' | 'Solo Founder'>('ALL');

  const allProjects = projects.flatMap(group => 
    group.items.map(item => ({ ...item, domain: group.domain }))
  );

  const filteredProjects = activeFilter === 'ALL' 
    ? allProjects 
    : allProjects.filter(p => p.domain === activeFilter);

  return (
    <main className="main-container">
      {/* Hero Header */}
      <section id="about" className="hero-card">
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span>SYS_STATUS // ONLINE • AVAILABLE FOR WORK</span>
        </div>

        <div className="hero-top">
          <div>
            <h1>{profile.name}</h1>
            <p className="mono-font" style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: '0.4rem', fontWeight: 700 }}>
              {profile.role}
            </p>
          </div>
          {profile.avatar && (
            <img src={profile.avatar} alt={profile.name} className="hero-avatar" />
          )}
        </div>

        <p className="hero-bio">{profile.about || profile.bio}</p>

        <div className="hero-actions">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-retro">
              [GITHUB ↗]
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-retro">
              [LINKEDIN ↗]
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="link-retro">
              [EMAIL ✉]
            </a>
          )}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-retro" style={{ borderColor: 'var(--foreground)', color: 'var(--foreground)' }}>
            [RESUME 📄]
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>SELECTED_WORK [{filteredProjects.length}]</h2>

        <div className="filter-bar">
          <button 
            className={`filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ALL')}
          >
            [ALL]
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'AI/ML' ? 'active' : ''}`}
            onClick={() => setActiveFilter('AI/ML')}
          >
            [AI / ML]
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Solo Founder' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Solo Founder')}
          >
            [SOLO FOUNDER]
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-header">
                <span className="project-name">{project.name}</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      [SRC ↗]
                    </a>
                  )}
                  {'liveLink' in project && project.liveLink && (
                    <a href={project.liveLink as string} target="_blank" rel="noopener noreferrer" className="link-retro" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                      [LIVE ↗]
                    </a>
                  )}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-badge">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>EXPERIENCE // HISTORY</h2>
        <div className="timeline-list">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-period">[{exp.period}]</div>
              <div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">
                  {exp.company} {exp.liveLink && <a href={exp.liveLink} target="_blank" rel="noopener noreferrer" className="link-subtle" style={{ marginLeft: '0.5rem' }}>[SITE ↗]</a>}
                </div>
                <p className="project-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source Section */}
      <section id="oss">
        <h2>OPEN_SOURCE // CONTRIBUTIONS</h2>
        <div className="projects-grid">
          {oss.map((item, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-header">
                <span className="project-name">{item.name}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-retro" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                    [PULL_REQUEST ↗]
                  </a>
                )}
              </div>
              <p className="project-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Retro Dock Navigation */}
      <nav className="dock">
        <a href="#about" className="dock-item">ABOUT</a>
        <a href="#projects" className="dock-item">WORK</a>
        <a href="#experience" className="dock-item">EXP</a>
        <a href="#oss" className="dock-item">OSS</a>
      </nav>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</span>
        <span>SYS_VER 2.5.0 // RETRO_BRIGHT</span>
      </footer>
    </main>
  );
}
