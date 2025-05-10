import { Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="container mx-auto pt-16 md:pt-20 lg:pt-24 xl:pt-28 flex flex-col md:flex-row justify-between items-center">
      {/* Mobiele versie (onder md) */}
      <div className="flex flex-col items-center w-full md:hidden">
        <div className="text-center px-4 mb-8">
          <p className="font-bold text-2xl text-neutral-200">Hey, I am Thibo</p>
          <h1 className="font-bold text-4xl leading-tight mt-4">
            <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">Web Developer +<br /> UX Designer.</span>
          </h1>
        </div>
        
        <div className="relative mb-8">
          {/* Semi-circular orange outline voor mobiel */}
          <div className="absolute w-[280px] h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="49" 
                fill="none" 
                stroke="#f97316" 
                strokeWidth="0.4" 
                strokeDasharray="130 250"
                transform="rotate(-55, 50, 50)"
              />
            </svg>
          </div>
          <Image 
            className="[filter:drop-shadow(0_0_200px_rgba(249,115,22,0.6))] relative z-10 rounded-full border-[0.5px] border-white/10 w-[250px] h-[250px]" 
            src="/images/pfp.png" 
            alt="Hero Image" 
            width={400} 
            height={400}
          />
        </div>
        
        <div className="text-center px-4 mb-8">
          <p className="font-normal text-neutral-200 text-base max-w-xl">I&apos;m a Next.js Web Developer and UI/UX Designer. I build fast, scalable web apps using Next.js, TypeScript, and Tailwind.</p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button className="text-orange-500 px-5 py-2 border border-orange-500 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer text-sm">
            Download CV
            <Download className="w-3 h-3" />
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-8 h-8 flex items-center justify-center border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <Github className="w-3 h-3 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-8 h-8 flex items-center justify-center border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <Linkedin className="w-3 h-3 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop versie (md en hoger) - ONGEWIJZIGD */}
      <div className="hidden md:block md:w-1/2 md:px-0 text-left">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          <p className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-neutral-200">Hey, I am Thibo</p>
          <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">Web Developer +<br /> UX Designer.</span>
          </h1>
          <p className="font-normal text-neutral-200 text-base md:text-base lg:text-lg xl:text-xl max-w-xl">I&apos;m a Next.js Web Developer and UI/UX Designer. I build fast, scalable web apps using Next.js, TypeScript, and Tailwind.</p>
        </div>
        <div className="pt-8 md:pt-10 lg:pt-12 xl:pt-14 flex gap-4 md:gap-5 lg:gap-6 justify-start">
          <button className="text-orange-500 px-5 md:px-5 lg:px-6 xl:px-7 py-2 md:py-2 lg:py-3 xl:py-3 border border-orange-500 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer text-sm md:text-sm lg:text-base xl:text-lg">
            Download CV
            <Download className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <Github className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <Linkedin className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
        </div>
      </div>

      {/* Image section voor desktop (md en hoger) - ONGEWIJZIGD */}
      <div className="hidden md:block pr-0 md:pr-8 lg:pr-12 xl:pr-15 relative">
        {/* Semi-circular orange outline */}
        <div className="absolute w-[250px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[250px] md:h-[330px] lg:h-[400px] xl:h-[450px] top-[125px] md:top-[150px] lg:top-[170px] xl:top-49 left-1/2 md:left-37 lg:left-42 xl:left-48 -translate-x-1/2 -translate-y-1/2">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="49" 
              fill="none" 
              stroke="#f97316" 
              strokeWidth="0.4" 
              strokeDasharray="130 250"
              transform="rotate(-55, 50, 50)"
            />
          </svg>
        </div>
        <Image 
          className="[filter:drop-shadow(0_0_200px_rgba(249,115,22,0.6))] relative z-10 rounded-full border-[0.5px] border-white/10 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" 
          src="/images/pfp.png" 
          alt="Hero Image" 
          width={400} 
          height={400}
        />
      </div>
    </header>
  );
};

export default Header;
