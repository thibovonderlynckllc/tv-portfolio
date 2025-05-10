import React, { ElementType } from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

const SectionTitle = ({ children, level = 2 }: SectionTitleProps) => {
  const HeadingTag = `h${level}` as ElementType;
  
  return (
    <div className="flex flex-col items-center mb-8">
      <HeadingTag className="text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">
        {children}
      </HeadingTag>
      <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-2"></div>
    </div>
  );
};

export default SectionTitle; 