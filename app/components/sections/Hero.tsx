'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { PremiumButton } from '../shared';

interface HeroProps {
    onOpenVideo: () => void;
    onOpenContact: () => void;
}

export const Hero = ({ onOpenVideo, onOpenContact }: HeroProps) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center border-b border-white/5">
            {/* Bespoke Architectural Lines - Frame */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 p-6 md:p-12">
                {/* Top Left */}
                <div className="absolute top-8 left-8 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <div className="h-px w-12 bg-white/10" />
                    <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">SG • Est. 2010</span>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-8 left-8 hidden md:block">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-white/20 -rotate-90 origin-bottom-left translate-x-3">CONFIDENTIAL</span>
                        <div className="w-px h-24 bg-gradient-to-t from-white/20 to-transparent" />
                    </div>
                </div>

                {/* Bottom Right - Coordinates */}
                <div className="absolute bottom-8 right-8 text-right hidden md:block">
                    <p className="font-mono text-[10px] text-white/30 tracking-widest">
                        1.3521° N / 103.8198° E<br />
                        SRI PTE LTD
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-black/60 z-10" />
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"
            />

            <div className="z-20 container mx-auto px-4 relative flex flex-col items-center justify-center h-full text-center">

                <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-medium tracking-tighter mix-blend-difference text-white mb-8 relative">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute top-1/2 left-0 h-px bg-white/10 -translate-y-1/2 w-full" />

                    <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="block">
                        ZAID
                    </motion.span>
                    <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        HAROON
                    </motion.span>
                </h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed mb-10">
                    The First Muslim Agent to Rank #1 at SRI. <br />
                    Building wealth portfolios, not just selling homes.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="flex flex-col md:flex-row items-center gap-6">
                    <PremiumButton onClick={onOpenContact}>
                        Start Consultation
                    </PremiumButton>

                    <button onClick={onOpenVideo} className="flex items-center gap-3 group px-4 py-2 border border-transparent hover:border-white/10 rounded-full transition-all">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <Play className="w-3 h-3 fill-white group-hover:fill-black group-hover:text-black transition-colors" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Watch Story</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
