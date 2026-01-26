'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, RevealText } from '../shared';

export const Profile = () => {
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
