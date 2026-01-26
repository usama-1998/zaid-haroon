'use client';

import React from 'react';
import { cn } from '../utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
    <section id={id} className={cn("relative w-full px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center", className)}>
        {children}
    </section>
);
