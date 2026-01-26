'use client';

import React from 'react';

export const Footer = () => (
    <footer className="w-full py-12 bg-black border-t border-white/5 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl text-white mb-4">ZAID HAROON</span>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Zaid Haroon Real Estate. SRI Pte Ltd. All Rights Reserved.
        </p>
    </footer>
);
