import { memo } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

/*
COMPONENT: Articles & ArticleDetail
Responsabilidade: Listagem de artigos e página de detalhe individual.
Arquitetura: Dois componentes exportados — lista e detalhe — com dados centralizados.
Decisões Técnicas:
- CSS classes em App.css.
- React.memo para performance.
- useParams para artigo dinâmico via slug.
*/

const articles = [
  {
    slug: 'optimizing-core-web-vitals',
    date: 'OCT 24, 2024',
    category: 'PERFORMANCE',
    categoryColor: '#10b981',
    title: 'Optimizing Core Web Vitals for High-Traffic E-commerce',
    description: 'A comprehensive look at how we achieved sub-second LCP and improved conversion rates by 15% through strategic asset loading and edge computing.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format',
    author: 'Gustavo Celleguim',
    readTime: '8 min read',
    content: [
      {
        type: 'paragraph',
        text: 'In the fast-paced world of enterprise software, consistency is often the first casualty of speed. As teams scale and product modules multiply, the visual and functional integrity of an application can quickly fragment. This is where a robust design system becomes more than just a UI kit — it becomes a strategic asset.',
      },
      {
        type: 'paragraph',
        text: 'Design systems are often misunderstood as mere collections of buttons and input fields. In reality, they are the codified language of a product\'s UX. They bridge the gap between design intent and engineering execution, ensuring that the brand\'s voice remains clear across every user interaction.',
      },
      {
        type: 'heading',
        text: 'The Architecture of Consistency',
      },
      {
        type: 'paragraph',
        text: 'To build a truly scalable system, we must think in terms of atomic principles. Every component should be composed of a strictly nested set of parts — tokens, atoms, and molecules. When we define a "Primary Button" not as a design decision, but as a composition of predictable tokens, we gain the power to update the entire aesthetic in minutes, not months.',
      },
      {
        type: 'quote',
        text: 'A design system is a living ecosystem of accessible components, guided by clear standards, that can be assembled together to build any number of applications.',
      },
      {
        type: 'heading',
        text: 'Tokenizing the Foundation',
      },
      {
        type: 'paragraph',
        text: 'Design tokens are the visual atoms of the system. They represent granular properties like color, spacing, typography, and shadow. By centralizing these values, we create a single source of truth that feeds both Figma files and production code.',
      },
      {
        type: 'code',
        language: 'css',
        text: ':root {\n  --clr-primary: #6A0DAD;\n  --clr-surface: #F8FAFC;\n  --space-sm: 8px;\n  --space-md: 16px;\n  --space-lg: 32px;\n  --radius-base: 12px;\n  --font-main: \'Inter\', sans-serif;\n}',
      },
      {
        type: 'paragraph',
        text: 'Implementing this at scale requires more than just technical skill; it requires a cultural shift within the organization. These are the three pillars I\'ve identified for successful adoption:',
      },
      {
        type: 'paragraph',
        text: 'Documentation First: a component doesn\'t exist until it is documented. This includes usage guidelines, accessibility notes, and code snippets.',
      },
      {
        type: 'paragraph',
        text: 'Hypermedia & modularity: Each collection in the system is self-contained, descriptive, and reusable across completely independent build targets.',
      },
      {
        type: 'paragraph',
        text: 'Feedback Loops: Designers and developers must have a clear channel to request updates or report friction in the system.',
      },
      {
        type: 'heading',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Building a design system is not a project, nor is it a one-liner; it is a continuous commitment to excellence. As Gustavo Celleguim, I\'ve seen first-hand how a well-implemented system can accelerate development cycles by up to 40% while simultaneously improving user satisfaction through a more cohesive experience.',
      },
    ],
  },
  {
    slug: 'scaling-typography-css-variables',
    date: 'SEP 12, 2024',
    category: 'DESIGN SYSTEM',
    categoryColor: '#6366f1',
    title: 'Scaling Typography with CSS Variable Composition',
    description: 'Moving beyond basic fluid type to a robust, designer-friendly system that maintains vertical rhythm across complex multi-column layouts.',
    heroImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80&auto=format',
    author: 'Gustavo Celleguim',
    readTime: '6 min read',
    content: [
      { type: 'paragraph', text: 'Typography is the backbone of any well-designed interface. When scaling across multiple breakpoints and component contexts, a systematic approach to type becomes essential.' },
      { type: 'heading', text: 'Fluid Type Foundations' },
      { type: 'paragraph', text: 'By leveraging CSS custom properties and clamp functions, we can create a type scale that adapts smoothly across viewport sizes without the jarring jumps of traditional media queries.' },
      { type: 'code', language: 'css', text: ':root {\n  --fs-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);\n  --fs-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);\n  --fs-lg: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);\n  --fs-xl: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);\n  --fs-2xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);\n}' },
      { type: 'paragraph', text: 'This approach ensures that every text element in the system respects the vertical rhythm while scaling proportionally across all screen sizes.' },
      { type: 'heading', text: 'Conclusion' },
      { type: 'paragraph', text: 'A well-structured typography system eliminates inconsistency and gives both designers and developers a shared language for spatial hierarchy.' },
    ],
  },
  {
    slug: 'server-driven-ui-modern-web',
    date: 'AUG 05, 2024',
    category: 'FULL STACK',
    categoryColor: '#8b5cf6',
    title: 'The Case for Server-Driven UI in Modern Web Apps',
    description: 'Exploring the balance between client-side interactivity and server-side control to ship features faster without app store-style deployment cycles.',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format',
    author: 'Gustavo Celleguim',
    readTime: '7 min read',
    content: [
      { type: 'paragraph', text: 'The traditional single-page application model gives developers full control over the UI, but at a cost: every change requires a new deployment. Server-driven UI flips this paradigm by letting the backend dictate what the frontend renders.' },
      { type: 'heading', text: 'Why Server-Driven?' },
      { type: 'paragraph', text: 'In high-velocity product teams, the ability to ship UI changes without a client deployment is transformative. A/B tests, feature flags, and personalized layouts can all be orchestrated from the server.' },
      { type: 'quote', text: 'The best UI architecture is the one that lets your team ship the fastest while maintaining quality. Sometimes, that means letting the server lead.' },
      { type: 'paragraph', text: 'By defining a component schema that both the backend and frontend agree on, we create a contract that enables rapid iteration without breaking changes.' },
      { type: 'heading', text: 'Conclusion' },
      { type: 'paragraph', text: 'Server-driven UI is not a replacement for client-side frameworks — it\'s a complement. The key is knowing when to use each approach.' },
    ],
  },
  {
    slug: 'designing-data-heavy-dashboards',
    date: 'JULY 18, 2024',
    category: 'UX DESIGN',
    categoryColor: '#a855f7',
    title: 'Designing Data-Heavy Dashboards for Clarity',
    description: 'Practical techniques for reducing cognitive load in complex analytics platforms through progressive disclosure and intentional white space.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format',
    author: 'Gustavo Celleguim',
    readTime: '5 min read',
    content: [
      { type: 'paragraph', text: 'Dashboard design is a balancing act between information density and usability. Users need access to critical metrics at a glance, but overwhelming them leads to decision fatigue and missed insights.' },
      { type: 'heading', text: 'Progressive Disclosure' },
      { type: 'paragraph', text: 'The most effective dashboards reveal complexity gradually. Start with the most critical KPIs, then allow users to drill down into supporting data through expandable panels and contextual tooltips.' },
      { type: 'quote', text: 'Simplicity is not about showing less — it\'s about organizing information so that complexity is revealed only when the user is ready for it.' },
      { type: 'paragraph', text: 'White space is not wasted space. In data-dense interfaces, strategic use of padding and margins creates visual breathing room that improves scanning speed by up to 20%.' },
      { type: 'heading', text: 'Conclusion' },
      { type: 'paragraph', text: 'The best dashboards feel simple despite their underlying complexity. Achieving this requires deliberate choices about hierarchy, contrast, and progressive revelation.' },
    ],
  },
]

// ── Articles List Page ──
const Articles = () => {
  return (
    <main className="articles-page">
      <div className="container">

        {/* ── Back Navigation ── */}
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* ── Hero ── */}
        <section className="articles-hero">
          <h1 className="articles-title">Technical Writing</h1>
          <p className="articles-subtitle">
            Sharing insights and deep dives on UI/UX engineering, web performance,<br />
            and modern full-stack development.
          </p>
        </section>

        {/* ── Articles List ── */}
        <div className="articles-list">
          {articles.map(article => (
            <article key={article.slug} className="article-entry">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span
                  className="article-category"
                  style={{ color: article.categoryColor }}
                >
                  {article.category}
                </span>
              </div>
              <h2 className="article-entry-title">{article.title}</h2>
              <p className="article-entry-desc">{article.description}</p>
              <Link to={`/articles/${article.slug}`} className="article-read-link">
                Read Article <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        {/* ── CTA ── */}
        <section className="articles-cta">
          <p className="articles-cta-label">Have a specific project in mind?</p>
          <Link to="#" className="articles-cta-link">
            Let's discuss the details →
          </Link>
        </section>
      </div>
    </main>
  )
}

// ── Article Detail Page ──
export const ArticleDetail = memo(() => {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <main className="articles-page">
        <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
          <h1 className="articles-title" style={{ fontSize: 32 }}>Article not found</h1>
          <Link to="/articles" className="back-link" style={{ justifyContent: 'center', marginTop: 24 }}>
            <ArrowLeft size={16} /> Back to Articles
          </Link>
        </div>
      </main>
    )
  }

  // Get two related articles for "Read Next"
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 2)

  return (
    <main className="articles-page">
      <div className="container">

        {/* ── Back Navigation ── */}
        <Link to="/articles" className="back-link">
          <ArrowLeft size={16} />
          <span
            className="article-category"
            style={{ color: article.categoryColor, marginLeft: 4 }}
          >
            {article.category}
          </span>
        </Link>

        {/* ── Article Header ── */}
        <header className="article-detail-header">
          <h1 className="article-detail-title">{article.title}</h1>
          <div className="article-detail-author">
            <div className="article-author-avatar">GC</div>
            <div className="article-author-info">
              <span className="article-author-name">{article.author}</span>
              <span className="article-author-meta">{article.date} · {article.readTime}</span>
            </div>
          </div>
        </header>

        {/* ── Hero Image ── */}
        <div className="article-detail-hero">
          <img
            src={article.heroImage}
            alt={article.title}
            className="article-detail-hero-img"
          />
        </div>

        {/* ── Article Body ── */}
        <div className="article-detail-body">
          {article.content.map((block, i) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={i} className="article-body-p">{block.text}</p>
              case 'heading':
                return <h2 key={i} className="article-body-h2">{block.text}</h2>
              case 'quote':
                return (
                  <blockquote key={i} className="article-body-quote">
                    {block.text}
                  </blockquote>
                )
              case 'code':
                return (
                  <div key={i} className="article-body-code-wrap">
                    <pre className="article-body-code">
                      <code>{block.text}</code>
                    </pre>
                  </div>
                )
              default:
                return null
            }
          })}
        </div>

        {/* ── Read Next ── */}
        <section className="article-read-next">
          <h3 className="article-read-next-title">Read Next</h3>
          <div className="article-read-next-grid">
            {relatedArticles.map(related => (
              <Link
                key={related.slug}
                to={`/articles/${related.slug}`}
                className="article-next-card"
              >
                <div className="article-next-card-img-wrap">
                  <img
                    src={related.heroImage}
                    alt={related.title}
                    className="article-next-card-img"
                  />
                </div>
                <div className="article-next-card-body">
                  <span className="article-date" style={{ fontSize: 10 }}>
                    {related.date}
                  </span>
                  <h4 className="article-next-card-title">{related.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
})

ArticleDetail.displayName = 'ArticleDetail'

export default memo(Articles)
