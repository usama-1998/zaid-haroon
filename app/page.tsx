'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';

// Shared Components
import { NoiseOverlay } from './components/shared';

// Modals
import { VideoModal, ContactModal, MenuOverlay } from './components/modals';

// Sections
import {
    Hero,
    Credentials,
    Methodology,
    CaseStudies,
    Profile,
    Honours,
    FreeResource,
    CTA,
    Footer
} from './components/sections';

/* -------------------------------------------------------------------------- */
/* MAIN APP                                                                    */
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
                <Honours />
                <Profile />
                <Methodology onOpenContact={() => setIsContactOpen(true)} />
                <CaseStudies />
                <FreeResource />
                <CTA onOpenContact={() => setIsContactOpen(true)} />
                <Credentials />
            </main>

            <Footer />
        </div>
    );
}
