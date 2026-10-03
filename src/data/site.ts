import type { ImageMetadata } from 'astro';
import focustrading from '../assets/testimonials/focustrading.webp';
import maxim from '../assets/testimonials/maximvonderlynck.webp';
import omegatrading from '../assets/testimonials/omegatrading.webp';

export const site = {
  name: 'Thibo Vonderlynck',
  email: 'thibovonderlynckllc@gmail.com',
  github: 'https://github.com/ThiboVonderlynck',
  linkedin: 'https://www.linkedin.com/in/thibo-vonderlynck-9654a52bb/',
  cv: '/cv.pdf',
  cvFileName: 'Thibo_Vonderlynck_CV.pdf',
};

export const skills = [
  {
    title: 'Front and back end',
    description:
      'Building modern web apps with Next.js, TypeScript, Supabase, PayloadCMS, and Vue.js. Deploying on Vercel, Azure, and Cloudflare with PostgreSQL backends.',
  },
  {
    title: 'UI/UX design',
    description:
      'Skilled in creating intuitive and visually appealing designs with Figma and Adobe XD. From wireframes to polished, production-ready interfaces.',
  },
  {
    title: 'Graphic design',
    description:
      'Proficient in creating visual identities and designs for brands and products using Photoshop and Adobe XD.',
  },
];

export const workExperience = [
  {
    period: '16/02/26 – 06/06/26',
    title: 'Front-end developer and UI/UX designer',
    place: 'Ask Maeve, Ghent',
    kind: 'Internship',
    notes: ['Complete UI/UX design and development of website', 'Testing and debugging of the web application'],
  },
  {
    period: '11/03/24 – 14/06/24',
    title: 'Front-end developer and UI/UX designer',
    place: 'Storything, Kortrijk',
    kind: 'Internship',
    notes: ['Website built via Webflow', 'UI/UX design for Zoomers'],
  },
];

export const education = [
  {
    period: '2024 – 2026',
    title: 'Multimedia & Creative Technology',
    place: 'Howest, Kortrijk',
    kind: 'MCT',
    notes: ['In-depth knowledge of frameworks, backend, and cloud technologies for web solutions.'],
  },
  {
    period: '2022 – 2024',
    title: 'Web Dev & Design',
    place: 'Howest, Kortrijk',
    kind: 'WDD',
    notes: ['Basic knowledge of HTML, CSS, JavaScript, and UI/UX with Adobe XD and Photoshop.'],
  },
];

export interface Testimonial {
  name: string;
  company: string;
  image: ImageMetadata;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aron',
    company: 'FocusTrading',
    image: focustrading,
    text: 'Working with Thibo was a breeze. He understood exactly what our Forex AI business needed and delivered a site that’s both fast and visually impressive.',
  },
  {
    name: 'Maxim',
    company: 'Mavo Productions',
    image: maxim,
    text: 'Thibo brought our creative vision to life with a website that truly reflects who we are. Communication was smooth and the end result exceeded our expectations.',
  },
  {
    name: 'Joe',
    company: 'Omega Trading',
    image: omegatrading,
    text: 'Thibo’s attention to detail and technical skills made a huge difference for our platform. The new site is user-friendly and looks fantastic. We couldn’t be happier.',
  },
];
