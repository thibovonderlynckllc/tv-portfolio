'use client';
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const categories = [
  "All",
  "Frontend Development",
  "Full-Stack",
  "Graphic Design",
];

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeCategory);
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  return (
    <div className="relative py-16 sm:py-20 md:py-24" id="projects">
      {/* Oranje glow blob rechtsboven */}
      <div className="absolute -top-32 sm:-top-40 md:-top-48 right-0 w-[250px] h-[200px] sm:w-[450px] sm:h-[400px] md:w-[700px] md:h-[600px] bg-orange-500 opacity-10 rounded-full blur-[80px] sm:blur-[120px] md:blur-[160px] -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionTitle level={1}>My Recent Projects</SectionTitle>
        <p className="text-center text-neutral-200 sm:text-base sm:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">Explore my latest work where I transform concepts into stunning web experiences.</p>
      </div>
      
      {/* Category tabs - responsive version */}
      <div className="border-t border-b border-neutral-800 w-full mb-8 sm:mb-10 md:mb-12">
        <div className="container mx-auto relative px-4 sm:px-6 md:px-8">
          <div className="flex justify-center">
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} divide-y md:divide-y-0 md:divide-x divide-neutral-800 md:border-x border-neutral-800 w-full md:w-auto`}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-3 sm:py-4 md:py-5 px-4 md:px-0 md:w-[180px] lg:w-[220px] xl:w-[250px] focus:outline-none transition-all duration-200 text-center relative ${
                    activeCategory === category
                      ? "text-white font-medium"
                      : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {activeCategory === category && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 -z-10"
                      layoutId="activeCategoryBackground"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          >
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-10 sm:py-12 md:py-16 text-neutral-400 text-sm sm:text-base md:text-lg">
                No projects found in this category.
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  className="relative group bg-neutral-900 rounded-xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/50"
                >
                  <Link href={`/projects/${project.id}`} className="cursor-pointer">
                    <div className="overflow-hidden relative aspect-[16/9]">
                      <Image 
                        src={project.imageUrl} 
                        alt={`Project ${project.name} - Thibo Vonderlynck Next.js Web Developer`} 
                        width={800} 
                        height={450} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="py-5 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2">{project.name}</h3>
                          <p className="text-neutral-400 text-xs sm:text-sm md:text-base">{project.technology}</p>
                        </div>
                        <div 
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyProjects;