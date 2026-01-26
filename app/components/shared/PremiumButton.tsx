'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils';

interface PremiumButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
}

export const PremiumButton = ({ children, onClick, className = "", variant = "primary" }: PremiumButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest overflow-hidden transition-shadow duration-300",
                variant === "primary" ? "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "bg-transparent border border-white/20 text-white hover:border-white/40",
                className
            )}
        >
            <span className={cn("relative z-10 transition-colors duration-300 flex items-center gap-2", variant === "primary" ? "group-hover:text-white" : "group-hover:text-black")}>
                {children}
            </span>
            <div className={cn(
                "absolute inset-0 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom",
                variant === "primary" ? "bg-yellow-600" : "bg-white"
            )} />
        </motion.button>
    );
};
