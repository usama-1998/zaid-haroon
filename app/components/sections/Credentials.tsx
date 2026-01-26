'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

export const Credentials = () => {
    return (
        <section className="bg-[#050505] py-8 flex items-center justify-center">
            <div className="w-full max-w-4xl px-6 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    <StatMinimal value="#01" label="SRI Top Achiever" delay={0} />
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <StatMinimal value="280k" label="Monthly Commission" delay={0.1} />
                    <div className="hidden md:block w-px h-6 bg-white/10" />
                    <StatMinimal value="15Y" label="Market Tenure" delay={0.2} />
                </div>
            </div>
        </section>
    );
};
