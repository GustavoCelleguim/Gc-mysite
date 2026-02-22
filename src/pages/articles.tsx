import { memo } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Articles = () => {
  const articles = [
    { title: 'The Future of Web Development', date: 'Feb 12, 2024', readTime: '5 min' },
    { title: 'Scaling Frontend Architecture', date: 'Jan 25, 2024', readTime: '8 min' },
    { title: 'Design Systems in 2024', date: 'Jan 10, 2024', readTime: '4 min' },
  ]

  return (
    <main className="page-container" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', textDecoration: 'none', marginBottom: 40, fontSize: 14 }}>
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>Articles</h1>
        <p style={{ fontSize: 18, color: '#64748B' }}>Thoughts on engineering, design, and product.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {articles.map(a => (
          <div key={a.title} style={{ background: 'white', padding: 24, borderRadius: 16, outline: '1px #E2E8F0 solid', outlineOffset: '-1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 18, color: '#0F172A', marginBottom: 4 }}>{a.title}</h2>
              <span style={{ fontSize: 14, color: '#94A3B8' }}>{a.date}</span>
            </div>
            <span style={{ fontSize: 12, color: '#94A3B8' }}>{a.readTime} read</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default memo(Articles)
