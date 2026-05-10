'use client';

import { profile, projects } from '../data';
import '../globals.css';

export default function ProjectsPage() {
  return (
    <main>
      <nav className="dock">
        <a href="/" className="dock-item">Home</a>
        <a href="/projects" className="dock-item">Projects</a>
      </nav>

      <section className="section">
        <h1>Projects</h1>
        <p className="intro">I've worked on a range of machine learning and software engineering projects. Here are a few that showcase my expertise.</p>
        
        {projects.map((domain, i) => (
          <div key={i} style={{ marginBottom: '4rem' }}>
            <h3 className="domain-title">{domain.domain}</h3>
            <div className="project-grid">
              {domain.items.map((project, j) => (
                <div key={j} className="project-item card">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="project-image"
                    />
                  )}
                  <div className="project-title">{project.name}</div>
                  <div className="tag-list">
                    {project.tags?.map((tag, k) => (
                      <span key={k} className="tag">{tag}</span>
                    ))}
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">View Source</a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Designed for impact.</p>
      </footer>
    </main>
  );
}