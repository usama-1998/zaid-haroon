'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, RevealText, PremiumButton } from '../shared';

interface CTAProps {
    onOpenContact: () => void;
}

const StatMinimal = ({ value, label, delay }: { value: string, label: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 group cursor-default"
    >
        <h3 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-medium tracking-tighter transition-all duration-500 group-hover:scale-105">
            {value}
        </h3>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 group-hover:text-yellow-500 transition-colors">
            {label}
        </p>
    </motion.div>
);

export const CTA = ({ onOpenContact }: CTAProps) => {
    return (
        <Section className="bg-[#050505] text-white py-24 relative overflow-hidden flex items-center justify-center border-t border-white/10">
            {/* Background Image - Similar to Hero */}
            <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1485628390568-3737df57b5a8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20" />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.5)_0%,_#050505_100%)] z-10" />

            <div className="absolute top-12 left-12 w-32 h-32 border-l border-t border-white/20 opacity-50 z-10" />
            <div className="absolute bottom-12 right-12 w-32 h-32 border-r border-b border-white/20 opacity-50 z-10" />

            {/* Giant Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-signature text-[20vw] text-white/5 whitespace-nowrap z-0 pointer-events-none select-none">
                Zaid Haroon
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto text-center p-12 md:p-20 border border-white/5 bg-black/50 backdrop-blur-sm rounded-sm flex flex-col items-center">
                {/* Stats Row - Above Title */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
                    <StatMinimal value="#01" label="SRI Top Achiever" delay={0} />
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <StatMinimal value="280k" label="Monthly Commission" delay={0.1} />
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <StatMinimal value="15Y" label="Market Tenure" delay={0.2} />
                </div>

                <RevealText>
                    <h2 className="text-5xl md:text-8xl font-serif mb-4 tracking-tight text-white mix-blend-difference drop-shadow-2xl">
                        Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 italic">Legacy.</span>
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed max-w-xl mx-auto font-light text-lg">
                        The window of opportunity in Singapore real estate is narrow. Strategy is the only leverage. Let's build your $2M roadmap.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <PremiumButton onClick={onOpenContact} className="px-12 py-6 text-base w-full md:w-auto">
                            Initiate Strategy Session <ArrowRight className="w-5 h-5" />
                        </PremiumButton>
                        <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">or WhatsApp Direct</span>
                    </div>
                </RevealText>
            </div>
        </Section>
    );
};
