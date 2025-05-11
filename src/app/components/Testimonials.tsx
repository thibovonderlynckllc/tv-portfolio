'use client';

import Marquee from "react-fast-marquee";
import { testimonials } from '../data/testimonials';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="w-full bg-neutral-950 py-24 relative overflow-hidden" id="testimonials">
      {/* Oranje glow blob linksboven, aan het uiteinde */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-[160px] z-0"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <SectionTitle level={2}>Testimonials</SectionTitle>
        <p className="text-center text-neutral-200 text-base sm:text-lg mb-16">Hear what my clients have to say about working with me.</p>
      </div>
      
      {/* Marquee slider */}
      <div className="w-full">
        <Marquee
          speed={35}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#111111"
          gradientWidth={60}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={testimonial.id + '-' + idx} 
              className="mx-3 sm:mx-4"
            >
              <div className="flex flex-col justify-between h-[220px] w-[350px] sm:w-[450px] md:w-[600px] bg-gradient-to-r from-transparent to-neutral-900/40 border border-orange-500/20 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg">
                <div className="flex-1 overflow-hidden">
                  <p className="text-white text-base sm:text-lg text-neutral-200 mb-4 sm:mb-5 line-clamp-3">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={`Testimonial van ${testimonial.name} - Thibo Vonderlynck Next.js Web Developer`} 
                      width={56} 
                      height={56} 
                      className="w-full h-full object-cover"
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
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;