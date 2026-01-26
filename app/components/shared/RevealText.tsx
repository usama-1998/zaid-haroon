'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const RevealText = ({ children, delay = 0, className = "" }: RevealTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
        >
            {children}
        </motion.div>
    );
};
