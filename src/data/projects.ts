import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/**/*.{webp,png,jpg}', {
  eager: true,
});

const image = (path: string): ImageMetadata => {
  const found = images[`../assets/projects/${path}`];
  if (!found) throw new Error(`Missing project image: ${path}`);
  return found.default;
};

export type Category = 'Frontend Development' | 'Full-Stack' | 'Graphic Design';

export interface Project {
  id: number;
  name: string;
  description: string;
  category: Category;
  technology: string;
  role?: string;
  image: ImageMetadata;
  fullPageImage: ImageMetadata;
  tags: string[];
  link?: string;
  badge?: string;
}

export const categories: Category[] = ['Frontend Development', 'Full-Stack', 'Graphic Design'];

// Order is the order of the frames on the sheet.
export const projects: Project[] = [
  {
    id: 10,
    name: 'Spiromni',
    description:
      'Spiromni is my own startup, which I co-founded with Maxim and Pieter-Jan. We turn workplaces into interactive experiences: professional 360° virtual tours with drone footage, clickable hotspots and short employee interviews, built for manufacturing, logistics and other complex workplaces. Companies use them for employer branding, faster onboarding and showing clients and investors their site without a physical visit. Within the team I lead development: I stitch the panoramas, wire up the hotspots and interviews, and ship both the finished tours and the company website. I designed and built the site from scratch as a fast, trilingual (EN/NL/FR) experience with scroll-driven animations, case studies, a contact form, newsletter sign-up and booking calendar, all running on Cloudflare. Our first client project, a full virtual tour for Oleon in Ertvelde, is featured as a case study on the site.',
    category: 'Full-Stack',
    technology: 'Astro / React / TypeScript / Tailwind / GSAP / Cloudflare Workers',
    role: 'Co-founder, lead developer',
    image: image('fullstack/spiromniposter.webp'),
    fullPageImage: image('fullstack/spiromnifullpage.webp'),
    tags: ['Startup', 'Founder', '360° Virtual Tours', 'Multilingual', 'Responsive'],
    link: 'https://spiromni.com/',
    badge: 'My startup',
  },
  {
    id: 9,
    name: 'Ask Maeve',
    description:
      "Ask Maeve is an AI-powered study platform founded by Richard Cosemans and Viktor Vanmarcke that helps students learn faster and prepare smarter for exams, offering instant summaries, personalized feedback, practice questions, and planning tools all in one place. During my 3-month school internship, I designed and coded their complete website from the ground up, working closely with the founders who provided guidance and direction throughout the process. The result is a clean, modern, and fully responsive website that reflects the brand identity and clearly communicates the platform's value proposition.",
    category: 'Frontend Development',
    technology: 'Astro / React / TypeScript / Tailwind / Supabase',
    role: 'Design and development',
    image: image('webdevelopment/maeve.webp'),
    fullPageImage: image('webdevelopment/maevefullpage.webp'),
    tags: ['Startup', 'Responsive', 'UI/UX', 'Branding'],
    link: 'https://www.ask-maeve.com/',
    badge: 'Internship',
  },
  {
    id: 6,
    name: 'Brandview',
    description:
      'Brandview is a modern web platform built with Next.js and TypeScript, featuring a powerful content management system (PayloadCMS) for easy content and branding management. The design was already provided to me, and I implemented the application combining a responsive frontend with Tailwind CSS and a robust backend for optimal performance and user experience.',
    category: 'Full-Stack',
    technology: 'Next.js / TypeScript / PayloadCMS / Tailwind',
    role: 'Development, from a provided design',
    image: image('fullstack/brandviewposter.webp'),
    fullPageImage: image('fullstack/brandview.webp'),
    tags: ['Web Platform', 'CMS', 'TypeScript', 'Responsive'],
    link: 'https://www.brandview.be/',
  },
  {
    id: 8,
    name: 'NQ Blade',
    description:
      'NQBlade is a fully automated trading bot I built for NQ Futures (E-mini Nasdaq-100), designed for precise, hands-off algorithmic trading. I created it to eliminate emotional decisions with 24/7 execution, strong risk controls (<15% max drawdown target), and consistent results.',
    category: 'Full-Stack',
    technology: 'Next.js / TypeScript / Tailwind',
    image: image('fullstack/nqbladeposter.webp'),
    fullPageImage: image('fullstack/nqbladefullpage.webp'),
    tags: ['Web Application', 'Full-Stack', 'TypeScript', 'Responsive'],
    link: 'https://nqblade.com/',
  },
  {
    id: 7,
    name: 'Dreamlovers',
    description:
      'Dreamlovers is a wedding videography services website that showcases beautiful wedding films and video editing services. The platform allows couples to view wedding video portfolios, book services, and learn about the creative process of capturing and editing their special moments. Built with modern web technologies to provide an elegant and user-friendly experience.',
    category: 'Full-Stack',
    technology: 'Next.js / TypeScript / PayloadCMS / Tailwind',
    image: image('fullstack/dreamloversposter.webp'),
    fullPageImage: image('fullstack/dreamlovers.webp'),
    tags: ['Web Application', 'Full-Stack', 'TypeScript', 'Responsive'],
    link: 'https://www.dreamlovers.be/',
  },
  {
    id: 1,
    name: 'FocusTrading',
    description:
      'FocusTrading is an advanced trading platform that uses artificial intelligence to generate trading signals and automate portfolio management. The platform provides real-time market analysis, personalized trading signals, and automated trading opportunities. The frontend is built with modern web technologies to deliver a seamless user experience on both desktop and mobile devices.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS / Vite',
    role: 'Front-end development',
    image: image('webdevelopment/focus.webp'),
    fullPageImage: image('webdevelopment/focusfullpage.webp'),
    tags: ['Web App', 'AI', 'Trading', 'Responsive', 'UI/UX'],
    link: 'https://thunderous-gumdrop-ba1c41.netlify.app/',
  },
  {
    id: 2,
    name: 'Mavo Productions',
    description:
      'Mavo Productions is a website for a creative production company specializing in video, photography, and design. The site showcases their portfolio, services, and team in a visually appealing way. I was responsible for the design and development of the fully responsive website, working closely with the team to transform their creative vision into a digital experience that reflects their work.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    role: 'Design and development',
    image: image('webdevelopment/mavo.webp'),
    fullPageImage: image('webdevelopment/mavofullpage.webp'),
    tags: ['Portfolio', 'Creative', 'Responsive', 'Animation'],
    link: 'https://mavoproductions.com',
  },
  {
    id: 3,
    name: 'Omega Trading',
    description:
      'Omega Trading is a platform for cryptocurrency traders with advanced charting features, market analysis, and trading tools. The project revolved around the launch of a new cryptocurrency, requiring a complex frontend implementation with real-time data visualization, user authentication, and a reactive design. The platform enables users to track different markets, set up automated trading strategies, and manage their portfolio from any device.',
    category: 'Frontend Development',
    technology: 'HTML / CSS / JS',
    role: 'Front-end development',
    image: image('webdevelopment/omega.webp'),
    fullPageImage: image('webdevelopment/omegafullpage.webp'),
    tags: ['Web App', 'Crypto', 'Dashboard', 'Charts'],
    link: 'https://celadon-marzipan-bd54a9.netlify.app/',
  },
  {
    id: 4,
    name: 'Omega Coin Poster',
    description:
      'This poster was designed to support the launch of a new cryptocurrency. The design combines futuristic elements with a professional appearance to build trust in the new digital token. The composition uses a dark color palette with vibrant accents to draw attention and emphasize important information about the coin. This project required a careful balance between brand style, information design, and visual appeal.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    role: 'Design',
    image: image('graphicdesign/omegacoinposter.webp'),
    fullPageImage: image('graphicdesign/omegacoinposterfullpage.webp'),
    tags: ['Print', 'Crypto', 'Branding', 'Marketing'],
  },
  {
    id: 5,
    name: 'Black Friday Ad',
    description:
      'This Black Friday advertisement was designed to grab attention during a busy advertising period. By using striking color contrast, clear typography, and a structured layout, the design effectively communicates offers and promotions. The advertisement was developed for both digital and print media, with adaptations for different platform requirements and target audiences.',
    category: 'Graphic Design',
    technology: 'Adobe Photoshop',
    role: 'Design',
    image: image('graphicdesign/blackfriday.webp'),
    fullPageImage: image('graphicdesign/blackfriday.webp'),
    tags: ['Advertising', 'Print', 'Digital', 'E-commerce'],
  },
];

export const frameNumber = (index: number) => String(index + 1).padStart(2, '0');
