import React from 'react';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Contact() {
  const contacts = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={36} />, 
      link: 'https://www.linkedin.com/in/ryan-borges-leon-203587251/', // Coloque o link do seu perfil aqui
      text: 'Conecte-se comigo' 
    },
    { 
      name: 'GitHub', 
      icon: <Github size={36} />, 
      link: 'https://github.com/RyanBLeon28', // Coloque seu link do GitHub
      text: 'Veja meus repositórios' 
    },
    { 
      name: 'E-mail', 
      icon: <Mail size={36} />, 
      link: 'mailto:ryanbleon0@gmail.com', // Coloque seu email real
      text: 'Me mande uma mensagem' 
    }
  ];

  return (
    // O id="contato" é o que faz o link do Header rolar até aqui
    <section id="contato" className="max-w-7xl mx-auto px-6 py-2 border-t border-white/5 scroll-mt-20">
      
      {/* Título da Seção */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
          VAMOS <span className="text-[#4ADE80]">CONVERSAR</span>
        </h2>
        <div className="h-1 flex-1 bg-white/5 ml-4"></div>
      </div>

      {/* Grid de Cards de Contato */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-[#151F32] border border-white/5 hover:border-[#4ADE80] transition-colors duration-300 relative overflow-hidden"
          >
            {/* Efeito de preenchimento de fundo no hover */}
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
        ))}
      </div>
    </section>
  );
}