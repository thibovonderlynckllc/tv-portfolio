export interface Skill {
  title: string;
  description: string;
  highlight?: boolean;
  image: string;
}

export const skills: Skill[] = [
  {
    title: 'Front/Back-end',
    description: 'Building modern web apps with Next.js, TypeScript, Supabase and PayloadCMS.',
    highlight: true,
    image: '/images/icons/frontend.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Skilled in creating intuitive and visually appealing designs with Figma.',
    image: '/images/icons/ux-design.svg',
  },
  {
    title: 'Graphic Design',
    description: 'Proficient in creating visual identities and designs for brands and products.',
    image: '/images/icons/graphic-design.svg',
  },
];
