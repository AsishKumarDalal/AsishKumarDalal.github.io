'use client';

import { profile, projects, oss, experience } from './data';
import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="minimal-main">
      <nav className="dock">
        <a href="#about" className="dock-item">About</a>
        <a href="#experience" className="dock-item">Experience</a>
        <Link href="/projects" className="dock-item">Projects</Link>
        <a href="#oss" className="dock-item">OSS</a>
      </nav>

      <header id="about" className="hero-section">
        <div className="hero-content">
          <img src={profile.avatar} alt={profile.name} className="hero-avatar" />
          <div className="hero-text">
            <h1 style={{ marginBottom: '0.2rem' }}>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-bio">{profile.bio}</p>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {profile.linkedin && profile.linkedin !== "#" && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
        </div>
      </header>

      <div className="divider"></div>

      <section id="experience" className="minimal-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-meta">
                <p className="timeline-date">{exp.period}</p>
              </div>
              <div className="timeline-content">
                <h3>
                  {exp.company}
                  {exp.liveLink && (
                    <a href={exp.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                      Live &#8599;
                    </a>
                  )}
                </h3>
                <p className="role-text">{exp.role}</p>
                <p className="desc-text">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="minimal-section">
        <div className="section-header">
          <h2 className="section-title" style={{ marginBottom: 0 }}>Selected Work</h2>
          <Link href="/projects" className="view-all">View all projects &#8594;</Link>
        </div>
        <div className="project-list">
          {projects.flatMap(d => d.items).slice(0, 3).map((project, j) => (
            <div key={j} className="project-list-item">
              <div className="project-list-content">
                <div className="project-list-header">
                  <h3>{project.name}</h3>
                  <div className="project-list-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Source</a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                    )}
                  </div>
                </div>
                <p className="desc-text">{project.description}</p>
                <div className="minimal-tags">
                  {project.tags?.join(' • ')}
                </div>
              </div>
              {project.image && (
                <img src={project.image} alt={project.name} className="project-list-image" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="oss" className="minimal-section">
        <h2 className="section-title">Open Source</h2>
        <div className="project-list">
          {oss.map((item, i) => (
            <div key={i} className="project-list-item">
              <div className="project-list-content">
                <div className="project-list-header">
                  <h3>{item.name}</h3>
                  <div className="project-list-links">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">View Pull Request</a>
                  </div>
                </div>
                <p className="desc-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" style={{ borderTop: 'none', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} {profile.name}. Designed for impact.</p>
      </footer>
    </main>
  );
}