import Marquee from "react-fast-marquee";
import { Code } from 'lucide-react';

const ServicesBar = () => {
  return (
    <div className="relative w-full mt-20 flex flex-col items-stretch">
      {/* Top right SVG (alleen rechts zichtbaar) */}
      <div className="absolute right-0 -top-5 h-[20px] sm:h-[25px] md:h-[30px] w-[50%] sm:w-[60%] md:w-[70%] lg:w-[750px] xl:w-[1120px] pointer-events-none z-10 overflow-hidden">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 630 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M-2.04627e-06 10L628.984 0.0161252C629.543 0.00726135 630 0.457506 630 1.016L630 8.99997C630 9.55226 629.552 9.99997 629 9.99997L-2.04627e-06 10Z" fill="#FFC6AA"/>
        </svg>
      </div>
      {/* Bottom left SVG (alleen links zichtbaar) */}
      <div className="absolute left-0 -bottom-5 h-[20px] sm:h-[25px] md:h-[30px] w-[50%] sm:w-[60%] md:w-[70%] lg:w-[750px] xl:w-[1120px] pointer-events-none z-10 overflow-hidden">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 630 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M630 3.26731e-05L1.01585 9.98385C0.457423 9.99271 -1.98184e-05 9.54247 -1.9794e-05 8.98398L-1.9445e-05 1C-1.94209e-05 0.447719 0.447696 3.0005e-06 0.999981 3.02653e-06L630 3.26731e-05Z" fill="#FFC6AA"/>
        </svg>
      </div>
      <div className="relative z-20">
        <div className="w-full py-2 sm:py-3 md:py-4 bg-gradient-to-r from-orange-500 to-[#F5A15E] overflow-hidden">
          <Marquee autoFill={true} speed={30}>
            <div className="flex items-center">
              <p className="text-base sm:text-lg md:text-xl uppercase font-medium px-6 sm:px-10 md:px-14 text-white">Web Development</p>
              <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-lg md:text-xl uppercase font-medium px-6 sm:px-10 md:px-14 text-white">Web Design</p>
              <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-lg md:text-xl uppercase font-medium px-6 sm:px-10 md:px-14 text-white">Motion Design</p>
              <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-lg md:text-xl uppercase font-medium px-6 sm:px-10 md:px-14 text-white">App Development</p>
              <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ServicesBar;
