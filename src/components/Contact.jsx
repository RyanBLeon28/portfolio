import React, { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'ryanbleon0@gmail.com';

  // Função para copiar o e-mail para a área de transferência
  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    // Volta o botão ao estado normal após 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={36} />, 
      link: 'https://www.linkedin.com/in/ryan-borges-leon-203587251/',
      text: 'Conecte-se comigo',
      isEmail: false
    },
    { 
      name: 'GitHub', 
      icon: <Github size={36} />, 
      link: 'https://github.com/RyanBLeon28',
      text: 'Veja meus repositórios',
      isEmail: false
    },
    { 
      name: 'E-mail', 
      icon: <Mail size={36} />, 
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
      text: emailAddress, // Mostra o seu e-mail na tela
      isEmail: true
    }
  ];

  return (
    <section id="contato" className="max-w-7xl mx-auto px-6 py-2 border-t border-white/5 scroll-mt-20">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
          VAMOS <span className="text-[#4ADE80]">CONVERSAR</span>
        </h2>
        <div className="h-1 flex-1 bg-white/5 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => {
          
          // RENDERIZAÇÃO DO CARD DE E-MAIL (Com botões de ação)
          if (contact.isEmail) {
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-8 bg-[#151F32] border border-white/5 hover:border-[#4ADE80] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#4ADE80]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                <div className="text-gray-400 group-hover:text-[#4ADE80] transition-colors duration-300 mb-4 relative z-10">
                  {contact.icon}
                </div>
                
                <h3 className="text-white font-bold tracking-widest uppercase mb-2 relative z-10">
                  {contact.name}
                </h3>
                
                <p className="text-sm text-gray-400 font-mono mb-6 relative z-10 text-center">
                  {contact.text}
                </p>

                {/* Botões de Ação do E-mail */}
                <div className="flex gap-3 relative z-10 w-full justify-center">
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0B1121] border border-white/10 hover:border-[#4ADE80]/50 hover:text-[#4ADE80] text-gray-300 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    {copied ? <Check size={16} className="text-[#4ADE80]" /> : <Copy size={16} />}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                  
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0B1121] border border-white/10 hover:border-[#4ADE80]/50 hover:text-[#4ADE80] text-gray-300 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    Abrir
                  </a>
                </div>
              </div>
            );
          }

          // RENDERIZAÇÃO DOS CARDS NORMAIS (LinkedIn e GitHub)
          return (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-[#151F32] border border-white/5 hover:border-[#4ADE80] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#4ADE80]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

              <div className="text-gray-400 group-hover:text-[#4ADE80] transition-colors duration-300 mb-6 relative z-10">
                {contact.icon}
              </div>
              
              <h3 className="text-white font-bold tracking-widest uppercase mb-2 relative z-10">
                {contact.name}
              </h3>
              
              <p className="text-sm text-gray-500 text-center relative z-10">
                {contact.text}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}