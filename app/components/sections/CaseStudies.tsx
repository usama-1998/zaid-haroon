'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../shared';
import { CaseStudyModal } from '../modals';

const CASE_STUDIES = [
    {
        id: "01",
        category: "HDB Upgrader",
        title: "The 5-Year Pivot",
        problem: "Stuck in stagnant resale flat.",
        result: "+$450K Asset Growth",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "02",
        category: "Investor",
        title: "Decoupling Strategy",
        problem: "High ABSD barrier entry.",
        result: "Saved $112K in Tax",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        category: "Retiree",
        title: "Right-Sizing Legacy",
        problem: "Asset rich, cash poor.",
        result: "$5K/mo Passive Income",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "04",
        category: "First Home",
        title: "Entry Level Prime",
        problem: "Priced out of OCR.",
        result: "Secured Undervalued D15",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "05",
        category: "Legacy",
        title: "Multi-Gen Wealth",
        problem: "Passing assets efficiently.",
        result: "Trust Structure Setup",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "06",
        category: "HDB Upgrader",
        title: "The 5-Year Pivot",
        problem: "Stuck in stagnant resale flat.",
        result: "+$450K Asset Growth",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
];

export const CaseStudies = () => {
    const marqueeItems = [...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES];
    const [selectedStudy, setSelectedStudy] = useState<typeof CASE_STUDIES[0] | null>(null);

    return (
        <Section id="case-studies" className="bg-[#050505] min-h-[50vh] flex flex-col justify-center overflow-hidden py-16 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4 block">Proven Results</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Case Studies</h2>
                    <p className="text-gray-400 max-w-2xl font-light">Real scenarios. Real numbers. The application of the blueprint in live market conditions.</p>
                </div>

                <div className="flex w-full overflow-hidden mask-linear-fade relative">
                    <motion.div
                        className="flex gap-8 px-4 relative"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {/* Wavy Connection Line - BACKGROUND */}
                        <div className="absolute inset-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            <svg className="w-full h-[400px] -translate-y-1/2 opacity-30" preserveAspectRatio="none">
                                {[0, 1, 2, 3, 4].map((lineIndex) => (
                                    <path
                                        key={lineIndex}
                                        d={`M 0 ${100 + (lineIndex * 20)} 
                                            ${marqueeItems.map((_, i) => {
                                            const x = (i * 432) + 200;
                                            const baseY = 100 + (lineIndex * 20);
                                            const amplitude = 50 + (lineIndex * 10);
                                            const y = i % 2 === 0 ? baseY - amplitude : baseY + amplitude;
                                            return `Q ${x - 100} ${y} ${x} ${baseY} T ${x + 216} ${baseY}`;
                                        }).join(" ")}`}
                                        fill="none"
                                        stroke="#EAB308"
                                        strokeWidth={lineIndex === 2 ? 1.5 : 0.5}
                                        opacity={0.3 + (lineIndex * 0.1)}
                                        className="drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]"
                                    />
                                ))}
                            </svg>
                        </div>

                        {marqueeItems.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="w-[300px] md:w-[400px] flex-shrink-0 h-[500px] bg-[#111] overflow-hidden rounded-sm border border-white/5 relative group hover:border-yellow-500/50 transition-all duration-500 cursor-pointer z-10"
                                onClick={() => setSelectedStudy(item)}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-20 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="mb-auto flex justify-between items-start">
                                        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                                            <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-yellow-500 transition-colors" />
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-serif text-white mb-4 italic">{item.title}</h3>

                                        <div className="mt-4 opacity-100 transition-opacity duration-300 space-y-2">
                                            <div>
                                                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Problem</span>
                                                <p className="text-sm text-gray-300 font-light line-clamp-1">{item.problem}</p>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-green-500 uppercase tracking-widest">Outcome</span>
                                                <p className="text-lg text-white font-medium">{item.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <CaseStudyModal isOpen={!!selectedStudy} onClose={() => setSelectedStudy(null)} data={selectedStudy} />
        </Section>
    );
};
