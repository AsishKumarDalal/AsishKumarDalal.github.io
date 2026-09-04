import Link from 'next/link';
import { projects, profile } from '../data';

export const metadata = {
  title: 'Projects | Asish Kumar Dalal',
  description: 'Machine learning and software engineering projects by Asish Kumar Dalal.',
};

export default function ProjectsPage() {
  return (
    <main className="main-container">
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/" className="link-retro">
          ← BACK TO HOME
        </Link>
      </div>

      <h1 style={{ marginBottom: '1rem' }}>ALL_PROJECTS</h1>
      <p className="hero-bio" style={{ marginBottom: '3rem' }}>
        A complete archive of machine learning architectures built from scratch, systems engineering projects, and solo-engineered products.
      </p>

      {projects.map((domain, idx) => (
        <section key={idx} style={{ marginBottom: '3.5rem' }}>
          <h2>{domain.domain.toUpperCase()} [{domain.items.length}]</h2>
          <div className="projects-grid">
            {domain.items.map((project, pIdx) => (
              <div key={pIdx} className="project-card">
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
      ))}

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</span>
        <Link href="/" className="link-subtle">BACK TO HOME</Link>
      </footer>
    </main>
  );
}
