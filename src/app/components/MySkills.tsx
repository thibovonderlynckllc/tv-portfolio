'use client';
import Image from "next/image";
import { skills, Skill } from "../data/skills";
import { MoveRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const SkillCard = ({ title, description, image, isFirst, isLast, isFullWidth }: Skill & { isFirst?: boolean; isLast?: boolean; isFullWidth?: boolean }) => (
  <motion.div 
    className={`relative ${isFullWidth ? 'sm:col-span-2 lg:col-span-1' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {isFirst && (
      <div className="absolute -bottom-8 -left-8 sm:-bottom-95 sm:-left-10 md:-bottom-115 lg:-bottom-14 lg:-left-14 grid grid-cols-6 gap-1 md:gap-1.5 lg:gap-2 z-0 hidden sm:grid">
        {[...Array(48)].map((_, i) => (
          <motion.div 
            key={`dot-bottom-${i}`} 
            className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-orange-500"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.01 }}
          />
        ))}
      </div>
    )}
    {isLast && (
      <div className="absolute -top-8 -right-8 sm:-top-115 sm:-right-10 md:-top-125 lg:-top-14 lg:-right-14 grid grid-cols-6 gap-1 md:gap-1.5 lg:gap-2 z-0 hidden sm:grid">
        {[...Array(48)].map((_, i) => (
          <motion.div 
            key={`dot-top-${i}`} 
            className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-orange-500"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.01 }}
          />
        ))}
      </div>
    )}
    {/* Card wrapper */}
    <motion.div 
      className="transition-transform duration-300 ease-in-out hover:-translate-y-2 relative z-10"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        {/* Solid backdrop to hide the dots */}
        <div className="absolute inset-0 bg-neutral-900 rounded-xl z-5"></div>
        {/* Card content */}
        <div className={`p-6 sm:p-7 md:p-8 rounded-xl bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/50 transition-all duration-300 flex flex-col items-center text-center group ${isFullWidth ? 'sm:h-[320px] lg:h-[350px] md:h-[380px] lg:h-[450px]' : 'h-[350px] sm:h-[400px] md:h-[420px] lg:h-[450px]'} relative z-10`}>
          {/* Top content wrapper */}
          <div className="flex flex-col items-center flex-1">
            {/* Cirkel met icoon */}
            <motion.div 
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full outline outline-orange-500 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image}
                alt={`Skill: ${title} - Thibo Vonderlynck Next.js Web Developer`}
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </motion.div>
            
            {/* Titel */}
            <motion.h3 
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {title}
            </motion.h3>
            
            {/* Drie strepen */}
            <motion.div 
              className="flex gap-2 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span className="w-3 md:w-4 h-0.5 bg-orange-500 rounded-full"></span>
              <span className="w-3 md:w-4 h-0.5 bg-orange-500 rounded-full"></span>
              <span className="w-3 md:w-4 h-0.5 bg-orange-500 rounded-full"></span>
            </motion.div>
            
            {/* Beschrijving */}
            <motion.p 
              className={`text-sm sm:text-base text-neutral-200 group-hover:text-white transition-all duration-300 ${isFullWidth ? 'sm:max-w-md lg:max-w-none mx-auto' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
          
          {/* Read More knop */}
          <motion.button 
            className="text-white bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-5 py-1.5 text-sm sm:text-base rounded-full flex items-center gap-1.5 sm:gap-2 cursor-pointer mt-6 sm:mt-7 md:mt-8 group/button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            See More
            <MoveRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const MySkills = () => {
  return (
    <div className="w-full bg-neutral-950 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-[9.5rem]" id="skills">
      <motion.div 
        className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>My Skills</SectionTitle>
        <motion.p 
          className="text-center text-base sm:text-lg mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building fast, scalable, and user-friendly web apps with modern tools.
        </motion.p>
      </motion.div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.title} 
            {...skill} 
            isFirst={index === 0}
            isLast={index === skills.length - 1}
            isFullWidth={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkills;