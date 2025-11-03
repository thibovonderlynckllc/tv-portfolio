import { projects, Project } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found | Thibo Vonderlynck',
    };
  }
  
  const imageUrl = project.fullPageImageUrl || project.imageUrl;
  
  return {
    title: `${project.name} | Project | Thibo Vonderlynck`,
    description: `Bekijk het project ${project.name} van Thibo Vonderlynck, Next.js web developer en UX designer. ${project.description?.slice(0, 120)}`,
    other: {
      'preload-image': imageUrl,
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }
  
  const imageUrl = project.fullPageImageUrl || project.imageUrl;
  
  return (
    <main className="bg-neutral-950 min-h-screen relative pb-0 lg:pb-24">
      <article className="container mx-auto pt-6 px-0">
        <Link href="/#projects" className="text-white hover:text-orange-500 transition-colors inline-block" title="Terug naar projecten overzicht">
          ← Back to projects
        </Link>
        
        {/* Mobiele weergave - content en scrollende afbeelding onder elkaar */}
        <section className="lg:hidden mt-10 mb-20 px-6">
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
        
          
          {project.link && (project.category === 'Frontend Development' || project.category === 'Full-Stack') && (
            <Link 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
              title={`Bekijk live project: ${project.name}`}
            >
              Visit Project <ArrowUpRight size={16} />
            </Link>
          )}
          
          {/* Op mobiel de foto met padding onderaan */}
          <div className="mt-10 pb-0">
            <Image 
              src={imageUrl} 
              alt={`Screenshot van project ${project.name} - Thibo Vonderlynck Next.js web developer`} 
              className="w-full rounded-xl"
              width={1200}
              height={1600}
              sizes="100vw"
              priority
              quality={85}
            />
          </div>
        </section>
        
        {/* Desktop weergave - grid layout met columns */}
        <section className="hidden lg:block min-h-screen px-6 pt-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Linker kolom - col-span-5 */}
            <div className="col-span-6">
              <div className="sticky top-24">
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
            
                
                {project.link && (project.category === 'Frontend Development' || project.category === 'Full-Stack') && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-white bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-1.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
                    title={`Bekijk live project: ${project.name}`}
                  >
                    Visit Project <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </div>
            
            {/* Rechter kolom - col-span-7 */}
            <div className="col-span-6 pt-[5vh]">
              <Image 
                src={imageUrl} 
                alt={`Screenshot van project ${project.name} - Thibo Vonderlynck Next.js web developer`} 
                className="w-full rounded-xl"
                width={1200}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={85}
              />
            </div>
          </div>
        </section>
      </article>
      
      {/* Extra element to ensure background extends fully */}
      <div className="absolute inset-0 -z-10 bg-neutral-950 h-full w-full"></div>
    </main>
  );
} 