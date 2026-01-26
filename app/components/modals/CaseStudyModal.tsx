'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PremiumButton } from '../shared';

interface CaseStudyData {
    id: string;
    category: string;
    title: string;
    problem: string;
    result: string;
    image: string;
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: CaseStudyData | null;
}

export const CaseStudyModal = ({ isOpen, onClose, data }: CaseStudyModalProps) => (
    <AnimatePresence>
        {isOpen && data && (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
            >
                <div className="absolute inset-0 bg-black/50" onClick={onClose} />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-4xl h-[90vh] md:h-auto md:aspect-[16/9] bg-[#0a0a0a] border border-white/10 relative rounded-sm shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"><X className="w-6 h-6" /></button>

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-8 left-8 z-20">
                            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">{data.category}</span>
                            <h3 className="text-3xl md:text-4xl font-serif text-white">{data.title}</h3>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-red-500" /> The Problem
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed">{data.problem}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-yellow-500" /> The Strategy
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    We implemented a precision-timed decoupling strategy to unlock CPF funds and avoid ABSD, then leveraged <span className="text-white">asset styling</span> to achieve a record-price exit.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-green-500" /> The Result
                                </h4>
                                <p className="text-2xl font-serif text-white">{data.result}</p>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <PremiumButton onClick={onClose} className="w-full text-xs">Analyze Similar Cases</PremiumButton>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
