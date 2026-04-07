'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, LinkedinIcon, GithubIcon } from 'lucide-react';
import Image from 'next/image';


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-950" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-0 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-8 order-2 lg:order-1 pt-12 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start gap-6"
                    >
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs tracking-wide font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Web Developer
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs tracking-wide font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Videographer
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs tracking-wide font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                Beverage Crafter
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.1] mt-2">
                            Code. Cinema. <br />
                            <span className="text-neutral-400">Craft.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed font-light mt-4">
                            I'm <span className="text-white font-medium">Agung Cahyo Prasetyo</span>. I build robust applications, direct cinematic visuals, and craft refreshing beverages. Whether it's logic, lenses, or liquids — precision is my process.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all">
                            View Selected Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-2 px-2">
                            <SocialLink href="https://github.com/agungcahyo" icon={<GithubIcon className="w-5 h-5" />} />
                            <SocialLink href="https://www.linkedin.com/in/agung-cahyo-prasetyo" icon={<LinkedinIcon className="w-5 h-5" />} />
                            <SocialLink href="mailto:cahyoprasetyo507@gmail.com" icon={<Mail className="w-5 h-5" />} />
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 border border-neutral-800 rounded-sm translate-x-4 translate-y-4 -z-10" />
                        <div className="relative w-full h-full overflow-hidden bg-neutral-900 rounded-sm">
                            <Image
                                src="/hero.png"
                                alt="Agung Cahyo Prasetyo"
                                fill
                                className="object-top object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-neutral-950/10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all"
        >
            {icon}
        </a>
    );
}
