import { memo, useState } from 'react'
import { ArrowLeft, ArrowRight, Grid3X3, List } from 'lucide-react'
import { Link } from 'react-router-dom'

/*
COMPONENT: Projects
Responsabilidade: Página de projetos com grid de cards.
Arquitetura: Componente funcional com dados estáticos e layout responsivo.
Decisões Técnicas:
- CSS classes em App.css seguindo o padrão do projeto.
- React.memo para performance.
- Grid/List toggle (visual).
*/

const projects = [
  
  {
    title: 'Grid Master Analytics',
    year: '2024',
    category: 'ENERGY MONITORING',
    description: 'Real-time distribution network monitoring dashboard that reduced critical incident response time by 40% through intuitive data visualization.',
    tags: ['Next.js', 'WebGL', 'Tailwind'],
  },
  
  {
    title: 'Nova Finance',
    year: '2023',
    category: 'MOBILE APPLICATION',
    description: 'A complete design overhaul of a neo-bank mobile application focusing on accessibility and transaction speed.',
    tags: ['React Native', 'Design System'],
  },
  
  {
    title: 'EcoTrack SaaS',
    year: '2023',
    category: 'SUSTAINABILITY DASHBOARD',
    description: 'B2B platform allowing corporations to track, measure, and report their carbon footprint in real-time.',
    tags: ['Vue 3', 'D3.js', 'Node.js'],
  },

  {
    title: 'TypeScale Studio',
    year: '2023',
    category: 'DEVELOPER TOOL',
    description: 'Open-source visual tool for generating fluid typography CSS variables for modern web applications.',
    tags: ['Svelte', 'Open Source'],
  },
]

const Projects = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <main className="projects-page">
      <div className="container">
        
        {/* ── Back Navigation ── */}
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link> 

        {/* ── Hero ── */}
        <section className="projects-hero">
          <div className="projects-hero-text">
            <h1 className="projects-title">Selected Works</h1>
            <p className="projects-subtitle">
              A curated collection of digital products, design systems, and<br />
              engineering challenges solved with precision.
            </p>
          </div>
          <div className="view-toggle">
            <button
              className={`view-toggle-btn ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
              aria-label="Grid view"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              className={`view-toggle-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
              aria-label="List view"
            >
              <List size={16} />
            </button>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <div className={`projects-grid ${view === 'list' ? 'list-view' : ''}`}>
          {projects.map(p => (
            <article key={p.title} className="project-card">
              <div className="project-card-image" />
              <div className="project-card-body">
                <div className="project-card-header">
                  <h2 className="project-card-title">{p.title}</h2>
                  <span className="project-card-year">{p.year}</span>
                </div>
                <span className="project-card-category">{p.category}</span>
                <p className="project-card-description">{p.description}</p>

                <a href="#" className="project-link">
                  View case study <ArrowRight size={16} />
                </a>
                <div className="project-card-tags">
                  {p.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>  

        {/* ── CTA ── */}
        <section className="projects-cta">
          <p className="projects-cta-label">Have a specific project in mind?</p>
          <a href="#" className="projects-cta-link">
            Let's discuss the details <ArrowRight size={16} />
          </a>
          <Link to="/projects" className="projects-cta-archive">
            View all archive
          </Link>
        </section>
      </div>
    </main>
  )
}

export default memo(Projects)
