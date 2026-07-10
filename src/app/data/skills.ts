export interface Skill {
  title: string;
  description: string;
  highlight?: boolean;
  image: string;
}

export const skills: Skill[] = [
  {
    title: 'Front/Back-end',
    description: 'Building modern web apps with Next.js, TypeScript, Supabase, PayloadCMS, and Vue.js. Deploying on Vercel, Azure, and Cloudflare with PostgreSQL backends.',
    highlight: true,
    image: '/images/icons/frontend.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Skilled in creating intuitive and visually appealing designs with Figma and Adobe XD. From wireframes to polished, production-ready interfaces.',
    image: '/images/icons/ux-design.svg',
  },
  {
    title: 'Graphic Design',
    description: 'Proficient in creating visual identities and designs for brands and products using Photoshop and Adobe XD.',
    image: '/images/icons/graphic-design.svg',
  },
];
