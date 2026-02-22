export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  NAV: {
    LOGO: string
    HOME: string
    ABOUT: string
    PROJECTS: string
    ARTICLES: string
    LINKEDIN: string
    CTA: string
  }
  HERO: {
    BADGE: string
    TITLE_1: string
    TITLE_2: string
    TITLE_3: string
    SUBTITLE: string
    TECH_STACK: string[]
  }
  BENTO: {
    PROJECT: {
      BADGE_FEATURED: string
      BADGE_TECH: string
      TITLE: string
      DESCRIPTION: string
      LINK: string
    }
    ABOUT: {
      TITLE: string
      TEXT: string
      BADGES: string[]
      LINK: string
    }
    TIME: {
      LABEL: string
      STATUS: string
      LOCATION: string
      GMT: string
      NEXT_SLOT_LABEL: string
      NEXT_SLOT_VALUE: string
    }
    WORKSPACE: {
      LABEL: string
      ITEMS: string[]
    }
    WRITING: {
      LABEL: string
      ARTICLES: { title: string; meta: string }[]
    }
  }
  TRUSTED: {
    LABEL: string
    COMPANIES: string[]
  }
  OS: {
    LABEL: string
    SUBTITLE: string
    LINK: string
    LESS: string
    MORE: string
  }
  CTA: {
    TITLE: string
    SUBTITLE: string
    PRIMARY: string
    SECONDARY: string
  }
  FOOTER: {
    COPY: string
    LINKS: string[]
  }
}

const en: Translations = {
  NAV: {
    LOGO: 'GC',
    HOME: 'Home',
    ABOUT: 'About',
    PROJECTS: 'Projects',
    ARTICLES: 'Articles',
    LINKEDIN: 'LinkedIn',
    CTA: 'Get in touch',
  },
  HERO: {
    BADGE: 'Available for new projects',
    TITLE_1: 'Gustavo Celleguim is',
    TITLE_2: 'a Product Engineer',
    TITLE_3: 'specialized in Energy.',
    SUBTITLE: 'Dev Full Stack & UI/UX. Based in Brazil.',
    TECH_STACK: ['React', 'Next.js 14', 'TypeScript', 'Node.js'],
  },
  BENTO: {
    PROJECT: {
      BADGE_FEATURED: 'Featured',
      BADGE_TECH: 'Energy Tech',
      TITLE: 'Grid Master Analytics',
      DESCRIPTION: 'Real-time distribution network monitoring dashboard. Reduced critical incident response time by 40% through intuitive data visualization.',
      LINK: 'View case study',
    },
    ABOUT: {
      TITLE: 'Product Engineer',
      TEXT: 'Focus on DX and resilient interfaces. Transforming complex B2B requirements into delightful software.',
      BADGES: ['Frontend Arch', 'Design Systems'],
      LINK: 'About',
    },
    TIME: {
      LABEL: 'Local Time',
      STATUS: 'Online',
      LOCATION: 'São Paulo, Brasil',
      GMT: 'GMT-3',
      NEXT_SLOT_LABEL: 'Next slot',
      NEXT_SLOT_VALUE: 'Oct 2024',
    },
    WORKSPACE: {
      LABEL: 'Workspace',
      ITEMS: ['MacBook Pro M3 Max', 'Dell UltraSharp 32"', 'Keychron Q1 Pro'],
    },
    WRITING: {
      LABEL: 'Writing',
      ARTICLES: [
        { title: 'Optimizing React 18 Rendering', meta: 'Aug 24 • 5 min read' },
        { title: 'Design Systems Architecture', meta: 'Jul 12 • 8 min read' },
      ],
    },
  },
  TRUSTED: {
    LABEL: 'Trusted by engineering teams at',
    COMPANIES: ['ENERGIZE', 'HEXATECH', 'GLOBALNET', 'STRUCTURE'],
  },
  OS: {
    LABEL: 'Open Source',
    SUBTITLE: 'Contributions to open source and personal projects.',
    LINK: '@gcelleguim',
    LESS: 'Less',
    MORE: 'More',
  },
  CTA: {
    TITLE: 'Ready to build something amazing?',
    SUBTITLE: "I'm currently open to discussing high-complexity projects. If you value quality and long-term partnership, let's connect.",
    PRIMARY: 'Start conversation',
    SECONDARY: 'Copy email',
  },
  FOOTER: {
    COPY: '© 2026 Gustavo Celleguim.',
    LINKS: ['LinkedIn', 'Github', 'Twitter'],
  },
}

const pt: Translations = {
  NAV: {
    LOGO: 'GC',
    HOME: 'Início',
    ABOUT: 'Sobre',
    PROJECTS: 'Projetos',
    ARTICLES: 'Artigos',
    LINKEDIN: 'LinkedIn',
    CTA: 'Entre em contato',
  },
  HERO: {
    BADGE: 'Disponível para novos projetos',
    TITLE_1: 'Gustavo Celleguim é',
    TITLE_2: 'um Product Engineer',
    TITLE_3: 'especializado em Energia.',
    SUBTITLE: 'Dev Full Stack & UI/UX. Baseado no Brasil.',
    TECH_STACK: ['React', 'Next.js 14', 'TypeScript', 'Node.js'],
  },
  BENTO: {
    PROJECT: {
      BADGE_FEATURED: 'Destaque',
      BADGE_TECH: 'Energy Tech',
      TITLE: 'Grid Master Analytics',
      DESCRIPTION: 'Dashboard de monitoramento de redes de distribuição em tempo real. Reduziu o tempo de resposta a incidentes críticos em 40% através de visualização intuitiva de dados.',
      LINK: 'Ver estudo de caso',
    },
    ABOUT: {
      TITLE: 'Product Engineer',
      TEXT: 'Foco em DX e interfaces resilientes. Transformando requisitos B2B complexos em software encantador.',
      BADGES: ['Arquitetura Frontend', 'Design Systems'],
      LINK: 'Sobre',
    },
    TIME: {
      LABEL: 'Hora Local',
      STATUS: 'Online',
      LOCATION: 'São Paulo, Brasil',
      GMT: 'GMT-3',
      NEXT_SLOT_LABEL: 'Próximo horário',
      NEXT_SLOT_VALUE: 'Out 2024',
    },
    WORKSPACE: {
      LABEL: 'Workspace',
      ITEMS: ['MacBook Pro M3 Max', 'Dell UltraSharp 32"', 'Keychron Q1 Pro'],
    },
    WRITING: {
      LABEL: 'Artigos',
      ARTICLES: [
        { title: 'Otimizando Renderização React 18', meta: 'Ago 24 • 5 min leitura' },
        { title: 'Arquitetura de Design Systems', meta: 'Jul 12 • 8 min leitura' },
      ],
    },
  },
  TRUSTED: {
    LABEL: 'Confiado por times de engenharia na',
    COMPANIES: ['ENERGIZE', 'HEXATECH', 'GLOBALNET', 'STRUCTURE'],
  },
  OS: {
    LABEL: 'Open Source',
    SUBTITLE: 'Contribuições para open source e projetos pessoais.',
    LINK: '@gcelleguim',
    LESS: 'Menos',
    MORE: 'Mais',
  },
  CTA: {
    TITLE: 'Pronto para construir algo incrível?',
    SUBTITLE: 'Estou aberto a discutir projetos de alta complexidade. Se você valoriza qualidade e parceria de longo prazo, vamos conversar.',
    PRIMARY: 'Iniciar conversa',
    SECONDARY: 'Copiar email',
  },
  FOOTER: {
    COPY: '© 2026 Gustavo Celleguim.',
    LINKS: ['LinkedIn', 'Github', 'Twitter'],
  },
}

const es: Translations = {
  NAV: {
    LOGO: 'GC',
    HOME: 'Inicio',
    ABOUT: 'Sobre mí',
    PROJECTS: 'Proyectos',
    ARTICLES: 'Artículos',
    LINKEDIN: 'LinkedIn',
    CTA: 'Contáctame',
  },
  HERO: {
    BADGE: 'Disponible para nuevos proyectos',
    TITLE_1: 'Gustavo Celleguim es',
    TITLE_2: 'un Product Engineer',
    TITLE_3: 'especializado en Energía.',
    SUBTITLE: 'Dev Full Stack & UI/UX. Basado en Brasil.',
    TECH_STACK: ['React', 'Next.js 14', 'TypeScript', 'Node.js'],
  },
  BENTO: {
    PROJECT: {
      BADGE_FEATURED: 'Destacado',
      BADGE_TECH: 'Energy Tech',
      TITLE: 'Grid Master Analytics',
      DESCRIPTION: 'Dashboard de monitoreo de redes de distribución en tiempo real. Redujo el tiempo de respuesta a incidentes críticos en un 40% a través de visualización intuitiva de datos.',
      LINK: 'Ver caso de estudio',
    },
    ABOUT: {
      TITLE: 'Product Engineer',
      TEXT: 'Enfoque en DX e interfaces resilientes. Transformando requisitos B2B complejos en software encantador.',
      BADGES: ['Arquitectura Frontend', 'Design Systems'],
      LINK: 'Sobre mí',
    },
    TIME: {
      LABEL: 'Hora Local',
      STATUS: 'En línea',
      LOCATION: 'São Paulo, Brasil',
      GMT: 'GMT-3',
      NEXT_SLOT_LABEL: 'Próximo horario',
      NEXT_SLOT_VALUE: 'Oct 2024',
    },
    WORKSPACE: {
      LABEL: 'Espacio de trabajo',
      ITEMS: ['MacBook Pro M3 Max', 'Dell UltraSharp 32"', 'Keychron Q1 Pro'],
    },
    WRITING: {
      LABEL: 'Escritos',
      ARTICLES: [
        { title: 'Optimizando el Renderizado de React 18', meta: 'Ago 24 • 5 min lectura' },
        { title: 'Arquitectura de Design Systems', meta: 'Jul 12 • 8 min lectura' },
      ],
    },
  },
  TRUSTED: {
    LABEL: 'Confiado por equipos de ingeniería en',
    COMPANIES: ['ENERGIZE', 'HEXATECH', 'GLOBALNET', 'STRUCTURE'],
  },
  OS: {
    LABEL: 'Open Source',
    SUBTITLE: 'Contribuciones a open source y proyectos personales.',
    LINK: '@gcelleguim',
    LESS: 'Menos',
    MORE: 'Más',
  },
  CTA: {
    TITLE: '¿Listo para construir algo increíble?',
    SUBTITLE: 'Estoy abierto a discutir proyectos de alta complejidad. Si valoras la calidad y la asociación a largo plazo, conectemos.',
    PRIMARY: 'Iniciar conversación',
    SECONDARY: 'Copiar email',
  },
  FOOTER: {
    COPY: '© 2026 Gustavo Celleguim.',
    LINKS: ['LinkedIn', 'Github', 'Twitter'],
  },
}

export const translations: Record<Language, Translations> = { en, pt, es }

// Backward-compatible default export
export const I18N = en
