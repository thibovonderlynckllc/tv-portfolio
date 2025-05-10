'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from '../data/testimonials';
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 16 },
      },
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Aantal slidesets (perView)
  const perView = typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 2;
  const dotCount = Math.ceil(testimonials.length / perView);

  return (
    <div className="w-full bg-neutral-950 py-24 relative overflow-hidden" id="testimonials">
      {/* Oranje glow blob linksboven, aan het uiteinde */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-[160px] z-0"></div>
      <div className="container mx-auto relative z-10">
        <SectionTitle level={2}>Testimonials</SectionTitle>
        <p className="text-center text-neutral-200 text-lg mb-16">Hear what my clients have to say about working with me.</p>
        <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="keen-slider__slide flex h-full">
              <div className="flex flex-col justify-between h-full w-full bg-neutral-900 border border-orange-500/20 rounded-2xl p-10 shadow-lg min-h-[270px]">
                <div>
                  <p className="text-white text-lg text-neutral-200 mb-8">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-white text-lg leading-tight">{testimonial.name}</span>
                    <span className="text-neutral-400 text-base leading-tight">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: dotCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === Math.floor(currentSlide / perView) ? 'w-8 bg-orange-500' : 'w-2 bg-white/20'
              }`}
              aria-label={`Go to testimonial set ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;