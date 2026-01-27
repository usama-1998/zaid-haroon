'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, PremiumButton } from '../shared';

interface BlueprintStepProps {
    number: string;
    title: string;
    desc: string;
    isActive: boolean;
    onSelect: () => void;
}

const BlueprintStep = ({ number, title, desc, isActive, onSelect }: BlueprintStepProps) => (
    <motion.div
        onClick={onSelect}
        className={`relative pl-8 md:pl-12 border-l-2 transition-colors duration-500 cursor-pointer ${isActive ? 'border-yellow-500' : 'border-white/10'}`}
    >
        <div className="flex flex-col gap-2 relative z-10">
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isActive ? 'text-yellow-500' : 'text-gray-600'}`}>Step {number}</span>
            <h3 className={`text-2xl md:text-3xl font-serif transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>{title}</h3>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg font-light pt-2 pb-6">{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Progress Bar for Active Step */}
        {isActive && (
            <motion.div
                className="absolute left-[-2px] top-0 w-[2px] bg-yellow-500 h-full origin-top z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 5, ease: "linear" }}
            />
        )}
    </motion.div>
);

interface MethodologyProps {
    onOpenContact: () => void;
}

export const Methodology = ({ onOpenContact }: MethodologyProps) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Section id="blueprint" className="bg-[#050505] py-24 overflow-hidden">
            {/* Animated Radar Grid */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            <div className="w-full max-w-7xl relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-center">

                <div className="w-full md:w-1/2 aspect-square relative border border-white/10 bg-[#080808]/80 backdrop-blur-sm rounded-xl overflow-hidden group shadow-[0_0_50px_rgba(234,179,8,0.05)] p-8 flex flex-col">
                    {/* Background Grid */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Chart Container */}
                    <div className="relative z-10 flex-1 w-full h-full">
                        <svg className="absolute inset-0 w-full h-full overflow-visible z-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {/* Market Average (Dashed) */}
                            <path d="M0,90 Q50,85 100,80" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="2,2" />

                            {/* The Wealth Curve (Gold) */}
                            <motion.path
                                d="M0,90 C30,85 40,60 100,10"
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                filter="url(#glow)"
                            />
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Hover Interaction Points (Invisible Hit Targets) */}
                            <rect x="0" y="0" width="33" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(0)}
                                className="cursor-pointer"
                            />
                            <rect x="33" y="0" width="33" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(1)}
                                className="cursor-pointer"
                            />
                            <rect x="66" y="0" width="34" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(2)}
                                className="cursor-pointer"
                            />

                            {/* Active Point Indicator - MINIMALIST DOT */}
                            <motion.circle
                                animate={{
                                    cx: activeStep === 0 ? 5 : activeStep === 1 ? 40 : 95,
                                    cy: activeStep === 0 ? 88 : activeStep === 1 ? 60 : 10
                                }}
                                r="2.5"
                                fill="#000"
                                stroke="#EAB308"
                                strokeWidth="1.5"
                                className="drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
                            />
                        </svg>

                        {/* Floating Details Card (Heads Up Display) */}
                        <div className="absolute top-4 left-4 z-30">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-[10px] text-yellow-500 font-mono uppercase tracking-widest mb-1 block">
                                        Phase {activeStep + 1}
                                    </span>
                                    <h3 className="text-xl text-white font-serif leading-none mb-1">
                                        {activeStep === 0 ? "35-Year Roadmap" : activeStep === 1 ? "Portfolio Arch." : "Strict Execution"}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 font-mono">
                                        {activeStep === 0 ? "Projecting 2050 Needs" : activeStep === 1 ? "Compounding Assets" : "Target: $2.4M Exit"}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Projection Model</span>
                    </div>

                    <div className="absolute bottom-6 right-6 text-right">
                        <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Your projected wealth over the next 5 years</span>
                    </div>
                </div>

                {/* Right: The Text - Auto-Playing List */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="mb-8">
                        <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">The Blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Reverse Engineering <br />Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-600">Wealth.</span>
                        </h2>
                    </div>

                    <BlueprintStep
                        number="01"
                        title="The 35-Year Roadmap"
                        desc="We don't start with property. We start with the end in mind. We calculate exactly what you need in 2050, then we build the mathematical bridge to cross that gap."
                        isActive={activeStep === 0}
                        onSelect={() => setActiveStep(0)}
                    />
                    <BlueprintStep
                        number="02"
                        title="Portfolio Architecture"
                        desc="Moving beyond 'buy and sell'. We structure your assets to compound. Your HDB is not a home; it is the first domino in a chain reaction designed to fund your future."
                        isActive={activeStep === 1}
                        onSelect={() => setActiveStep(1)}
                    />
                    <BlueprintStep
                        number="03"
                        title="Strict Execution"
                        desc="Plans fail without discipline. We execute with military precision, adjusting for market cycles, interest rates, and regulations to keep you on track to $2M."
                        isActive={activeStep === 2}
                        onSelect={() => setActiveStep(2)}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <PremiumButton onClick={onOpenContact}>Start Your Blueprint</PremiumButton>
                    </motion.div>
                </div>
            </div >
        </Section >
    );
};
