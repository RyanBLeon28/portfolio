import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Sparkles, ArrowUpRight, Github, Play, Pause } from 'lucide-react';
import { featuredProjectsData } from '../data/projectsData';

const GALLERY_INTERVAL = 4000;

function VideoPlayer({ src, poster, alt }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group aspect-video w-full rounded-[24px] overflow-hidden border border-white/10 bg-[#151F32] relative cursor-pointer"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        aria-label={alt}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-[#4ADE80] text-[#0B1121] flex items-center justify-center shadow-lg">
          {isPlaying ? (
            <Pause size={26} fill="currentColor" />
          ) : (
            <Play size={26} fill="currentColor" className="ml-1" />
          )}
        </div>
      </div>
    </div>
  );
}

function MediaGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, GALLERY_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length, activeIndex]);

  return (
    <div>
      <div className="aspect-video w-full rounded-[24px] overflow-hidden border border-white/10 bg-[#151F32] relative">
        <AnimatePresence>
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ver imagem ${i + 1}`}
              className={`relative w-16 h-10 shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                activeIndex === i ? 'border-[#4ADE80]' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const reverse = index % 2 === 1;
  const images = Array.isArray(project.image) ? project.image : project.image ? [project.image] : [];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center ${index > 0 ? 'mt-20' : ''}`}>

      {/* MÍDIA: vídeo em loop (se houver) tem prioridade sobre a imagem estática */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`relative ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <div className="absolute -top-4 left-4 z-10 bg-[#4ADE80] text-[#0B1121] text-xs font-black tracking-widest uppercase px-4 py-2 rounded-sm flex items-center gap-2 shadow-lg">
          <Sparkles size={14} /> Destaque
        </div>

        {project.video ? (
          <VideoPlayer src={project.video} poster={images[0]} alt={project.title} />
        ) : images.length > 0 ? (
          <MediaGallery images={images} alt={project.title} />
        ) : (
          <div className="aspect-video w-full rounded-[24px] overflow-hidden border border-white/10 bg-[#151F32]">
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-600"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)' }}
            >
              <ImageIcon size={44} strokeWidth={1.5} />
              <span className="text-xs font-bold tracking-widest uppercase">Imagem do Projeto</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* TEXTO: descrição do projeto */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={reverse ? 'md:order-1' : 'md:order-2'}
      >
        <span className="text-[#4ADE80] text-xs font-bold tracking-[0.2em] uppercase">
          Projeto em Destaque 0{index + 1}
        </span>

        <h4 className="text-2xl md:text-3xl font-black text-white mt-2 mb-4 tracking-tight">
          {project.title}
        </h4>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 text-justify whitespace-pre-line">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 bg-[#151F32] text-[#4ADE80] border border-[#4ADE80]/20 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.repo) && (
          <div className="flex flex-wrap items-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#4ADE80] text-[#0B1121] px-6 py-3 font-bold text-xs tracking-widest uppercase hover:bg-[#3bce6d] transition-colors rounded-sm"
              >
                Ver Projeto <ArrowUpRight size={16} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#4ADE80] transition-colors font-bold text-xs tracking-widest uppercase"
              >
                <Github size={18} /> Código
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section id="destaques" className="max-w-7xl mx-auto px-6 py-16 relative z-10 scroll-mt-32">
      <div className="flex items-center mb-14">
        <h3 className="text-3xl font-black text-white tracking-tight uppercase flex items-center gap-4">
          <span className="text-[#4ADE80]">DESTAQUES</span>
          <div className="hidden md:block h-1 w-20 bg-white/5 ml-4"></div>
        </h3>
      </div>

      {featuredProjectsData.map((project, index) => (
        <FeaturedProject key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
