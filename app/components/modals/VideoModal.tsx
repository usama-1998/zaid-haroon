'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { VIDEO_ID } from '../utils';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const VideoModal = ({ isOpen, onClose }: VideoModalProps) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            >
                <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X className="w-8 h-8" /></button>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                >
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`} title="Story Video" frameBorder="0" allowFullScreen></iframe>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);
