'use client';

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Terminal, Award } from 'lucide-react';
import { Section, RevealText, PremiumButton } from '../shared';

export const FreeResource = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [10, 30]);

    return (
        <Section id="resources" className="bg-[#111] overflow-hidden min-h-[90vh] py-24 flex items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,215,0,0.03),transparent_70%)]" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-4">
                <div className="order-2 md:order-1 relative z-10">
                    <RevealText>
                        <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4 block">Confidential Strategy</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            The $2,000,000 <br />Protocol.
                        </h2>
                        <p className="text-gray-400 mb-10 max-w-md leading-relaxed font-light">
                            This isn't a brochure. It's the mathematical framework I use to engineer wealth. Access the exact roadmap used by my Top 1% clients.
                        </p>

                        <div className="bg-white/5 border border-white/10 p-2 flex flex-col md:flex-row gap-2 max-w-lg rounded-sm">
                            <div className="flex-1 flex items-center px-4">
                                <Terminal className="w-4 h-4 text-gray-500 mr-3" />
                                <input type="email" placeholder="ENTER_ACCESS_EMAIL" className="bg-transparent text-white w-full outline-none font-mono text-sm placeholder-gray-600 h-12" />
                            </div>
                            <PremiumButton className="text-xs px-6 py-3">Decrypt</PremiumButton>
                        </div>
                        <p className="font-mono text-[10px] text-gray-600 mt-4 uppercase"><span className="text-green-500">●</span> Secure Transmission 256-Bit</p>
                    </RevealText>
                </div>

                {/* 3D Floating Book with Idle Animation */}
                <div className="order-1 md:order-2 flex justify-center items-center perspective-1000 h-[600px] w-full" onMouseMove={handleMouseMove}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        animate={{ y: [0, -15, 0], rotateZ: 5 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-[380px] h-[550px] group cursor-pointer"
                    >
                        {/* Front Cover */}
                        <div className="absolute inset-0 bg-[#080808] border border-yellow-500/30 rounded-r-sm shadow-[20px_20px_50px_rgba(0,0,0,0.5)] flex flex-col p-10 backface-hidden" style={{ transform: "translateZ(30px)" }}>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay" />
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            <div className="mt-8 relative z-20">
                                <div className="w-10 h-10 rounded-full border border-yellow-500/50 flex items-center justify-center mb-6"><Award className="w-5 h-5 text-yellow-500" /></div>
                                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Classified</span>
                                <span className="font-serif text-5xl text-white leading-[0.9]">Wealth<br />Architecture</span>
                            </div>
                            <div className="mt-auto text-right relative z-20">
                                <span className="font-serif text-8xl text-white/5 font-bold block leading-none">01</span>
                                <span className="font-mono text-[10px] text-yellow-500 uppercase tracking-[0.3em]">Edition</span>
                            </div>
                            {/* Hover Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />
                        </div>

                        {/* Back Cover */}
                        <div className="absolute inset-0 bg-[#080808] border border-white/5 rounded-l-sm" style={{ transform: "translateZ(-30px) rotateY(180deg)" }} />

                        {/* Spine (Left) */}
                        <div className="absolute top-0 bottom-0 w-[60px] bg-[#030303] border-l border-r border-white/5 flex items-center justify-center" style={{ transform: "rotateY(-90deg) translateZ(30px)", left: 0 }}>
                            <span className="rotate-90 whitespace-nowrap text-xs font-mono text-yellow-600/50 uppercase tracking-[0.2em] w-full text-center">Confidential</span>
                        </div>

                        {/* Pages (Right) */}
                        <div className="absolute top-2 bottom-2 w-[58px] bg-[#e3e3e3]" style={{ transform: "rotateY(90deg) translateZ(348px)", right: 0, backgroundImage: "linear-gradient(to right, #ccc 1px, transparent 1px)", backgroundSize: "3px 100%" }} />

                        {/* Pages (Top) */}
                        <div className="absolute left-0 right-0 h-[58px] bg-[#1a1a1a]" style={{ transform: "rotateX(90deg) translateZ(30px)", top: 0, backgroundImage: "linear-gradient(to bottom, #333 1px, transparent 1px)", backgroundSize: "100% 3px" }} />

                        {/* Pages (Bottom) */}
                        <div className="absolute left-0 right-0 h-[58px] bg-[#e3e3e3]" style={{ transform: "rotateX(-90deg) translateZ(518px)", bottom: 0, backgroundImage: "linear-gradient(to bottom, #ccc 1px, transparent 1px)", backgroundSize: "100% 3px" }} />

                        {/* Shadow */}
                        <div className="absolute -bottom-16 left-10 right-10 h-4 bg-black/50 blur-xl rounded-[100%]" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
