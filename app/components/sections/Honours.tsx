'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, RevealText } from '../shared';

export const Honours = () => {
    return (
        <Section id="honours" className="bg-[#050505] py-14 relative flex items-center justify-center">
            {/* Dark Luxury Particles/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.02),transparent_70%)]" />

            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
                    {/* SRI Logo Above Title */}
                    <img src="/sri-logo.png" alt="SRI" className="h-12 md:h-16 w-auto object-contain mx-auto mb-6 brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-700" />

                    <RevealText>
                        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                            No. 1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 italic">Top Achiever</span>
                        </h2>
                    </RevealText>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 w-full">
                    {[
                        { img: "/seals/award img 1.webp", title: "SRI Billion Dollar Club" },
                        { img: "/seals/award img 2.webp", title: "SRI Millionaire Achiever" },
                        { img: "/seals/award img 3.webp", title: "SRI #01 Top Achiever" },
                        { img: "/seals/award img 4.webp", title: "SRI Largest Transaction" }
                    ].map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="flex flex-col items-center group relative"
                        >
                            {/* Award Image Container */}
                            <div className="relative w-36 h-36 md:w-48 md:h-48 mb-8 flex items-center justify-center">

                                {/* Inner Circle Background */}
                                <div className="relative w-full h-full rounded-full bg-black border border-white/5 overflow-hidden group-hover:border-yellow-500/30 transition-colors duration-500 box-border z-10 p-1">

                                    {/* Inner Glow Gradient */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Image Container */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full rounded-full overflow-hidden relative z-20 bg-black"
                                    >
                                        <img
                                            src={award.img}
                                            alt={award.title}
                                            className="w-full h-full object-cover filter brightness-100 contrast-100 group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                                        />
                                        {/* Glass Sheen */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </motion.div>
                                </div>
                            </div>

                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-yellow-500 transition-colors duration-500 text-center transform group-hover:translate-y-[-5px]">
                                {award.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
