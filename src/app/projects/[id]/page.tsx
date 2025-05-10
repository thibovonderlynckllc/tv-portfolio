'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { projects, Project } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    if (params?.id) {
      const projectId = parseInt(params.id as string);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [params]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-white">Loading project...</div>
      </div>
    );
  }
  
  return (
    <div className="bg-neutral-950 min-h-screen relative pb-24">
      <div className="container mx-auto pt-6 px-0">
        <Link href="/#projects" className="text-white hover:text-orange-500 transition-colors inline-block">
          ← Back to projects
        </Link>
        
        {/* Mobiele weergave - content en scrollende afbeelding onder elkaar */}
        <div className="lg:hidden mt-10 mb-20 px-6">
          <h1 className="text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">
              {project.name}
            </span>
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.displayCategory ? (
              project.displayCategory.map((cat, index) => (
                <span key={index} className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">
                  {cat}
                </span>
              ))
            ) : (
              <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
            )}
          </div>
          
          <p className="text-neutral-400 text-base mb-8">
            {project.description}
          </p>
          
          <div className="border-t border-neutral-800 pt-6 mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Technologies</h3>
            <p className="text-neutral-400">{project.technology}</p>
          </div>
        
          
          {project.link && project.category === 'Frontend Development' && (
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Visit Project <ArrowUpRight size={16} />
            </a>
          )}
          
          {/* Op mobiel de foto met padding onderaan */}
          <div className="mt-10 pb-24">
            <Image 
              src={project.fullPageImageUrl || project.imageUrl} 
              alt={project.name} 
              className="w-full rounded-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
        
        {/* Desktop weergave - fixed left content en scrollende afbeelding */}
        <div className="hidden lg:flex min-h-screen px-0">
          <div className="w-1/3 h-screen flex items-center">
            {/* Vaste linkerkant - fixed positie en verticaal gecentreerd */}
            <div className="fixed flex flex-col z-10 max-w-[calc(33.333%-3rem)] top-1/2 -translate-y-1/2 overflow-hidden">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">
                  {project.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.displayCategory ? (
                  project.displayCategory.map((cat, index) => (
                    <span key={index} className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                )}
              </div>
              
              <p className="text-neutral-400 text-base mb-8">
                {project.description}
              </p>
              
              <div className="border-t border-neutral-800 pt-6 mb-8">
                <h3 className="text-white text-xl font-semibold mb-4">Technologies</h3>
                <p className="text-neutral-400">{project.technology}</p>
              </div>
          
              
              {project.link && project.category === 'Frontend Development' && (
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-white bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-1.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
                >
                  Visit Project <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
          
          {/* Scrollende rechterkant */}
          <div className="w-1/2 ml-auto pt-[10vh] pl-4">
            <Image 
              src={project.fullPageImageUrl || project.imageUrl} 
              alt={project.name} 
              className="w-full rounded-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      
      {/* Extra element to ensure background extends fully */}
      <div className="absolute inset-0 -z-10 bg-neutral-950 h-full w-full"></div>
    </div>
  );
} 