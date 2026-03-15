import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Garante que a primeira imagem mostrada seja a correta, independente de ser array ou string
  const isArray = Array.isArray(project.image);
  const defaultImage = isArray ? project.image[0] : project.image;
  const [activeImage, setActiveImage] = useState(defaultImage);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose} // Clicar fora fecha o modal
    >
      {/* Container do Modal */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal o feche
        className="bg-[#0B1121] border border-[#4ADE80]/30 w-full max-w-5xl max-h-[90vh] rounded-2xl md:rounded-[40px] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(74,222,128,0.1)]"
      >
        
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#4ADE80] text-white hover:text-[#0B1121] rounded-full backdrop-blur-sm transition-colors"
        >
          <X size={24} />
        </button>

        {/* LADO ESQUERDO: Galeria de Fotos */}
        <div className="w-full md:w-1/2 bg-[#151F32] p-6 flex flex-col gap-4 overflow-y-auto border-b md:border-b-0 md:border-r border-white/5">
          {/* Imagem Principal */}
          <div className="w-full aspect-video md:aspect-square bg-black rounded-xl overflow-hidden border border-white/5">
            <img 
              src={activeImage} 
              alt={project.title} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Miniaturas (Só renderiza se for um array com mais de 1 imagem) */}
          {isArray && project.image.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
              {project.image.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
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
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h3>
          
          <div className="mb-8">
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#4ADE80] mb-3">
              Sobre o Projeto
            </h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5">
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#4ADE80] mb-4">
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 bg-[#0B1121] text-white border border-white/10 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}