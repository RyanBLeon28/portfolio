import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.85]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]); 

  const contactRef = useRef(null);
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["0 1", "0 0"] 
  });
  
  const projOpacity = useTransform(contactProgress, [0, 1], [1, 0.2]);
  const projScale = useTransform(contactProgress, [0, 1], [1, 0.85]);
  const projY = useTransform(contactProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#0B1121] text-white font-sans overflow-x-hidden selection:bg-[#4ADE80] selection:text-[#0B1121]">
      
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0B1121] border-b border-white/5 shadow-md">
        <Header />
      </div>

      <main className="relative bg-[#0B1121]">
        
        <div className="sticky top-[88px] min-h-screen w-full overflow-hidden flex items-start z-0 pt-10">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="w-full">
            <Hero />
          </motion.div>
        </div>

        <div className="relative z-10 w-full min-h-[70vh] -mt-[10vh] 2xl:-mt-[25vh] bg-[#0B1121]">
          
          <div className="sticky top-[88px] w-full pt-4 pb-12 overflow-hidden bg-[#0B1121]">
            <motion.div style={{ opacity: projOpacity, scale: projScale, y: projY }}>
              <Projects />
            </motion.div>
          </div>
          
        </div>
        <div ref={contactRef} className="relative z-20 w-full min-h-[80vh] bg-[#0B1121] border-t border-white/5 pt-20 pb-12">
          <Contact />
        </div>

      </main>
    </div>
  );
}