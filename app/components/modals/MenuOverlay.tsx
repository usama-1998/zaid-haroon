'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PremiumButton } from '../shared';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenContact: () => void;
}

export const MenuOverlay = ({ isOpen, onClose, onOpenContact }: MenuOverlayProps) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: "spring", damping: 30 }}
                className="fixed inset-0 z-[90] bg-[#050505] flex flex-col items-center justify-center"
            >
                <button onClick={onClose} className="absolute top-8 right-8 text-white hover:text-yellow-500 transition-colors">
                    <X className="w-10 h-10" />
                </button>
                <nav className="flex flex-col gap-8 text-center">
                    {[
                        { name: 'The Blueprint', link: '#blueprint' },
                        { name: 'Case Studies', link: '#case-studies' },
                        { name: 'About Zaid', link: '#profile' },
                        { name: 'Resources', link: '#resources' }
                    ].map((item, i) => (
                        <motion.a
                            key={item.name} href={item.link} onClick={onClose}
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                            className="text-4xl md:text-6xl font-serif text-white hover:text-yellow-500 transition-colors"
                        >
                            {item.name}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                        className="mt-8"
                    >
                        <PremiumButton onClick={() => { onClose(); onOpenContact(); }} variant="secondary">
                            Book Consultation
                        </PremiumButton>
                    </motion.div>
                </nav>
            </motion.div>
        )}
    </AnimatePresence>
);
