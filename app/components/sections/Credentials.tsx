'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../shared';

const StatMinimal = ({ value, label, delay }: { value: string, label: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center group cursor-default"
    >
        <div className="relative">
            <h3 className="text-7xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 font-medium tracking-tighter transition-all duration-500 group-hover:scale-105">
                {value}
            </h3>
            <div className="absolute -inset-4 bg-yellow-500/0 group-hover:bg-yellow-500/5 blur-3xl transition-colors duration-500 rounded-full" />
        </div>
        <div className="mt-6 flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-yellow-500 to-transparent mb-4 opacity-50 group-hover:h-12 transition-all duration-500" />
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 group-hover:text-yellow-500 transition-colors">
                {label}
            </p>
        </div>
    </motion.div>
);

export const Credentials = () => {
    return (
        <Section className="bg-[#050505] min-h-[60vh] py-20 flex items-center justify-center border-b border-white/5">
            <div className="w-full max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 items-baseline">
                    <StatMinimal value="#01" label="SRI Top Achiever" delay={0} />
                    <StatMinimal value="280k" label="Monthly Commission" delay={0.2} />
                    <StatMinimal value="15Y" label="Market Tenure" delay={0.4} />
                </div>
            </div>
        </Section>
    );
};
