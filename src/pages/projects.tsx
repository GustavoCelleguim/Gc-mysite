import { memo } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    { title: 'Personal Brand', category: 'Design System', date: '2024' },
    { title: 'Project X', category: 'Frontend Arch', date: '2023' },
    { title: 'Project Y', category: 'Mobile App', date: '2023' },
  ]

  return (
    <main className="page-container" style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', textDecoration: 'none', marginBottom: 40, fontSize: 14 }}>
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Projects</h1>
        <p style={{ fontSize: 18, color: '#64748B' }}>A collection of things I've built.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {projects.map(p => (
          <div key={p.title} style={{ background: 'white', padding: 32, borderRadius: 16, outline: '1px #E2E8F0 solid', outlineOffset: '-1px' }}>
            <span style={{ fontSize: 12, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1 }}>{p.category}</span>
            <h2 style={{ fontSize: 20, color: '#0F172A', margin: '12px 0' }}>{p.title}</h2>
            <span style={{ color: '#94A3B8' }}>{p.date}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default memo(Projects)
