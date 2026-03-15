import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './modals/ProjectModal';

export default function Projects() {
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null); 

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 420 : 320; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (carouselRef.current && !selectedProject) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3500);

    return () => clearInterval(autoPlay);
  }, [selectedProject]); 

  return (
    <section id="projetos" className="max-w-7xl mx-auto px-6 py-2 relative z-10 scroll-mt-32">
      
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-black text-white tracking-tight uppercase flex items-center gap-4">
          <span className="text-[#4ADE80]">PROJETOS</span>
          <div className="hidden md:block h-1 w-20 bg-white/5 ml-4"></div>
        </h3>
        
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 bg-[#151F32] border border-white/5 rounded-full hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 bg-[#151F32] border border-white/5 rounded-full hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((project, index) => {
          const coverImage = Array.isArray(project.image) ? project.image[0] : project.image;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative aspect-square min-w-[85vw] md:min-w-[400px] shrink-0 snap-center bg-[#151F32] rounded-[30px] overflow-hidden border border-white/5 hover:border-[#4ADE80]/50 transition-colors"
            >
              <img 
                src={coverImage} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#0B1121] via-[#0B1121]/80 to-transparent">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => ( 
                    <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-[#0B1121] text-[#4ADE80] border border-[#4ADE80]/20 rounded-sm">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-bold tracking-widest px-2 py-1 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
}