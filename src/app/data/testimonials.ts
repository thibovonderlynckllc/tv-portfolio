export interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Thibo Vonderlynck',
    company: 'FocusTrading',
    image: '/images/pfp.png',
    text: 'Thibo delivered an incredible website for our Forex AI company. His expertise in Next.js made it visually stunning!',
  },
  {
    id: 2,
    name: 'Thibo Vonderlynck',
    company: 'FocusTrading',
    image: '/images/pfp.png',
    text: 'Thibo is a great developer. He is very professional and always delivers on time. I highly recommend him.',
  },
  {
    id: 3,
    name: 'Thibo Vonderlynck',
    company: 'FocusTrading',
    image: '/images/pfp.png',
    text: "Thibo's work on our AI platform was exceptional. His Next.js skills created a seamless and modern user experience.",
  },
];
