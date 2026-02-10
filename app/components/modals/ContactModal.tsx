'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import { PremiumButton, SmartPhoneInput } from '../shared';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [phone, setPhone] = React.useState<string | undefined>();

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
                        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto relative bg-[#0a0a0a] border border-yellow-500/30 rounded-lg flex flex-col shadow-[0_0_100px_rgba(234,179,8,0.1)]"
                    >
                        {/* Golden Gradient Top Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />

                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

                        <div className="relative z-10 p-10 flex flex-col items-center text-center">
                            <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>



                            <h2 className="text-3xl font-serif text-white mb-2">Apply to work with Zaid Haroon</h2>
                            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                                Please fill out the form below to apply for a strategy session.
                            </p>

                            <div className="w-full space-y-5 text-left">
                                {/* Budget & Persona Row */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    {/* Budget Dropdown */}
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Your real estate investment budget?
                                        </label>
                                        <div className="relative">
                                            <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white appearance-none focus:border-yellow-500 focus:outline-none transition-colors">
                                                <option value="" disabled selected>Select an option</option>
                                                <option value="<500k">Less than $500k</option>
                                                <option value="500k-1m">$500k - $1M</option>
                                                <option value="1m-2m">$1M - $2M</option>
                                                <option value="2m-5m">$2M - $5M</option>
                                                <option value="5m+">$5M+</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Persona Dropdown */}
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                            Which best describes you?
                                        </label>
                                        <div className="relative">
                                            <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white appearance-none focus:border-yellow-500 focus:outline-none transition-colors">
                                                <option value="" disabled selected>Select an option</option>
                                                <option value="investor">I am a Real Estate Investor</option>
                                                <option value="homeowner">I am a Homeowner looking to sell/upgrade</option>
                                                <option value="buyer">I am a First-time Home Buyer</option>
                                                <option value="developer">I am a Property Developer</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Goals Textarea */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                        Current situation and goals regarding Real Estate
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                {/* Property Owner Radio */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                                        Do you currently own a property?
                                    </label>
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="radio" name="property_owner" className="peer sr-only" />
                                                <div className="w-5 h-5 border border-white/30 rounded-full peer-checked:border-yellow-500 group-hover:border-white/50 transition-colors"></div>
                                                <div className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-yellow-500 scale-0 peer-checked:scale-100 transition-transform"></div>
                                            </div>
                                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Yes</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="radio" name="property_owner" className="peer sr-only" />
                                                <div className="w-5 h-5 border border-white/30 rounded-full peer-checked:border-yellow-500 group-hover:border-white/50 transition-colors"></div>
                                                <div className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-yellow-500 scale-0 peer-checked:scale-100 transition-transform"></div>
                                            </div>
                                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">No</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <h3 className="text-lg font-serif text-white mb-4">Basic Information</h3>

                                    <div className="space-y-4">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:border-yellow-500 focus:outline-none transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                                                <SmartPhoneInput
                                                    value={phone}
                                                    onChange={setPhone}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <PremiumButton className="w-full py-4 text-sm mt-4">
                                    Submit Application
                                </PremiumButton>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
