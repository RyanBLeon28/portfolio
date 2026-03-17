import React from 'react';
import { Download, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const hexagonPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    // Reduzi o padding top (pt) e ajustei as margens para não estourar o limite da tela
    <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-12 lg:pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center bg-[#0B1121] relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)' }}>
      </div>

      {/* LADO ESQUERDO: Textos e Botões */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
          OLÁ, EU SOU O RYAN!
        </h2>
        
        {/* Texto levemente menor no md para notebooks não quebrarem muitas linhas */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-lg font-medium text-justify">
           Estudante do 5º ano de Engenharia de Computação pela Universidade Federal do Rio Grande (FURG). Durante minha trajetória, mergulhei em projetos de iniciação científica e de inovação com um objetivo claro: arquitetar soluções eficientes para problemas reais. Sou apaixonado por conectar o mundo físico ao digital — operando desde sistemas embarcados até a estruturação de servidores e APIs. Atualmente, meu principal foco de pesquisa e interesse está na Segurança de Redes, explorando tecnologias avançadas para construir infraestruturas resilientes e protegidas.
        </p>

        {/* <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          <button className="flex items-center gap-3 bg-[#4ADE80] text-[#0B1121] px-6 py-3 lg:px-8 lg:py-4 font-bold text-xs lg:text-sm tracking-widest uppercase hover:bg-[#3bce6d] transition-colors rounded-sm">
            Baixar CV <Download size={18} />
          </button>
          
          <a href="#projetos" className="flex items-center gap-3 text-white hover:text-[#4ADE80] transition-colors font-bold text-xs lg:text-sm tracking-widest uppercase cursor-pointer">
            <PlayCircle size={36} className="text-[#4ADE80]" /> Ver Projetos
          </a>
        </div> */}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center items-center h-full z-10 mt-8 md:mt-0"
      >
        <div 
          className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border-[4px] lg:border-[5px] 2xl:border-[6px] border-[#4ADE80]"
          style={{ clipPath: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)' }}
        ></div>

        <div 
          className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] 2xl:w-[440px] 2xl:h-[440px] bg-[#4ADE80] flex items-center justify-center shadow-2xl"
          style={{ clipPath: hexagonPath }}
        >
          <div 
            className="w-[96%] h-[96%] bg-[#1E293B]"
            style={{ clipPath: hexagonPath }}
          >
            <img 
              src="/images/myself2.png" 
              alt="Ryan de Leon" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-110" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}