export default function Journey() {
    return (
        <section id="journey" className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        My Journey
                    </h2>
                    <p className="text-lg text-neutral-400">
                        From culinary school to code to cinema
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Current */}
                    <div className="bg-neutral-900 rounded-2xl p-8 border-2 border-white shadow-2xl">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-white text-black text-sm font-semibold rounded-full mb-3">
                                    Current
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Videographer & Editor
                                </h3>
                                <p className="text-lg text-neutral-400">Visual Storytelling & Content Creation</p>
                            </div>
                            <div className="text-sm font-medium text-neutral-400 bg-neutral-800 px-4 py-2 rounded-lg">
                                2024 - Present
                            </div>
                        </div>
                        <ul className="space-y-2 text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Producing high-quality video content across corporate, documentary, and cinematic genres</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Advanced color grading and professional post-production workflows (DaVinci Resolve)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Motion graphics, titles, and visual effects integration (After Effects)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Client collaboration from pre-production concept to final delivery</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Tech-informed workflow: automated exports, batch processing, and version control for projects</span>
                            </li>
                        </ul>
                    </div>

                    {/* Developer Phase */}
                    <div className="bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800 hover:border-neutral-600 transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Full-Stack Developer
                                </h3>
                                <p className="text-lg text-neutral-400">Web & Mobile Development</p>
                            </div>
                            <div className="text-sm font-medium text-neutral-400 bg-neutral-800 px-4 py-2 rounded-lg">
                                2022 - 2024
                            </div>
                        </div>
                        <ul className="space-y-2 text-neutral-300">
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Built and launched SkripIn — production-ready AI SaaS with 84 tests, 90%+ coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Mastered React, Next.js, TypeScript, Node.js, PostgreSQL, Firebase</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Developed multiple web and mobile apps, including HPP Calculator and MBTI Compatibility Test</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Discovered passion for visual communication that led to the pivot into filmmaking</span>
                            </li>
                        </ul>
                    </div>

                    {/* Beverage Background */}
                    <div className="bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800 hover:border-neutral-600 transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Beverage Crafter
                                </h3>
                                <p className="text-lg text-neutral-400">F&B Industry & Culinary Arts (Tata Boga)</p>
                            </div>
                            <div className="text-sm font-medium text-neutral-400 bg-neutral-800 px-4 py-2 rounded-lg">
                                Foundation
                            </div>
                        </div>
                        <ul className="space-y-2 text-neutral-300 mb-4">
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Developed signature mocktails and specialized beverage menus</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Mastered flavor profiling, inventory management, and speed of service</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-white mt-1">•</span>
                                <span>Built a strong foundation in precision, customer empathy, and the culinary arts (SMK Tata Boga)</span>
                            </li>
                        </ul>
                        <p className="text-neutral-400 italic text-sm">
                            This period taught me that crafting the perfect drink requires exact measurements and timing. This focus on precision seamlessly transferred to my software engineering and videography careers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
