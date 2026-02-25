import { memo } from 'react'
import { ArrowLeft, Monitor, Cpu, Keyboard, Headphones, Mouse, Code2, Palette, Terminal, Globe, Zap, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'

/*
COMPONENT: Workspace
Responsabilidade: Página dedicada ao setup e ferramentas de trabalho.
Arquitetura: Componente funcional com dados estáticos e layout limpo por seções.
Decisões Técnicas:
- CSS classes em App.css seguindo o padrão do projeto.
- React.memo para performance.
- Categorias separadas por Hardware, Software, Design.
*/

const workspace = {
  hardware: [

    {
      icon: Cpu,
      name: 'MacBook Pro M3 Max',
      description: 'Main machine for development. 36GB RAM, 1TB SSD. Handles heavy builds and design work simultaneously.',
      highlight: true,
    },

    {
      icon: Monitor,
      name: 'Dell UltraSharp 32" 4K',
      description: 'External display for extended workspace. Color-accurate panel perfect for design and development.',
      highlight: false,
    },
    
    {
      icon: Keyboard,
      name: 'Keychron Q1 Pro',
      description: 'Mechanical keyboard with Gateron Pro Brown switches. Wireless with hot-swappable keys.',
      highlight: false,
    },
    {
      icon: Mouse,
      name: 'Logitech MX Master 3S',
      description: 'Ergonomic mouse with customizable buttons. The horizontal scroll wheel is a game-changer for timelines.',
      highlight: false,
    },
    {
      icon: Headphones,
      name: 'Sony WH-1000XM5',
      description: 'Noise-cancelling headphones for deep focus sessions. Essential for open-office environments.',
      highlight: false,
    },
  ],
  development: [
    {
      icon: Code2,
      name: 'VS Code',
      description: 'Primary code editor with a curated set of extensions. Theme: Vitesse Dark. Font: JetBrains Mono.',
    },
    {
      icon: Terminal,
      name: 'Warp Terminal',
      description: 'Modern terminal with AI-powered command suggestions and collaborative features.',
    },
    {
      icon: Globe,
      name: 'Arc Browser',
      description: 'Main browser for development and research. Spaces feature keeps projects organized.',
    },
    {
      icon: Zap,
      name: 'Raycast',
      description: 'Replacement for Spotlight. Clipboard history, snippets, window management — all in one launcher.',
    },
  ],
  design: [
    {
      icon: Palette,
      name: 'Figma',
      description: 'Primary design tool for UI/UX work. Component libraries, auto-layout, and dev mode for handoff.',
    },
    {
      icon: Coffee,
      name: 'Notion',
      description: 'Knowledge base, project management, and documentation. Template system for consistency.',
    },
  ],
}

const Workspace = () => {
  return (
    <main className="workspace-page">
      <div className="container">
        {/* ── Back Navigation ── */}
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* ── Hero ── */}
        <section className="workspace-hero">
          <h1 className="workspace-title">Workspace</h1>
          <p className="workspace-subtitle">
            Tools, hardware, and software I use daily to build<br />
            digital products and solve engineering challenges.
          </p>
        </section>

        {/* ── Hardware Section ── */}
        <section className="ws-section">
          <div className="ws-section-header">
            <Cpu size={18} className="ws-section-icon" />
            <h2 className="ws-section-title">Hardware</h2>
          </div>
          <div className="ws-items-grid">
            {workspace.hardware.map(item => (
              <article key={item.name} className={`ws-item-card ${item.highlight ? 'highlighted' : ''}`}>
                <div className="ws-item-icon-wrap">
                  <item.icon size={20} />
                </div>
                <div className="ws-item-content">
                  <h3 className="ws-item-name">{item.name}</h3>
                  <p className="ws-item-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Development Section ── */}
        <section className="ws-section">
          <div className="ws-section-header">
            <Code2 size={18} className="ws-section-icon" />
            <h2 className="ws-section-title">Development</h2>
          </div>
          <div className="ws-items-grid">
            {workspace.development.map(item => (
              <article key={item.name} className="ws-item-card">
                <div className="ws-item-icon-wrap">
                  <item.icon size={20} />
                </div>
                <div className="ws-item-content">
                  <h3 className="ws-item-name">{item.name}</h3>
                  <p className="ws-item-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Design & Productivity Section ── */}
        <section className="ws-section">
          <div className="ws-section-header">
            <Palette size={18} className="ws-section-icon" />
            <h2 className="ws-section-title">Design & Productivity</h2>
          </div>
          <div className="ws-items-grid">
            {workspace.design.map(item => (
              <article key={item.name} className="ws-item-card">
                <div className="ws-item-icon-wrap">
                  <item.icon size={20} />
                </div>
                <div className="ws-item-content">
                  <h3 className="ws-item-name">{item.name}</h3>
                  <p className="ws-item-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="workspace-cta">
          <p className="workspace-cta-label">Curious about my workflow?</p>
          <a href="#" className="workspace-cta-link">
            Let's discuss the details →
          </a>
        </section>
      </div>
    </main>
  )
}

export default memo(Workspace)