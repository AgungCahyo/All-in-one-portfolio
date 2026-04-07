'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-neutral-200 transition-colors">
                        AGUNG CAHYO P.
                    </Link>
                    <div className="hidden lg:flex items-center gap-4 border-l border-neutral-800 pl-6">
                        <Link href="/dev" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-blue-400 transition-colors">Code</Link>
                        <Link href="/video" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-emerald-400 transition-colors">Cinema</Link>
                        <Link href="/craft" className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-amber-400 transition-colors">Craft</Link>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#journey">Journey</NavLink>
                    <NavLink href="#projects">Work</NavLink>
                    <NavLink href="#skills">Skills</NavLink>

                    <a href="#contact" className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                        style={{
                            background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <div className="p-6 space-y-1">
                            <div className="flex gap-2 mb-4 pb-4 border-b border-neutral-800">
                                <Link href="/dev" onClick={() => setIsOpen(false)} className="flex-1 py-2 text-center text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">Code</Link>
                                <Link href="/video" onClick={() => setIsOpen(false)} className="flex-1 py-2 text-center text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors">Cinema</Link>
                                <Link href="/craft" onClick={() => setIsOpen(false)} className="flex-1 py-2 text-center text-sm font-medium text-amber-400 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 transition-colors">Craft</Link>
                            </div>
                            {[
                                { href: '#about', label: 'About', delay: 0.05 },
                                { href: '#journey', label: 'Journey', delay: 0.1 },
                                { href: '#projects', label: 'Work', delay: 0.15 },
                                { href: '#skills', label: 'Skills', delay: 0.2 },
                            ].map((item) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: item.delay, duration: 0.3 }}
                                >
                                    <MobileNavLink href={item.href} onClick={() => setIsOpen(false)}>
                                        {item.label}
                                    </MobileNavLink>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                                className="pt-3"
                            >
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-3.5 text-center bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-all duration-300"
                                >
                                    Contact
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            {children}
        </a>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group block relative px-4 py-3.5 text-base font-medium text-neutral-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
    );
}
