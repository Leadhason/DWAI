import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { AudioSample } from '../types';

interface AudioPlayerProps {
  sample: AudioSample;
  isActive: boolean;
  onPlay: (id: string) => void;
  onStop: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ sample, isActive, onPlay, onStop }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const isPlayingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const initAudio = () => {
    if (audioContextRef.current || !audioRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      
      // Optimizing for speech visualization
      analyser.fftSize = 256; 
      analyser.smoothingTimeConstant = 0.8;

      const audio = audioRef.current;
      // Handle CORS for audio visualization. 
      // If the server does not support CORS, it will fall back to simulation mode in the catch block.
      audio.crossOrigin = "anonymous"; 

      const source = ctx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
    } catch (err) {
      console.warn("AudioContext init error (likely CORS): Switching to simulation", err);
      setHasError(true);
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // 1. IDLE STATE: Breathing Line
    // Even when not playing, we show a "ready" state
    if (!isPlayingRef.current) {
        const time = Date.now() / 1000;
        const pulse = Math.sin(time * 2); // -1 to 1
        // Opacity oscillates between 0.2 and 0.5
        const opacity = 0.3 + (pulse * 0.1); 
        
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.strokeStyle = `rgba(247, 140, 54, ${opacity})`; // Driftwood Orange
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Continue loop for breathing animation
        animationRef.current = requestAnimationFrame(draw);
        return;
    }

    // 2. ACTIVE STATE: Mirrored Waveform
    let dataArray: Uint8Array;
    let bufferLength: number;

    if (analyserRef.current && !hasError && audioContextRef.current?.state === 'running') {
       bufferLength = analyserRef.current.frequencyBinCount;
       dataArray = new Uint8Array(bufferLength);
       analyserRef.current.getByteFrequencyData(dataArray);
    } else {
       // Simulation Mode (Fallback)
       bufferLength = 32;
       dataArray = new Uint8Array(bufferLength);
       const time = Date.now() / 150;
       for(let i=0; i<bufferLength; i++) {
           // Randomized sine waves to mimic speech patterns
           const val = Math.abs(Math.sin(i * 0.2 + time)) * 150 + (Math.random() * 50);
           dataArray[i] = val;
       }
    }

    // Drawing Config
    // We only use a subset of lower frequencies for speech to look good (approx 70%)
    const relevantDataLength = Math.floor(bufferLength * 0.7); 
    const barWidth = (width / relevantDataLength) * 1.2; // Adjust spacing
    let x = 0;

    // Apply Glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(247, 140, 54, 0.4)";
    ctx.fillStyle = "#F78C36"; // Primary Accent

    for (let i = 0; i < relevantDataLength; i++) {
        const value = dataArray[i];
        const percent = value / 255;
        
        // Scale height (non-linear for more dramatic effect)
        const barHeight = Math.max(2, Math.pow(percent, 1.8) * height); 

        // Draw mirrored bar (Voice Assistant Style)
        // x, y, w, h
        ctx.fillRect(x, centerY - (barHeight / 2), barWidth - 1, barHeight);
        
        x += barWidth;
    }
    
    // Reset shadow to avoid compounding heavy render costs
    ctx.shadowBlur = 0;

    animationRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
      if (isActive) {
          if (!audioContextRef.current) initAudio();
          if (audioContextRef.current?.state === 'suspended') audioContextRef.current.resume();
          
          audioRef.current?.play()
            .then(() => setIsPlaying(true))
            .catch(e => {
                console.error("Playback failed", e);
                onStop();
            });
      } else {
          audioRef.current?.pause();
          if (audioRef.current) audioRef.current.currentTime = 0;
          setIsPlaying(false);
      }
  }, [isActive]);

  // Start animation loop immediately for idle state visualization
  useEffect(() => {
      animationRef.current = requestAnimationFrame(draw);
      return () => {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
      }
  }, []);

  // Resize handling
  useEffect(() => {
      const handleResize = () => {
          if (containerRef.current && canvasRef.current) {
              // Match canvas resolution to display size for sharp rendering
              canvasRef.current.width = containerRef.current.offsetWidth;
              canvasRef.current.height = containerRef.current.offsetHeight;
          }
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
      if (isActive) {
          onStop();
      } else {
          onPlay(sample.id);
      }
  };

  return (
    <div 
      className={`
        relative rounded-xl border transition-all duration-500 overflow-hidden
        flex flex-col justify-between p-6
        ${isActive 
            ? 'border-driftwood-orange bg-driftwood-light-surface dark:bg-driftwood-dark-surface shadow-[0_0_30px_rgba(247,140,54,0.15)] scale-[1.02]' 
            : 'border-driftwood-light-border dark:border-driftwood-dark-border bg-driftwood-light-surface dark:bg-driftwood-dark-surface hover:shadow-lg hover:-translate-y-1'
        }
      `}
    >
      <audio ref={audioRef} src={sample.src} onEnded={onStop} crossOrigin="anonymous" />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
           <div className="inline-block mb-2">
             <span className="font-mono text-[10px] md:text-xs text-driftwood-orange bg-driftwood-orange/10 px-2 py-1 rounded border border-driftwood-orange/20">
               [{sample.label}]
             </span>
           </div>
           <h3 className="text-lg md:text-xl font-bold text-driftwood-dark-bg dark:text-white font-sans">
             {sample.title}
           </h3>
        </div>
        
        <button
            onClick={handleToggle}
            className={`
                flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-driftwood-orange focus:ring-offset-2 dark:focus:ring-offset-driftwood-dark-bg
                ${isActive 
                    ? 'bg-driftwood-orange text-white shadow-[0_0_15px_rgba(247,140,54,0.4)] scale-110' 
                    : 'bg-driftwood-light-bg dark:bg-driftwood-dark-bg border border-driftwood-light-border dark:border-driftwood-dark-border text-driftwood-light-text dark:text-driftwood-dark-text hover:border-driftwood-orange hover:text-driftwood-orange'
                }
            `}
            aria-label={isActive ? "Pause" : "Play"}
        >
            {isActive ? (
                <Pause size={20} fill="currentColor" />
            ) : (
                <Play size={20} fill="currentColor" className="ml-1" />
            )}
        </button>
      </div>

      <p className="text-sm text-driftwood-light-text dark:text-driftwood-dark-text mb-8 min-h-[3rem] relative z-10">
        {sample.description}
      </p>

      <div 
        ref={containerRef} 
        className="relative h-20 w-full mt-auto bg-black/5 dark:bg-black/20 rounded-lg overflow-hidden border border-driftwood-light-border dark:border-driftwood-dark-border"
      >
        <canvas 
            ref={canvasRef}
            className="w-full h-full block"
        />
        {/* Tech grid overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
      </div>
    </div>
  );
};