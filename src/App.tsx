import { useEffect, useState, memo } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Mail, MessageSquare, Github, Zap, Shield, Globe, Layers, Clock as ClockIcon, Calendar, BookOpen, Sun, Moon } from 'lucide-react'
import { I18N } from './constants/i18n'
import './App.css'
import minhaFoto from './assets/minhafoto.png'


// Import pages
import AboutPage from './pages/abount'
import ArticlesPage from './pages/articles'
import ProjectsPage from './pages/projects'

// Contribution heatmap data (generated once, stable across renders)
const contributions: number[][] = Array.from({ length: 53 }, () =>
  Array.from({ length: 7 }, () => {
    const r = Math.random()
    if (r > 0.88) return 4
    if (r > 0.74) return 3
    if (r > 0.58) return 2
    if (r > 0.38) return 1
    return 0
  })
)

/*
COMPONENT: Clock
Responsabilidade: Exibe a hora local em tempo real.
Arquitetura: Componente funcional isolado com efeito colateral de timer.
Decisões Técnicas:
- setInterval para atualização a cada 1s.
- React.memo para evitar re-renderizações desnecessárias.
Performance: useEffect limpa o intervalo no unmount.
*/

const Clock = memo(() => {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const h = String(time.getHours()).padStart(2, '0')
  const m = String(time.getMinutes()).padStart(2, '0')
  return <>{h}:{m}</>
})

Clock.displayName = 'Clock'

/*
COMPONENT: Navbar
Responsabilidade: Navegação principal e links sociais.
Arquitetura: Presentational component com composição de links e I18N centralizado.
Decisões Técnicas:
- React.memo para performance.
- Lucide Icons para interface consistente.
*/
const Navbar = memo(() => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          GC
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0 8px'
            }}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="https://linkedin.com/in/gustavocelleguim" target="_blank" rel="noopener noreferrer" className="nav-linkedin">
            <div className="status-dot-nav" />
            LinkedIn
          </a>
          <a href="#" className="btn-nav-cta">Get in touch</a>
        </div>
      </div>
    </nav>
  )
})

Navbar.displayName = 'Navbar'

/*
COMPONENT: App
Responsabilidade: Root da aplicação e orquestração de seções bento e hero.
Arquitetura: Composição de seções semânticas baseada em I18N.
Decisões Técnicas:
- Uso de semantic tags (article, section).
- Grid layout definido no CSS.
- Abstração de strings para I18N.
*/

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">{I18N.FOOTER.COPY}</span>
          <div className="footer-links">
            <a href="https://linkedin.com/in/gustavocelleguim" target="_blank" rel="noopener noreferrer">{I18N.FOOTER.LINKS[0]}</a>
            <a href="https://github.com/gcelleguim" target="_blank" rel="noopener noreferrer">{I18N.FOOTER.LINKS[1]}</a>
            <a href="#" target="_blank" rel="noopener noreferrer">{I18N.FOOTER.LINKS[2]}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Home = memo(() => {
  const copyEmail = () => {
    navigator.clipboard?.writeText('gustavo@celleguim.com')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" aria-label="Seção de Introdução">
        <div className="container hero-inner">
          <div className="badge">
            <div className="dot-container">
              <div className="dot pulse" />
              <div className="dot green" />
            </div>
            {I18N.HERO.BADGE}
          </div>
          <h1 className="hero-title">
            {I18N.HERO.TITLE_1}<br />
            {I18N.HERO.TITLE_2}<br />
            {I18N.HERO.TITLE_3}
          </h1>
          <p className="hero-sub">{I18N.HERO.SUBTITLE}</p>
          <div className="tech-stack">
            {I18N.HERO.TECH_STACK.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
          
          <div className="hero-photo-container">
            <div className="hero-photo-wrap">
              <img 
                src={minhaFoto} 
                alt="Gustavo Celleguim" 
                className="hero-photo"
              />

              <div className="hero-photo-fade" />
            </div>
           
          </div>
        </div>
      </section>

      {/* ── Bento Grid ── */}
      <section className="bento-section" aria-label="Projetos e Informações">
        <div className="container bento-grid">

          {/* Card A – Featured Project */}
          <article id="card-project" className="card card-project">
            <div className="project-visual">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" 
                alt="Grid Master Analytics Dashboard" 
                className="project-img"
              />
            </div>

            <div className="project-info">
              <div className="project-tags">
                <span className="pill-tag-dark">{I18N.BENTO.PROJECT.BADGE_FEATURED}</span>
                <span className="pill-tag-white">{I18N.BENTO.PROJECT.BADGE_TECH}</span>
              </div>
              <h3 className="project-title">{I18N.BENTO.PROJECT.TITLE}</h3>
              <p className="project-description">{I18N.BENTO.PROJECT.DESCRIPTION}</p>
              <div className="project-link-wrap">
                <a href="#" className="project-link">
                  {I18N.BENTO.PROJECT.LINK} <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          <article className="card card-about">
            <div className="about-top-content">
              <div className="about-header">
                <div className="avatar-gc">GC</div>
                <Link to="/about" className="about-link">
                  <span>{I18N.BENTO.ABOUT.LINK}</span>
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                    <path d="M1 6L6 1M6 1H2M6 1V5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              <h2 className="about-title">{I18N.BENTO.ABOUT.TITLE}</h2>
              <p className="about-text">{I18N.BENTO.ABOUT.TEXT}</p>
            </div>

            <div className="about-tags-container">
              <div className="about-tags">
                {I18N.BENTO.ABOUT.BADGES.map((tag) => (
                  <span key={tag} className="about-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Card C – Local Time */}
          <article className="card card-time">
            <div className="time-label-row">
              <span className="micro-label">
                <ClockIcon size={10} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                {I18N.BENTO.TIME.LABEL}
              </span>
              <div className="online-status">
                <div className="status-dot" />
                {I18N.BENTO.TIME.STATUS}
              </div>
            </div>
            <div className="big-clock"><Clock /></div>
            <div className="location-tag">
              {I18N.BENTO.TIME.LOCATION} <span className="gmt-tag">{I18N.BENTO.TIME.GMT}</span>
            </div>
            <div className="next-slot">
              <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Calendar size={12} />
                {I18N.BENTO.TIME.NEXT_SLOT_LABEL}
              </span>
              <span style={{ color: '#475569', fontWeight: 500 }}>{I18N.BENTO.TIME.NEXT_SLOT_VALUE}</span>
            </div>
          </article>

          {/* Card D – Workspace */}
          <article className="card card-workspace">
            <div className="workspace-header">
              <div className="workspace-label-group">
                <span className="workspace-label">{I18N.BENTO.WORKSPACE.LABEL}</span>
              </div>
              <a href="#" className="workspace-about-link">
                <span>About</span>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                  <path d="M1 6L6 1M6 1H2M6 1V5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="workspace-bg-decoration" aria-hidden="true">
              <svg width="117" height="94" viewBox="0 0 117 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 25L15 47L35 69" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M82 25L102 47L82 69" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M65 15L52 79" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="workspace-content">
              <ul className="ws-list">
                {I18N.BENTO.WORKSPACE.ITEMS.map(item => (
                  <li key={item} className="ws-item">
                    <div className="ws-dot" aria-hidden="true" />
                    <span className="ws-text">{item}</span>
                  </li>
                ))}
                {I18N.BENTO.WORKSPACE.ITEMS.length < 5 && I18N.BENTO.WORKSPACE.ITEMS.map((item, idx) => (
                   <li key={`${item}-${idx}`} className="ws-item">
                     <div className="ws-dot" aria-hidden="true" />
                     <span className="ws-text">{item}</span>
                   </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card E – Writing */}
          <article className="card card-writing">
            <div className="writing-header">
              <span className="micro-label">
                <BookOpen size={10} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                {I18N.BENTO.WRITING.LABEL}
              </span>
              <Link to="/articles" style={{ color: '#94a3b8' }} aria-label="Ver todos os artigos">
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="writing-list">
              {I18N.BENTO.WRITING.ARTICLES.map(article => (
                <div key={article.title} className="article-item">
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-meta">{article.meta}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="trusted-section" aria-label="Colaborações">
        <div className="container">
          <p className="trusted-label">{I18N.TRUSTED.LABEL}</p>
          <div className="trusted-logos">
            {I18N.TRUSTED.COMPANIES.map((company, index) => {
              const Icons = [Zap, Shield, Globe, Layers];
              const Icon = Icons[index % Icons.length];
              return (
                <div key={company} className="t-logo">
                  <Icon size={16} className="logo-icon" aria-hidden="true" />
                  {company}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="os-section" aria-label="Projetos Open Source">
        <div className="container">
          <article className="os-card">
            <div className="os-head">
              <div className="os-title-group">
                <Github size={20} className="os-gh-icon" aria-hidden="true" />
                <div>
                  <p className="os-label">{I18N.OS.LABEL}</p>
                  <p className="os-sub">{I18N.OS.SUBTITLE}</p>
                </div>
              </div>
              <span className="os-gh-link">
                {I18N.OS.LINK} <ExternalLink size={12} aria-hidden="true" />
              </span>
            </div>

            <div className="contrib-wrap">
              <div className="contrib-months">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => <span key={m}>{m}</span>)}
              </div>
              <div className="contrib-grid">
                {contributions.map((week, wi) => (
                  <div key={wi} className="contrib-week">
                    {week.map((lvl, di) => (
                      <div key={di} className={`contrib-day lv${lvl}`} aria-hidden="true" />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="contrib-legend">
              <span>{I18N.OS.LESS}</span>
              {[0, 1, 2, 3, 4].map(l => <div key={l} className={`contrib-day lv${l}`} aria-hidden="true" />)}
              <span>{I18N.OS.MORE}</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" aria-label="Contato">
        <div className="cta-inner">
          <h2 className="cta-title">{I18N.CTA.TITLE}</h2>
          <p className="cta-sub">{I18N.CTA.SUBTITLE}</p>
          <div className="cta-btns">
            <button className="btn btn-dark btn-lg">
              {I18N.CTA.PRIMARY}
              <MessageSquare size={16} aria-hidden="true" style={{ marginLeft: 8 }} />
            </button>
            <button className="btn btn-outline btn-lg" onClick={copyEmail}>
              {I18N.CTA.SECONDARY}
              <Mail size={16} aria-hidden="true" style={{ marginLeft: 8 }} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
})
