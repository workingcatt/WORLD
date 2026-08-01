import React from 'react';
import { motion } from 'motion/react';

interface OpeningProps {
  onEnter: () => void;
}

export function Opening({ onEnter }: OpeningProps) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-space-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://working-cat.org/SITE/WORLD%20BACK.png" 
          alt="Space Background" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-[#040914]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040914]/30 via-transparent to-[#040914]/90"></div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-200 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 2,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center h-full w-full px-6 py-8 md:py-20">
        {/* Top Text */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center w-full mb-6 md:mb-12"
        >
          <p className="text-xs sm:text-sm md:text-lg text-cyan-100/80 tracking-widest md:tracking-[0.3em] font-light break-keep whitespace-nowrap">
            당신만의 무한한 [가능성]을 품은 세계로.
          </p>
        </motion.div>

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, filter: "blur(5px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          className="flex items-center justify-center w-full max-w-6xl mb-8 md:mb-16"
        >
          <img 
            src="https://working-cat.org/SITE/WORLD%20%EC%A0%9C%EB%AA%A9.png" 
            alt="WORLD" 
            className="w-[120%] sm:w-full md:w-[1000px] lg:w-[1300px] max-h-[50vh] md:max-h-[65vh] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] scale-110 md:scale-100" 
          />
        </motion.div>

        {/* Bottom Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="group relative px-8 py-3.5 md:px-12 md:py-4 overflow-hidden rounded-sm cursor-pointer pointer-events-auto flex items-center justify-center"
        >
          {/* Background with blur */}
          <div className="absolute inset-0 bg-[#0a1426]/60 backdrop-blur-md border border-cyan-500/30 group-hover:border-cyan-400/80 transition-colors duration-500"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.2)_0%,_transparent_70%)] transition-opacity duration-500"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <span className="relative z-10 text-white tracking-[0.2em] md:tracking-[0.3em] pl-[0.2em] md:pl-[0.3em] text-sm md:text-base font-medium group-hover:text-cyan-100 transition-all duration-300 block text-center">
            차원 접속 시작
          </span>
        </motion.button>
      </div>
    </div>
  );
}
