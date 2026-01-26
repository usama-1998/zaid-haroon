'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import { PremiumButton } from '../shared';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                >
                    <div className="absolute inset-0" onClick={onClose} />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="w-full max-w-lg relative bg-[#0a0a0a] border border-yellow-500/30 rounded-lg overflow-hidden flex flex-col shadow-[0_0_100px_rgba(234,179,8,0.1)]"
                    >
                        {/* Golden Gradient Top Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />

                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

                        <div className="relative z-10 p-10 flex flex-col items-center text-center">
                            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-16 h-16 rounded-full border border-yellow-500/50 flex items-center justify-center mb-6 bg-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                <Award className="w-8 h-8 text-yellow-500" />
                            </div>

                            <h2 className="text-3xl font-serif text-white mb-2">Priority Access</h2>
                            <p className="text-gray-400 text-sm mb-8 max-w-xs mx-auto">
                                You are requesting a strategy session with Zaid Haroon's private office.
                            </p>

                            <div className="w-full space-y-4">
                                <div>
                                    <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors" />
                                </div>
                                <div className="flex gap-4">
                                    <input type="text" placeholder="+65 Mobile" className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors" />
                                </div>

                                <PremiumButton className="w-full py-4 text-sm mt-4">
                                    Request Invitation
                                </PremiumButton>
                            </div>

                            <p className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest">
                                Limited Availability • Q1 2026
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
