'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section, GridBackground, RevealText } from '../shared';

const CrisisGraph = () => {
    return (
        <div className="relative w-full h-[400px] bg-[#0F0F0F] rounded-lg border border-white/5 p-6 flex flex-col justify-between overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                initial={{ backgroundPosition: "0px 0px" }}
                animate={{ backgroundPosition: "-40px -40px" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="flex justify-between items-start z-10">
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Projection Model</span>
                    <h4 className="text-white font-mono text-lg">Asset Progression</h4>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div><span className="text-[10px] text-gray-500 uppercase">Default</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div><span className="text-[10px] text-gray-500 uppercase">Strategy</span></div>
                </div>
            </div>

            <div className="relative h-64 w-full mt-4 z-10 flex items-end px-2">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path d="M0,200 C50,180 100,150 150,180 C200,210 250,230 350,250" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                    <motion.path d="M0,200 C50,180 100,100 200,80 C300,50 350,20 400,10" fill="none" stroke="#10B981" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} />
                    <motion.path d="M0,200 C50,180 100,100 200,80 C300,50 350,20 400,10 V250 H0 Z" fill="url(#gradientEmerald)" className="opacity-20" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} transition={{ duration: 1, delay: 1 }} />
                    <defs>
                        <linearGradient id="gradientEmerald" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute right-0 top-0 bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded text-xs font-mono font-bold">$2,000,000</motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute right-10 bottom-0 bg-red-900/30 border border-red-500/30 text-red-400 px-3 py-1 rounded text-xs font-mono font-bold">Depleted CPF</motion.div>
            </div>
        </div>
    );
}

interface RealityCheckProps {
    onOpenContact: () => void;
}

export const RealityCheck = ({ onOpenContact }: RealityCheckProps) => {
    return (
        <Section className="bg-[#050505] text-white min-h-[90vh] overflow-hidden">
            <GridBackground />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full max-w-7xl relative z-10 items-center">
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <RevealText>
                        <div className="inline-flex items-center gap-2 mb-6 border border-red-500/30 bg-red-900/10 px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                            <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Market Reality</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
                            The Silent <br /> <span className="text-white">Crisis.</span>
                        </h2>
                    </RevealText>
                    <RevealText delay={0.2}>
                        <p className="text-xl text-gray-300 font-light mb-6">
                            It starts with a comfortable salary and ends with a depleted CPF. This is the <span className="text-red-400 font-medium">Retirement Paradox</span>.
                        </p>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 mb-8">
                            <p>The scenario is all too common: 40 years of hard work, yet facing age 65 with a zero-balance sheet. The "Grab Driver" future isn't a lack of effort—it's a lack of <span className="text-white">strategy</span>.</p>
                            <p>Most agents sell you a home for today's comfort. I engineer your exit for tomorrow's freedom. We don't hope for retirement; we mathematically guarantee it.</p>
                        </div>

                        <button onClick={onOpenContact} className="group flex items-center gap-2 text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors">
                            <span className="uppercase tracking-widest text-sm font-bold">See The Math</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </RevealText>
                </div>
                <div className="order-1 md:order-2"><CrisisGraph /></div>
            </div>
        </Section>
    );
};
