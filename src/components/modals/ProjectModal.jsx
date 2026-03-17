import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const isArray = Array.isArray(project.image);
  const defaultImage = isArray ? project.image[0] : project.image;
  const [activeImage, setActiveImage] = useState(defaultImage);

  const modalContent = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose} 
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()} 
        className="bg-[#0B1121] border border-[#4ADE80]/30 w-full max-w-5xl h-[85vh] max-h-[800px] rounded-[30px] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(74,222,128,0.1)]"
      >
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#151F32]/80 hover:bg-[#4ADE80] text-white hover:text-[#0B1121] rounded-full backdrop-blur-sm transition-colors border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 bg-[#151F32] p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/5 h-1/3 md:h-full">
          <div className="flex-1 w-full bg-black rounded-xl overflow-hidden border border-white/5 relative">
            <img 
              src={activeImage} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {isArray && project.image.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 shrink-0 h-[80px]" style={{ scrollbarWidth: 'thin' }}>
              {project.image.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`relative shrink-0 w-20 h-full rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === img ? 'border-[#4ADE80]' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* LADO DIREITO: Informações */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-2/3 md:h-full bg-[#0B1121] overflow-y-auto">
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight pr-8">
            {project.title}
          </h3>
          
          <div className="mb-8 flex-1">
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#4ADE80] mb-3">
              Sobre o Projeto
            </h4>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 mt-auto">
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#4ADE80] mb-4">
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2 pb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 bg-[#151F32] text-white border border-white/10 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}