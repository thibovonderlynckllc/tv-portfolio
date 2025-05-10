'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from '../data/testimonials';
import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [perView, setPerView] = useState(2);
  
  // Optimalisatie: Slider opties
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: perView,
      spacing: 24,
    },
    renderMode: "performance",
    loop: true,
    drag: true,
    rubberband: false, // Voorkomt elastisch gedrag dat lag kan veroorzaken
    defaultAnimation: {
      duration: 500, // Verlaag de tijdsduur voor snellere animaties
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Effect om viewport-afhankelijke waarden te bepalen
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setPerView(isMobile ? 1 : 2);
    };
    
    // Init
    handleResize();
    
    // Resize listener met debounce voor betere performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Bereken aantal dots na laden
  const dotCount = Math.ceil(testimonials.length / perView);

  return (
    <div className="w-full bg-neutral-950 py-24 relative overflow-hidden" id="testimonials">
      {/* Oranje glow blob linksboven, aan het uiteinde */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-[160px] z-0"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <SectionTitle level={2}>Testimonials</SectionTitle>
        <p className="text-center text-neutral-200 text-lg mb-16">Hear what my clients have to say about working with me.</p>
        
        {/* Slider met optimized rendering */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing will-change-transform">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="keen-slider__slide flex h-full will-change-transform"
              >
                <div className="flex flex-col justify-between h-full w-full bg-neutral-900 border border-orange-500/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg min-h-[270px]">
                  <div>
                    <p className="text-white text-base sm:text-lg text-neutral-200 mb-6 sm:mb-8">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 sm:mt-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={56} 
                        height={56} 
                        className="w-full h-full object-cover"
                        loading="eager"
                        priority={testimonial.id <= 2}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white text-base sm:text-lg leading-tight">{testimonial.name}</span>
                      <span className="text-neutral-400 text-sm sm:text-base leading-tight">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots - Meer touch-friendly */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx * perView)}
                className={`h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  idx === Math.floor(currentSlide / perView) ? 'w-10 bg-orange-500' : 'w-3 bg-white/20'
                }`}
                aria-label={`Go to testimonial set ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;