import { Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="container mx-auto pt-24 flex justify-between items-center">
      <div className="w-1/2">
        <div className="flex flex-col gap-6">
          <p className="font-bold text-3xl">Hey, I am Thibo</p>
          <h1 className="font-bold text-6xl leading-16">
            <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">Web Developer + UX Designer.</span>
          </h1>
          <p className="font-normal text-lg">I'm a Next.js Web Developer and UI/UX Designer. I build fast, scalable web apps using Next.js, TypeScript, and Tailwind.</p>
        </div>
        <div className="pt-12 flex gap-4">
          <button className="text-white px-6 py-3 border border-orange-500 rounded-full flex items-center gap-2">
            Download CV
            <Download className="w-4 h-4" />
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-10 h-10 flex items-center justify-center border border-orange-500 rounded-full">
              <Github className="w-4 h-4 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
          <button className="text-orange-500 gap-2">
            <span className="w-10 h-10 flex items-center justify-center border border-orange-500 rounded-full">
              <Linkedin className="w-4 h-4 fill-orange-500" strokeWidth={1} />
            </span>
          </button>
        </div>
      </div>
      <div className="pr-15">
        <Image className="[filter:drop-shadow(0_0_200px_rgba(249,115,22,0.4))]" src="/images/pfp.png" alt="Hero Image" width={490} height={490} />
      </div>
    </header>
  );
};

export default Header;
