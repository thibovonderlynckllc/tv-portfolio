export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  displayCategory?: string[];
  technology: string;
  imageUrl: string;
  fullPageImageUrl?: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'FocusTrading',
    description: 'FocusTrading is an advanced trading platform that uses artificial intelligence to generate trading signals and automate portfolio management. The platform provides real-time market analysis, personalized trading signals, and automated trading opportunities. The frontend is built with modern web technologies to deliver a seamless user experience on both desktop and mobile devices.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS / Vite',
    imageUrl: '/images/projects/webdevelopment/focus.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/focusfullpage.webp',
    tags: ['Web App', 'AI', 'Trading', 'Responsive', 'UI/UX'],
    link: 'https://thunderous-gumdrop-ba1c41.netlify.app/',
  },
  {
    id: 2,
    name: 'Mavo Productions',
    description: 'Mavo Productions is a website for a creative production company specializing in video, photography, and design. The site showcases their portfolio, services, and team in a visually appealing way. I was responsible for the design and development of the fully responsive website, working closely with the team to transform their creative vision into a digital experience that reflects their work.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    imageUrl: '/images/projects/webdevelopment/mavo.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/mavofullpage.webp',
    tags: ['Portfolio', 'Creative', 'Responsive', 'Animation'],
    link: 'https://mavoproductions.com',
  },
  {
    id: 3,
    name: 'Omega Trading',
    description: 'Omega Trading is a platform for cryptocurrency traders with advanced charting features, market analysis, and trading tools. The project revolved around the launch of a new cryptocurrency, requiring a complex frontend implementation with real-time data visualization, user authentication, and a reactive design. The platform enables users to track different markets, set up automated trading strategies, and manage their portfolio from any device.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    imageUrl: '/images/projects/webdevelopment/omega.webp',
    fullPageImageUrl: '/images/projects/webdevelopment/omegafullpage.webp',
    tags: ['Web App', 'Crypto', 'Dashboard', 'Charts'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 4,
    name: 'Omega Coin Poster',
    description: 'This poster was designed to support the launch of a new cryptocurrency. The design combines futuristic elements with a professional appearance to build trust in the new digital token. The composition uses a dark color palette with vibrant accents to draw attention and emphasize important information about the coin. This project required a careful balance between brand style, information design, and visual appeal.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    imageUrl: '/images/projects/graphicdesign/omegacoinposter.webp',
    fullPageImageUrl: '/images/projects/graphicdesign/omegacoinposterfullpage.webp',
    tags: ['Print', 'Crypto', 'Branding', 'Marketing'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 5,
    name: 'Black Friday Ad',
    description: 'This Black Friday advertisement was designed to grab attention during a busy advertising period. By using striking color contrast, clear typography, and a structured layout, the design effectively communicates offers and promotions. The advertisement was developed for both digital and print media, with adaptations for different platform requirements and target audiences.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    imageUrl: '/images/projects/graphicdesign/blackfriday.webp',
    fullPageImageUrl: '/images/projects/graphicdesign/blackfriday.webp',
    tags: ['Advertising', 'Print', 'Digital', 'E-commerce'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 6,
    name: 'Brandview',
    description: 'Brandview is a modern web platform built with Next.js and TypeScript, featuring a powerful content management system (PayloadCMS) for easy content and branding management. The design was already provided to me, and I implemented the application combining a responsive frontend with Tailwind CSS and a robust backend for optimal performance and user experience.',
    category: 'Full-Stack',
    technology: 'Next.js / TypeScript / PayloadCMS / Tailwind',
    imageUrl: '/images/projects/fullstack/brandviewposter.webp',
    fullPageImageUrl: '/images/projects/fullstack/brandview.webp',
    tags: ['Web Platform', 'CMS', 'TypeScript', 'Responsive'],
    link: 'https://www.brandview.be/',
  },
  {
    id: 7,
    name: 'Dreamlovers',
    description: 'Dreamlovers is a wedding videography services website that showcases beautiful wedding films and video editing services. The platform allows couples to view wedding video portfolios, book services, and learn about the creative process of capturing and editing their special moments. Built with modern web technologies to provide an elegant and user-friendly experience.',
    category: 'Full-Stack',
    technology: 'Next.js / TypeScript / PayloadCMS / Tailwind',
    imageUrl: '/images/projects/fullstack/dreamloversposter.webp',
    fullPageImageUrl: '/images/projects/fullstack/dreamlovers.webp',
    tags: ['Web Application', 'Full-Stack', 'TypeScript', 'Responsive'],
    link: 'https://www.dreamlovers.be/',
  },
];
