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
    name: 'Aron',
    company: 'FocusTrading',
    image: '/images/testimonials/focustrading.webp',
    text: 'Working with Thibo was a breeze. He understood exactly what our Forex AI business needed and delivered a site that’s both fast and visually impressive. Highly recommended!',
  },
  {
    id: 2,
    name: 'Maxim Vonderlynck',
    company: 'Mavo Productions',
    image: '/images/testimonials/maximvonderlynck.webp',
    text: 'Thibo brought our creative vision to life with a website that truly reflects who we are. Communication was smooth and the end result exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Joe',
    company: 'Omega Trading',
    image: '/images/testimonials/omegatrading.webp',
    text: 'Thibo’s attention to detail and technical skills made a huge difference for our platform. The new site is user-friendly and looks fantastic. We couldn’t be happier.',
  },
];
