import { useEffect, useRef, memo } from 'react'
import gsap from 'gsap'

/*
COMPONENT: InteractiveBackground
Responsabilidade: Efeito de background interativo com gradiente radial que segue o cursor.
Arquitetura: Componente isolado com GSAP para animação fluida (60fps).
Decisões Técnicas:
- GSAP gsap.quickTo para interpolação suave do mouse.
- Scroll listener para modular tamanho/intensidade do blob.
- pointer-events: none para não interferir na interação.
- will-change + GPU compositing para performance.
*/

const InteractiveBackground = memo(() => {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    // GSAP quickTo para interpolação ultra-suave (lerp interno)
    const xTo = gsap.quickTo(blob, 'x', { duration: 0.8, ease: 'power3.out' })
    const yTo = gsap.quickTo(blob, 'y', { duration: 0.8, ease: 'power3.out' })

    // Estado reativo ao scroll
    let scrollProgress = 0

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY + window.scrollY)
    }

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0

      // Escala: 1 → 1.8 conforme scroll
      const scale = 1 + scrollProgress * 0.8
      // Opacidade: 0.25 → 0.45 conforme scroll
      const opacity = 0.25 + scrollProgress * 0.20

      gsap.to(blob, {
        scale,
        opacity,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    // Inicializa posição no centro
    gsap.set(blob, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      xPercent: -50,
      yPercent: -50,
      opacity: 0.25,
    })

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Fade-in suave ao montar
    gsap.fromTo(blob,
      { opacity: 0, scale: 0.5 },
      { opacity: 0.25, scale: 1, duration: 1.2, ease: 'power2.out' }
    )

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="interactive-bg-wrapper" aria-hidden="true">
      <div ref={blobRef} className="interactive-bg-blob" />
    </div>
  )
})

InteractiveBackground.displayName = 'InteractiveBackground'

export default InteractiveBackground
