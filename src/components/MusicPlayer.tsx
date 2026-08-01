import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  src: string;
}

export function MusicPlayer({ src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  // Attempt autoplay on mount (might be blocked by browser)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        // Autoplay blocked, wait for user interaction
        console.log("Autoplay blocked. User needs to interact.");
      });
    }
  }, []);

  return (
    <div 
      className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-center gap-2 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Better mobile support
    >
      <audio ref={audioRef} src={src} loop />
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg relative ${
          isHovered ? 'h-32 w-10 opacity-100 py-3 mb-1' : 'h-0 w-10 opacity-0 py-0 border-transparent mb-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full outline-none transform -rotate-90 origin-center"
          />
        </div>
      </div>

      <button 
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] focus:outline-none"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
}
