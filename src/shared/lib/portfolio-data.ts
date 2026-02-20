export const profileData = {
  name: 'Gastón Ferrari',
  title: 'Programador Full Stack y docente nivel medio, técnico y superior con orientación en informática',
  avatar: '/img/perfil.jpg',
  email: 'gastonferrari98@gmail.com',
  phone: '+54 3465 431858',
  location: 'Firmat, Santa Fe, Argentina',
  linkedin: 'https://www.linkedin.com/in/gaston-ferrari-b01119192/',
  github: 'https://github.com/gfdev10',
  cvOnline: 'https://docs.google.com/document/d/1lO7rLcj88Kb1wMecavcIu2f4TTSgARkNzi9YLVhzx7E/edit?usp=sharing',
  cvUrl: '/img/CV GASTÓN FERRARI.pdf',
}

export const aboutData = {
  description: [
    "Técnico Superior en Desarrollo de Software con una trayectoria integral que vincula la innovación tecnológica y la educación técnica de alto impacto. Mi enfoque profesional se especializa en el desarrollo de soluciones Full Stack escalables y seguras, sustentadas en una sólida competencia técnica en arquitecturas modernas como React, Next.js y Node.js, complementada con una especialización estratégica en ciberseguridad y delitos informáticos.",
    "Como docente en los niveles medio, técnico y superior, poseo una capacidad probada para transformar conceptos técnicos complejos en estrategias de aprendizaje efectivas, liderando la formación de nuevos profesionales en programación, redes y sistemas. Mi misión es converger la excelencia técnica con la formación académica para liderar proyectos tecnológicos que impulsen la transformación digital con propósito.",
  ],
  services: [
    {
      icon: 'Code',
      title: 'Desarrollo de Software a medida',
      description: 'Creación de soluciones web y de escritorio robustas y escalables, utilizando un stack moderno (React, Next.js, Node.js) y arquitecturas de bases de datos optimizadas.',
    },
    {
      icon: 'Smartphone',
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Diseño y construcción de experiencias móviles intuitivas y de alto rendimiento, enfocadas en la usabilidad y la integración fluida con servicios en la nube.',
    },
    {
      icon: 'Zap',
      title: 'Docencia Técnica Especializada',
      description: 'Formación académica en niveles medio, técnico y superior, liderando el aprendizaje en áreas clave como programación, redes y seguridad informática.',
    },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'E.E.T.P. N.º 281 "General Manuel Savio"  ',
      period: '2010 — 2016',
      description: 'Técnico en Informática Profesional y Personal.',
    },
    {
      title: 'Vucetich Digital',
      period: '2017 — 2019',
      description:
        'Especialista en Delitos Informáticos.',
    },
    {
      title: 'ICES',
      period: '2017 — 2020',
      description: 'Técnico Superior en Desarrollo de Software.',
    },
    {
      title: 'FASTA',
      period: '2022 — 2024',
      description: 'Formación Pedagógica para profesionales técnicos.',
    },
  ],
  experience: [
    {
      title: 'Programador Full Stack - Don Santiago',
      period: '2024 — 2024',
      description:
        'Desarrollo pagina web de gestión comercial para presupuestos, con administración de clientes, productos y proveedores, orientado a la digitalización y optimización de procesos.',
    },
    {
      title: 'Programador Full Stack - Arbitra',
      period: '2025 — 2025',
      description:
        'Plataforma web de arbitraje financiero con evaluación de oportunidades y decisiones basadas en datos.',
    },
    {
      title: 'Programador Full Stack - Luxury Salon',
      period: '2025 — 2026',
      description:
        'Desarrollo de sitio web para salón de estética premium, con diseño UI/UX, frontend responsive optimizado en estética y rendimiento, despliegue en la nube y enfoque en presencia digital, branding y captación de clientes.',
    },
    {
      title: 'Docente en E.E.T.P. N.º 281',
      period: '2021 — Presente',
      description:
        'Matarias dictadas: Hardware III , Programacion 1 , Softawre II  , Software III y Practicas Profesionales.',
    },
    {
      title: 'Docente en E.S.O 222 ',
      period: '2025 — Presente',
      description:
        'Matarias dictadas: Sistemas de Información, Fundamentos de Programación, Redes Digitales, Informática Aplicada: Teletrabajo, Medios Digitales Colaborativos y Orientación en Contextos Laborales.',
    },
    {
      title: 'E.E.S.O. N.º 421',
      period: '2025 — Presente',
      description:
        'Matarias dictadas en educación tecnológica 1 y educación tecnológica 2.',
    },
    {
      title: 'CVG - UTN Facultad Regional Rosario - Firmat Carrera Programador universitario',
      period: '2024 — Presente',
      description:
        'Materias dictadas en Programación 1 , Programación 2 , Programación 3 y Programación 4.',
    },
  ],
  skills: [
    { name: 'HTML / CSS', level: 95 },
    { name: 'SQL/MySql', level: 85 },
    { name: 'JavaScript / React', level: 85 },
    { name: 'TypeScript / Next.js', level: 85 },
    { name: 'Node.js / Express', level: 85 },
    { name: 'git', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'C# / .NET', level: 75 },
    { name: 'Seguridad Informática', level: 70 },
  ],
}

export const portfolioData = {
  categories: ['all', 'web app', 'applications', 'design'],
  projects: [
    {
      title: 'Arbitra',
      category: 'web app',
      image: '/img/arbitra.png',
      description: 'Financial tool for arbitrage calculation.',
      tech: ['React', 'Node.js', 'API Integration'],
      liveUrl: 'https://arbitra-sigma.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'Presupuestos Don Santiago',
      category: 'web app',
      image: '/img/donsantiago.jpg',
      description: 'Budgeting management system for local business.',
      tech: ['Web', 'Database', 'Management'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Luxury Salon',
      category: 'design',
      image: '/img/Luxurysalon.png',
      description: 'Plataforma web para gestión de servicios de belleza.',
      tech: ['React', 'Next.js', 'Tailwind'],
      liveUrl: 'https://luxury-salon.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'PeluTurno',
      category: 'web app',
      image: '/img/PeluTurno.png',
      description: 'Sistema de gestión de turnos para peluquerías.',
      tech: ['React', 'Next.js', 'Vercel'],
      liveUrl: 'https://peluturno.vercel.app/home',
      githubUrl: '#',
    },
    {
      title: 'IA Optimizer Token',
      category: 'web app',
      image: '/img/IAOptimizerToken.png',
      description: 'Optimization and token management platform.',
      tech: ['React', 'Next.js', 'Web3'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ],
}


export const contactData = {
  email: 'gastonferrari98@gmail.com',
  phone: '+54 9 3465 431858',
  location: 'Firmat, Santa Fe, Argentina',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13346.035868832966!2d-61.49390255!3d-33.2562489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c76ca0f7690f7b%3A0xf603957014605963!2sFirmat%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar',
  contactFormKey: process.env.NEXT_PUBLIC_CONTACT_FORM_KEY || '',
}

