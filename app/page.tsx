'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence, useMotionValue } from 'framer-motion';
import {
    ArrowRight,
    Award,
    ChevronDown,
    Quote,
    Play,
    X,
    Terminal,
    Menu,
    ArrowUpRight,
    MessageCircle,
    Linkedin
} from 'lucide-react';
import Link from 'next/link';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------------------------------- */
/* UTILITIES                                 */
/* -------------------------------------------------------------------------- */

const DEMO_AGENT_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2144&auto=format&fit=crop";
const VIDEO_ID = "HVPZVThbN7s";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

const NoiseOverlay = () => (
    <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
            <filter id='noiseFilter'>
                <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
    </div>
);

const GridBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
);

const RevealText = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
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

const PremiumButton = ({ children, onClick, className = "", variant = "primary" }: { children: React.ReactNode, onClick?: () => void, className?: string, variant?: "primary" | "secondary" }) => {
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

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("relative w-full px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center", className)}>
        {children}
    </section>
);

/* -------------------------------------------------------------------------- */
/* MODALS (VIDEO, CONTACT, MENU)                        */
/* -------------------------------------------------------------------------- */

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
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

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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

const CaseStudyModal = ({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: any }) => (
    <AnimatePresence>
        {isOpen && data && (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
            >
                <div className="absolute inset-0 bg-black/50" onClick={onClose} />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                    className="w-full max-w-4xl h-[90vh] md:h-auto md:aspect-[16/9] bg-[#0a0a0a] border border-white/10 relative rounded-sm shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"><X className="w-6 h-6" /></button>

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-8 left-8 z-20">
                            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2 block">{data.category}</span>
                            <h3 className="text-3xl md:text-4xl font-serif text-white">{data.title}</h3>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-red-500" /> The Problem
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed">{data.problem}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-yellow-500" /> The Strategy
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    We implemented a precision-timed decoupling strategy to unlock CPF funds and avoid ABSD, then leveraged <span className="text-white">asset styling</span> to achieve a record-price exit.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-green-500" /> The Result
                                </h4>
                                <p className="text-2xl font-serif text-white">{data.result}</p>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <PremiumButton onClick={onClose} className="w-full text-xs">Analyze Similar Cases</PremiumButton>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

/* -------------------------------------------------------------------------- */
/* MENU OVERLAY                                      */
/* -------------------------------------------------------------------------- */

const MenuOverlay = ({ isOpen, onClose, onOpenContact }: { isOpen: boolean, onClose: () => void, onOpenContact: () => void }) => (
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

/* -------------------------------------------------------------------------- */
/* HERO SECTION                                */
/* -------------------------------------------------------------------------- */

const Hero = ({ onOpenVideo, onOpenContact }: { onOpenVideo: () => void, onOpenContact: () => void }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center border-b border-white/5">
            {/* Bespoke Architectural Lines - Frame */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 p-6 md:p-12">
                {/* Top Left */}
                <div className="absolute top-8 left-8 flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <div className="h-px w-12 bg-white/10" />
                    <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">SG • Est. 2010</span>
                </div>



                {/* Bottom Left */}
                <div className="absolute bottom-8 left-8 hidden md:block">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] text-white/20 -rotate-90 origin-bottom-left translate-x-3">CONFIDENTIAL</span>
                        <div className="w-px h-24 bg-gradient-to-t from-white/20 to-transparent" />
                    </div>
                </div>

                {/* Bottom Right - Coordinates */}
                <div className="absolute bottom-8 right-8 text-right hidden md:block">
                    <p className="font-mono text-[10px] text-white/30 tracking-widest">
                        1.3521° N / 103.8198° E<br />
                        SRI PTE LTD
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-black/60 z-10" />
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"
            />

            <div className="z-20 container mx-auto px-4 relative flex flex-col items-center justify-center h-full text-center">


                <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-medium tracking-tighter mix-blend-difference text-white mb-8 relative">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute top-1/2 left-0 h-px bg-white/10 -translate-y-1/2 w-full" />

                    <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="block">
                        ZAID
                    </motion.span>
                    <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        HAROON
                    </motion.span>
                </h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed mb-10">
                    The First Muslim Agent to Rank #1 at SRI. <br />
                    Building wealth portfolios, not just selling homes.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="flex flex-col md:flex-row items-center gap-6">
                    <PremiumButton onClick={onOpenContact}>
                        Start Consultation
                    </PremiumButton>

                    <button onClick={onOpenVideo} className="flex items-center gap-3 group px-4 py-2 border border-transparent hover:border-white/10 rounded-full transition-all">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                            <Play className="w-3 h-3 fill-white group-hover:fill-black group-hover:text-black transition-colors" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Watch Story</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

/* -------------------------------------------------------------------------- */
/* MARQUEE SECTION                               */
/* -------------------------------------------------------------------------- */

const Marquee = () => {
    return (
        <div className="relative w-full bg-yellow-600 overflow-hidden py-3 z-30 border-y border-yellow-400/20">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 text-black font-bold uppercase tracking-widest text-xs md:text-sm items-center font-mono"
            >
                {Array(10).fill("• SRI TOP ACHIEVER 2024 • RECORD BREAKING RESULTS • $2M ROADMAP •").map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </motion.div>
        </div>
    );
};

/* -------------------------------------------------------------------------- */
/* CREDENTIALS (THE TRACK RECORD)                   */
/* -------------------------------------------------------------------------- */

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

const Credentials = () => {
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

/* -------------------------------------------------------------------------- */
/* REALITY CHECK (SILENT CRISIS)                   */
/* -------------------------------------------------------------------------- */

const CrisisGraph = () => {
    return (
        <div className="relative w-full h-[400px] bg-[#0F0F0F] rounded-lg border border-white/5 p-6 flex flex-col justify-between overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                initial={{ backgroundPosition: "0px 0px" }}
                animate={{ backgroundPosition: "-40px -40px" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="flex justify-between items-start z-10">
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Projection Model</span>
                    <h4 className="text-white font-mono text-lg">Asset Progression</h4>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div><span className="text-[10px] text-gray-500 uppercase">Default</span></div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div><span className="text-[10px] text-gray-500 uppercase">Strategy</span></div>
                </div>
            </div>

            <div className="relative h-64 w-full mt-4 z-10 flex items-end px-2">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <motion.path d="M0,200 C50,180 100,150 150,180 C200,210 250,230 350,250" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                    <motion.path d="M0,200 C50,180 100,100 200,80 C300,50 350,20 400,10" fill="none" stroke="#10B981" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} />
                    <motion.path d="M0,200 C50,180 100,100 200,80 C300,50 350,20 400,10 V250 H0 Z" fill="url(#gradientEmerald)" className="opacity-20" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} transition={{ duration: 1, delay: 1 }} />
                    <defs>
                        <linearGradient id="gradientEmerald" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute right-0 top-0 bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded text-xs font-mono font-bold">$2,000,000</motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute right-10 bottom-0 bg-red-900/30 border border-red-500/30 text-red-400 px-3 py-1 rounded text-xs font-mono font-bold">Depleted CPF</motion.div>
            </div>
        </div>
    );
}

const RealityCheck = ({ onOpenContact }: { onOpenContact: () => void }) => {
    return (
        <Section className="bg-[#050505] text-white min-h-[90vh] overflow-hidden">
            <GridBackground />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full max-w-7xl relative z-10 items-center">
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <RevealText>
                        <div className="inline-flex items-center gap-2 mb-6 border border-red-500/30 bg-red-900/10 px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                            <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Market Reality</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
                            The Silent <br /> <span className="text-white">Crisis.</span>
                        </h2>
                    </RevealText>
                    <RevealText delay={0.2}>
                        <p className="text-xl text-gray-300 font-light mb-6">
                            It starts with a comfortable salary and ends with a depleted CPF. This is the <span className="text-red-400 font-medium">Retirement Paradox</span>.
                        </p>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 mb-8">
                            <p>The scenario is all too common: 40 years of hard work, yet facing age 65 with a zero-balance sheet. The "Grab Driver" future isn't a lack of effort—it's a lack of <span className="text-white">strategy</span>.</p>
                            <p>Most agents sell you a home for today's comfort. I engineer your exit for tomorrow's freedom. We don't hope for retirement; we mathematically guarantee it.</p>
                        </div>

                        <button onClick={onOpenContact} className="group flex items-center gap-2 text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors">
                            <span className="uppercase tracking-widest text-sm font-bold">See The Math</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </RevealText>
                </div>
                <div className="order-1 md:order-2"><CrisisGraph /></div>
            </div>
        </Section>
    );
};

/* -------------------------------------------------------------------------- */
/* METHODOLOGY (THE BLUEPRINT) - AUTO-PLAYING INTERACTIVE GRAPH */
/* -------------------------------------------------------------------------- */

const BlueprintStep = ({ number, title, desc, isActive, onSelect }: { number: string, title: string, desc: string, isActive: boolean, onSelect: () => void }) => (
    <motion.div
        onClick={onSelect}
        className={`relative pl-8 md:pl-12 border-l-2 transition-colors duration-500 cursor-pointer ${isActive ? 'border-yellow-500' : 'border-white/10'}`}
    >
        <div className="flex flex-col gap-2 relative z-10">
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isActive ? 'text-yellow-500' : 'text-gray-600'}`}>Step {number}</span>
            <h3 className={`text-2xl md:text-3xl font-serif transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>{title}</h3>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg font-light pt-2 pb-6">{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Progress Bar for Active Step */}
        {isActive && (
            <motion.div
                className="absolute left-[-2px] top-0 w-[2px] bg-yellow-500 h-full origin-top z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 5, ease: "linear" }}
            />
        )}
    </motion.div>
);

const Methodology = ({ onOpenContact }: { onOpenContact: () => void }) => {
    const [activeStep, setActiveStep] = useState(0);

    // Auto-play cycle
    // Auto-step switching removed for manual control
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveStep((prev) => (prev + 1) % steps.length);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [steps.length]);

    return (
        <Section id="blueprint" className="bg-[#050505] min-h-screen py-32 overflow-hidden">
            {/* Animated Radar Grid */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            <div className="w-full max-w-7xl relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-center">

                <div className="w-full md:w-1/2 aspect-square relative border border-white/10 bg-[#080808]/80 backdrop-blur-sm rounded-xl overflow-hidden group shadow-[0_0_50px_rgba(234,179,8,0.05)] p-8 flex flex-col">
                    {/* Background Grid */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* Chart Container */}
                    <div className="relative z-10 flex-1 w-full h-full">
                        <svg className="absolute inset-0 w-full h-full overflow-visible z-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {/* Market Average (Dashed) */}
                            <path d="M0,90 Q50,85 100,80" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="2,2" />

                            {/* The Wealth Curve (Gold) */}
                            <motion.path
                                d="M0,90 C30,85 40,60 100,10"
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                filter="url(#glow)"
                            />
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Hover Interaction Points (Invisible Hit Targets) */}
                            {/* Step 1 Hit Area */}
                            <rect x="0" y="0" width="33" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(0)}
                                className="cursor-pointer"
                            />

                            {/* Step 2 Hit Area */}
                            <rect x="33" y="0" width="33" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(1)}
                                className="cursor-pointer"
                            />

                            {/* Step 3 Hit Area */}
                            <rect x="66" y="0" width="34" height="100" fill="transparent"
                                onMouseEnter={() => setActiveStep(2)}
                                className="cursor-pointer"
                            />

                            {/* Active Point Indicator - MINIMALIST DOT */}
                            <motion.circle
                                animate={{
                                    cx: activeStep === 0 ? 5 : activeStep === 1 ? 40 : 95,
                                    cy: activeStep === 0 ? 88 : activeStep === 1 ? 60 : 10
                                }}
                                r="2.5"
                                fill="#000"
                                stroke="#EAB308"
                                strokeWidth="1.5"
                                className="drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
                            />
                        </svg>

                        {/* Floating Details Card (Heads Up Display) */}
                        <div className="absolute top-4 left-4 z-30">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-[10px] text-yellow-500 font-mono uppercase tracking-widest mb-1 block">
                                        Phase {activeStep + 1}
                                    </span>
                                    <h3 className="text-xl text-white font-serif leading-none mb-1">
                                        {activeStep === 0 ? "35-Year Roadmap" : activeStep === 1 ? "Portfolio Arch." : "Strict Execution"}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 font-mono">
                                        {activeStep === 0 ? "Projecting 2050 Needs" : activeStep === 1 ? "Compounding Assets" : "Target: $2.4M Exit"}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">Projection Model</span>
                    </div>

                    <div className="absolute bottom-6 right-6 text-right">
                        <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Your projected wealth over the next 5 years</span>
                    </div>
                </div>

                {/* Right: The Text - Auto-Playing List */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="mb-8">
                        <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">The Blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Reverse Engineering <br /> Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-600">Wealth.</span>
                        </h2>
                    </div>

                    <BlueprintStep
                        number="01"
                        title="The 35-Year Roadmap"
                        desc="We don't start with property. We start with the end in mind. We calculate exactly what you need in 2050, then we build the mathematical bridge to cross that gap."
                        isActive={activeStep === 0}
                        onSelect={() => setActiveStep(0)}
                    />
                    <BlueprintStep
                        number="02"
                        title="Portfolio Architecture"
                        desc="Moving beyond 'buy and sell'. We structure your assets to compound. Your HDB is not a home; it is the first domino in a chain reaction designed to fund your future."
                        isActive={activeStep === 1}
                        onSelect={() => setActiveStep(1)}
                    />
                    <BlueprintStep
                        number="03"
                        title="Strict Execution"
                        desc="Plans fail without discipline. We execute with military precision, adjusting for market cycles, interest rates, and regulations to keep you on track to $2M."
                        isActive={activeStep === 2}
                        onSelect={() => setActiveStep(2)}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <PremiumButton onClick={onOpenContact}>Start Your Blueprint</PremiumButton>
                    </motion.div>
                </div>
            </div >
        </Section >
    );
};

/* -------------------------------------------------------------------------- */
/* CASE STUDIES SECTION (NEW)                                    */
/* -------------------------------------------------------------------------- */

const CASE_STUDIES = [
    {
        id: "01",
        category: "HDB Upgrader",
        title: "The 5-Year Pivot",
        problem: "Stuck in stagnant resale flat.",
        result: "+$450K Asset Growth",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "02",
        category: "Investor",
        title: "Decoupling Strategy",
        problem: "High ABSD barrier entry.",
        result: "Saved $112K in Tax",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        category: "Retiree",
        title: "Right-Sizing Legacy",
        problem: "Asset rich, cash poor.",
        result: "$5K/mo Passive Income",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "04",
        category: "First Home",
        title: "Entry Level Prime",
        problem: "Priced out of OCR.",
        result: "Secured Undervalued D15",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "05",
        category: "Legacy",
        title: "Multi-Gen Wealth",
        problem: "Passing assets efficiently.",
        result: "Trust Structure Setup",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "06",
        category: "HDB Upgrader",
        title: "The 5-Year Pivot",
        problem: "Stuck in stagnant resale flat.",
        result: "+$450K Asset Growth",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    },
];

const CaseStudies = () => {
    // Duplicate the array of case studies to ensure seamless looping
    const marqueeItems = [...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES];
    const [selectedStudy, setSelectedStudy] = useState<typeof CASE_STUDIES[0] | null>(null);

    return (
        <Section id="case-studies" className="bg-[#050505] min-h-[50vh] flex flex-col justify-center overflow-hidden py-24 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
                    <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4 block">Proven Results</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Case Studies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">Real scenarios. Real numbers. The application of the blueprint in live market conditions.</p>
                </div>

                <div className="flex w-full overflow-hidden mask-linear-fade relative">
                    <motion.div
                        className="flex gap-8 px-4 relative"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {/* Wavy Connection Line - BACKGROUND */}
                        <div className="absolute inset-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            <svg className="w-full h-[400px] -translate-y-1/2 opacity-30" preserveAspectRatio="none">
                                {[0, 1, 2, 3, 4].map((lineIndex) => (
                                    <path
                                        key={lineIndex}
                                        d={`M 0 ${100 + (lineIndex * 20)} 
                                            ${marqueeItems.map((_, i) => {
                                            const x = (i * 432) + 200;
                                            // Randomized variations for "random waveness"
                                            const baseY = 100 + (lineIndex * 20);
                                            const amplitude = 50 + (lineIndex * 10);
                                            const y = i % 2 === 0 ? baseY - amplitude : baseY + amplitude;
                                            return `Q ${x - 100} ${y} ${x} ${baseY} T ${x + 216} ${baseY}`;
                                        }).join(" ")}`}
                                        fill="none"
                                        stroke="#EAB308"
                                        strokeWidth={lineIndex === 2 ? 1.5 : 0.5} // Middle line slightly thicker
                                        opacity={0.3 + (lineIndex * 0.1)}
                                        className="drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]"
                                    />
                                ))}
                            </svg>
                        </div>

                        {marqueeItems.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="w-[300px] md:w-[400px] flex-shrink-0 h-[500px] bg-[#111] overflow-hidden rounded-sm border border-white/5 relative group hover:border-yellow-500/50 transition-all duration-500 cursor-pointer z-10"
                                onClick={() => setSelectedStudy(item)}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-20 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="mb-auto flex justify-between items-start">
                                        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                                            <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-yellow-500 transition-colors" />
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-serif text-white mb-4 italic">{item.title}</h3>

                                        <div className="mt-4 opacity-100 transition-opacity duration-300 space-y-2">
                                            <div>
                                                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Problem</span>
                                                <p className="text-sm text-gray-300 font-light line-clamp-1">{item.problem}</p>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-green-500 uppercase tracking-widest">Outcome</span>
                                                <p className="text-lg text-white font-medium">{item.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <CaseStudyModal isOpen={!!selectedStudy} onClose={() => setSelectedStudy(null)} data={selectedStudy} />
        </Section>
    );
};

/* -------------------------------------------------------------------------- */
/* PROFILE SECTION - EDITORIAL REVAMP                             */
/* -------------------------------------------------------------------------- */

const Profile = () => {
    return (
        <Section id="profile" className="bg-[#080808] overflow-hidden py-32 min-h-[90vh] flex items-center justify-center relative">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Parallax Image Card - Updated Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative h-[600px] w-full overflow-hidden rounded-sm"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        src="/zaid-profile-gold.png"
                        alt="Zaid Haroon"
                        className="w-full h-full object-cover object-top opacity-90"
                    />
                    <div className="absolute inset-0 border-[1px] border-white/10 m-6 pointer-events-none z-20" />
                </motion.div>

                {/* Editorial Content */}
                <div className="relative">
                    <RevealText>
                        <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8 text-white">
                            "I don't just sell houses. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">I architect your legacy.</span>"
                        </h3>
                    </RevealText>

                    <RevealText delay={0.2}>
                        <div className="space-y-6 text-lg font-light text-gray-400 leading-relaxed mb-12 border-l border-white/10 pl-6">
                            <p>Being the first Muslim to hit #1 at SRI wasn't about the accolades. It was about proving that <span className="text-white italic">Tawakkul</span> (Trust in God) paired with relentless, ethical strategy wins in any market.</p>
                            <p>My clients aren't looking for a quick flip. They are looking for safety, growth, and a retirement that honors their years of hard work.</p>
                        </div>
                    </RevealText>
                </div>
            </div>
        </Section>
    );
};

/* -------------------------------------------------------------------------- */
/* HONOURS SHOWCASE - DEDICATED SECTION                             */
/* -------------------------------------------------------------------------- */

const Honours = () => {
    return (
        <Section id="honours" className="bg-[#050505] py-32 relative overflow-hidden flex items-center justify-center">
            {/* Dark Luxury Particles/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.03),transparent_70%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-6 mb-10"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                        <img src="/sri-logo.png" alt="SRI" className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-700" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
                    </motion.div>

                    <RevealText>
                        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight leading-none">
                            Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 italic">Excellence.</span>
                        </h2>
                        <p className="font-mono text-[10px] md:text-xs text-yellow-500/40 uppercase tracking-[0.5em] mt-4">
                            Corporate Accreditation & Performance Honours
                        </p>
                    </RevealText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 w-full">
                    {[
                        { img: "/seals/millionaire-seal.png", title: "Millionaire Achiever", desc: "Recognized for consistent S$1M+ transaction excellence." },
                        { img: "/seals/billion-seal.png", title: "Billion Dollar Club", desc: "Elite membership status within SRI's highest performance tier." },
                        { img: "/seals/top-seal.png", title: "#01 Top Achiever", desc: "Historically proving strategy through unprecedented market results." },
                        { img: "/seals/transaction-seal.png", title: "Largest Transaction", desc: "Mastering complex negotiations for Singapore's premier estates." }
                    ].map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10 perspective-1000">
                                {/* Ambient Halo */}
                                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-[80px] transition-all duration-1000 rounded-full scale-125 opacity-0 group-hover:opacity-100" />

                                <motion.div
                                    whileHover={{ rotateY: 10, rotateX: -5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="w-full h-full relative z-10"
                                >
                                    <img
                                        src={award.img}
                                        alt={award.title}
                                        className="w-full h-full object-contain mix-blend-lighten filter brightness-110 contrast-110 transition-all duration-700 drop-shadow-[0_0_40px_rgba(234,179,8,0.1)] group-hover:drop-shadow-[0_0_60px_rgba(234,179,8,0.25)]"
                                    />
                                </motion.div>
                            </div>

                            <h4 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-yellow-500 transition-colors duration-500">
                                {award.title}
                            </h4>
                            <p className="text-[10px] md:text-xs font-light text-gray-500 leading-relaxed uppercase tracking-[0.2em] text-center max-w-[240px]">
                                {award.desc}
                            </p>
                            <div className="mt-8 h-px w-6 bg-yellow-500/20 group-hover:w-20 group-hover:bg-yellow-500 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

/* -------------------------------------------------------------------------- */
/* FREE RESOURCE (THE DOSSIER) - ANIMATED BOOK      */
/* -------------------------------------------------------------------------- */

const FreeResource = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width - 0.5);
        mouseY.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [10, 30]); // Biased to right tilt

    return (
        <Section id="resources" className="bg-[#111] overflow-hidden min-h-[90vh] py-24 flex items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,215,0,0.03),transparent_70%)]" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-4">
                <div className="order-2 md:order-1 relative z-10">
                    <RevealText>
                        <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4 block">Confidential Strategy</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            The $2,000,000 <br /> Protocol.
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

                {/* 3D Floating Book with Idle Animation - CENTERED & REVAMPED */}
                <div className="order-1 md:order-2 flex justify-center items-center perspective-1000 h-[600px] w-full" onMouseMove={handleMouseMove}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        animate={{ y: [0, -15, 0], rotateZ: 5 }} // Added static right tilt
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

                        {/* Spine (Left) - Thick & Darker */}
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

/* -------------------------------------------------------------------------- */
/* CTA (THE HORIZON) - CLEAN & SLEEK                 */
/* -------------------------------------------------------------------------- */

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => {
    return (
        <Section className="bg-[#050505] text-white min-h-[80vh] relative overflow-hidden flex items-center justify-center border-t border-white/10">
            {/* Background Image - Similar to Hero */}
            <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1485628390568-3737df57b5a8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20" />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.5)_0%,_#050505_100%)] z-10" />

            <div className="absolute top-12 left-12 w-32 h-32 border-l border-t border-white/20 opacity-50 z-10" />
            <div className="absolute bottom-12 right-12 w-32 h-32 border-r border-b border-white/20 opacity-50 z-10" />

            {/* Giant Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-signature text-[20vw] text-white/5 whitespace-nowrap z-0 pointer-events-none select-none">
                Zaid Haroon
            </div>

            <div className="relative z-20 w-full max-w-5xl text-center p-12 md:p-20 border border-white/5 bg-black/50 backdrop-blur-sm rounded-sm">
                <RevealText>
                    <h2 className="text-5xl md:text-8xl font-serif mb-8 tracking-tight text-white mix-blend-difference drop-shadow-2xl">
                        Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 italic">Legacy.</span>
                    </h2>
                    <p className="text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto font-light text-lg">
                        The window of opportunity in Singapore real estate is narrow. Strategy is the only leverage. Let's build your $2M roadmap.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <PremiumButton onClick={onOpenContact} className="px-12 py-6 text-base w-full md:w-auto">
                            Initiate Strategy Session <ArrowRight className="w-5 h-5" />
                        </PremiumButton>
                        <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">or WhatsApp Direct</span>
                    </div>
                </RevealText>
            </div>
        </Section>
    );
};

const Footer = () => (
    <footer className="w-full py-12 bg-black border-t border-white/5 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl text-white mb-4">ZAID HAROON</span>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Zaid Haroon Real Estate. SRI Pte Ltd. All Rights Reserved.
        </p>
    </footer>
);

/* -------------------------------------------------------------------------- */
/* MAIN APP                                    */
/* -------------------------------------------------------------------------- */

export default function App() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black font-sans scroll-smooth">
            <NoiseOverlay />

            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpenContact={() => setIsContactOpen(true)} />

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
                {/* Semi-transparent background for sticky menu */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md pointer-events-none -z-10" />

                <span className="font-bold tracking-tighter text-xl pointer-events-auto font-serif">ZH.</span>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 pointer-events-auto">
                    {[
                        { name: 'The Blueprint', link: '#blueprint' },
                        { name: 'Case Studies', link: '#case-studies' },
                        { name: 'About Zaid', link: '#profile' },
                        { name: 'Resources', link: '#resources' }
                    ].map((item) => (
                        <a key={item.name} href={item.link} className="text-xs font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center pointer-events-auto">
                    <button onClick={() => setIsContactOpen(true)} className="hidden md:block text-[10px] font-bold uppercase tracking-widest border border-white/20 bg-white/5 hover:bg-white hover:text-black backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300">
                        Book Consultation
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[10px] font-bold uppercase tracking-widest border border-white/20 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                        <Menu className="w-3 h-3" /> Menu
                    </button>
                </div>
            </nav>

            <main>
                <Hero onOpenVideo={() => setIsVideoOpen(true)} onOpenContact={() => setIsContactOpen(true)} />
                <Credentials />
                <Profile />
                <Honours />
                <Methodology onOpenContact={() => setIsContactOpen(true)} />
                <CaseStudies />
                <FreeResource />
                <CTA onOpenContact={() => setIsContactOpen(true)} />
            </main>

            <Footer />
        </div>
    );
}
