import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-[#0B1121] text-white border-b border-white/5">
      <div className="bg-[#4ADE80] text-[#0B1121] font-black text-2xl px-8 py-5 flex items-center justify-center tracking-widest">
        //. RYAN DE LEON
      </div>

      <nav className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
        <a 
          href="#topo" 
          onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} 
          className="hover:text-[#4ADE80] transition-colors"
        >
          Home
        </a>
        
        <a href="#projetos" className="hover:text-[#4ADE80] transition-colors">Projetos</a>
        
        <a href="#contato" className="hover:text-[#4ADE80] transition-colors">Contato</a>
      </nav>

      <button className="bg-[#4ADE80] text-[#0B1121] px-8 py-5 hover:bg-[#3bce6d] transition-colors flex items-center justify-center">
        <Menu size={28} />
      </button>
    </header>
  );
}