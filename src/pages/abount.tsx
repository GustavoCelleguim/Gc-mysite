import { memo } from 'react'
import { ArrowLeft, Layout, Zap, Server, Briefcase, GraduationCap, Code2, Palette, ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const experiences = [
    {
      period: '2022 — Present',
      title: ' Ui/UX',
      company: 'Enline',
      description: 'Leading the frontend architecture for a real-time energy distribution monitoring platform. Migrated legacy dashboard to Next.js 14, reducing load times by 60%. Implemented a custom design system used across 4 different products.',
      tags: ['React', 'TypeScript', 'GraphQL', 'D3.js'],
      current: true
    },
    {
      period: '2020 — 2022',
      title: 'Full Stack Developer',
      company: 'TechFlow Solutions',
      description: 'Developed B2B SaaS applications for logistics optimization. Owned the full lifecycle of the "Route Planner" module, from database schema design to UI implementation.',
      tags: ['Node.js', 'PostgreSQL', 'Vue.js', 'AWS'],
      current: false
    },
    {
      period: '2018 — 2020',
      title: 'Junior Software Engineer',
      company: 'GlobalNet Systems',
      description: 'Started as an intern and promoted to Junior. Focused on backend API maintenance and integration with third-party payment gateways.',
      tags: ['Python', 'Django', 'Docker'],
      current: false
    }
  ]

  const education = [

    {
      school: 'Faculdade Metropolitana Unidas',
      degree: 'Analista de Sistemas - Graduação',
      period: '2014 — 2019',
      icon: 'FMU'
    },


    {
      school: 'Senai - Informatica',
      degree: 'Analista de Sistemas - Técnico',
      period: '2018 — 2020',
      icon: 'FMU'
    },

    {
      school: 'Senai - Informatica',
      degree: 'Analista de Sistemas - Técnico',
      period: '2018 — 2020',
      icon: 'FMU'
    },

    {
      school: 'Senai - Informatica',
      degree: 'Analista de Sistemas - Técnico',
      period: '2018 — 2020',
      icon: 'FMU'
    },

    {
      school: 'Certified User Interface/Experience Designer',
      degree: 'Amazon Web Services',
      period: 'Issued 2021',
      icon: <Palette size={14} className="edu-icon" />
    }





  ]

  const skills = {
    desiner: ['Figma','Design System','pesquisa de usuários'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    backend: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Vercel']
  }

  return (
    <main className="about-page">
      <div className="container">
        {/* ── Back Navigation ── */}
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <div className="about-hero">
          {/* ── Header Section ── */}
          <div className="about-header-stack">
            <div className="story-badge">
              <div className="story-badge-icon">
                <div className="square-decoration" />
              </div>
              <span className="story-badge-text">The Story So Far</span>
            </div>
            
            <h1 className="journey-title">
              Journey & <span className="expertise-text">Expertise.</span>
            </h1>
          </div>

          {/* ── Content Grid ── */}
          <div className="about-grid">
            <div className="about-narrative">
              <p>
                My career has been defined by a pursuit of clarity in complex systems.
                I started in electrical engineering, where precision is paramount, and
                transitioned into digital product engineering, bringing that same rigor
                to software architecture.
              </p>
              <p>
                Today, I build scalable full-stack applications with a heavy focus on
                user experience and performance. I believe that the best code is not
                just functional, but also maintainable and intuitive.
              </p>
            </div>

            <aside className="focus-card">
              <h3 className="focus-card-title">Current Focus</h3>
              <div className="focus-list">
                <div className="focus-item">
                  <Layout size={14} className="focus-icon" />
                  <span>Design Systems</span>
                </div>
                <div className="focus-item">
                  <Zap size={15} className="focus-icon" />
                  <span>Performance Opt.</span>
                </div>
                <div className="focus-item">
                  <Server size={17} className="focus-icon" />
                  <span>Backend Architecture</span>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Professional Experience ── */}
        <section className="experience-section">
          <div className="section-header">
            <Briefcase size={21} className="section-icon" />
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-line" />
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-spacer">
                  <span className={`timeline-period ${exp.current ? 'current' : ''}`}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="timeline-dot-wrapper">
                  <div className={`timeline-dot ${exp.current ? 'current' : ''}`} />
                </div>

                <div className="experience-card">
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <p className="job-description">{exp.description}</p>
                  <div className="job-tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="job-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education & Arsenal ── */}
        <section className="info-grid">
          {/* Education */}
          <div className="info-card">
            <div className="card-title-row">
              <GraduationCap size={20} className="card-icon" />
              <h3>Formação e Estudos</h3>
            </div>
            <div className="edu-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-logo-box">
                    {typeof edu.icon === 'string' ? (
                      <span className="edu-logo-text">{edu.icon}</span>
                    ) : (
                      edu.icon
                    )}
                  </div>
                  <div className="edu-details">
                    <h4 className="edu-school">{edu.school}</h4>
                    <span className="edu-degree">{edu.degree}</span>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arsenal */}
          <div className="info-card">
            <div className="card-title-row">
              <Code2 size={20} className="card-icon" />
              <h3>Technical Arsenal</h3>
            </div>
            <div className="arsenal-content">
              <div className="arsenal-group">
                <span className="arsenal-label">Frontend</span>
                <div className="arsenal-tags">
                  {skills.frontend.map(skill => (
                    <span key={skill} className="arsenal-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="arsenal-group">
                <span className="arsenal-label">Backend & DevOps</span>
                <div className="arsenal-tags">
                  {skills.backend.map(skill => (
                    <span key={skill} className="arsenal-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="about-cta">
          <div className="cta-content">
            <h2 className="cta-heading">Let's build the future together.</h2>
            <p className="cta-subtext">
              Always open to discussing new opportunities, open source<br />
              collaborations, or just geek out about the latest tech.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                Get in touch
                <ArrowRight size={14} />
              </button>
              <button className="btn-secondary">
                <Download size={14} />
                Download CV
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default memo(About)
