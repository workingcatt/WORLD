import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface WarpTransitionProps {
  onComplete: () => void;
}

export function WarpTransition({ onComplete }: WarpTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden pointer-events-none perspective-[1000px]">
      
      {/* Background that zooms in immensely */}
      <motion.div 
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 10, opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, ease: "easeIn" }}
        className="absolute inset-0"
      >
         <img src="https://working-cat.org/SITE/WORLD%20BACK.png" alt="space" className="w-full h-full object-cover" />
      </motion.div>
      
      {/* Dimensional streaks (hyperdrive effect) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 6 }}
        transition={{ duration: 2.2, ease: "easeIn" }}
        className="absolute inset-0 flex items-center justify-center"
      >
         <div className="w-64 h-64 rounded-full border-[20px] border-cyan-400 blur-[4px] opacity-80" style={{ boxShadow: 'inset 0 0 50px #22d3ee, 0 0 50px #22d3ee' }}></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: 8 }}
        transition={{ delay: 0.3, duration: 2.2, ease: "easeIn" }}
        className="absolute inset-0 flex items-center justify-center"
      >
         <div className="w-96 h-96 rounded-full border-[10px] border-white blur-[2px] opacity-60"></div>
      </motion.div>

      {/* Dimensional flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.8, duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-white"
      />
    </div>
  );
}
