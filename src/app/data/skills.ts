export interface Skill {
  title: string;
  description: string;
  highlight?: boolean;
  image: string;
}

export const skills: Skill[] = [
  {
    title: 'Front/Back-end',
    description: 'Expert in building modern, responsive web applications using Next.js, TypeScript, and Tailwind CSS. Experienced with backend technologies like Supabase and PayloadCMS.',
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
