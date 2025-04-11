import Marquee from "react-fast-marquee";
import { Code } from 'lucide-react';

const ServicesBar = () => {
  return (
    <div className="w-full py-5 mt-20 bg-gradient-to-r from-orange-500 to-[#F5A15E]">
      <Marquee autoFill={true} speed={50}>
        <div className="flex items-center">
          <p className="text-2xl uppercase font-medium px-14 text-white">Web Development</p>
          <Code className="text-white" />
          <p className="text-2xl uppercase font-medium px-14 text-white">Web Design</p>
          <Code className="text-white" />
          <p className="text-2xl uppercase font-medium px-14 text-white">Motion Design</p>
          <Code className="text-white" />
          <p className="text-2xl uppercase font-medium px-14 text-white">App Development</p>
          <Code className="text-white" />
        </div>
      </Marquee>
    </div>
  );
};

export default ServicesBar;
