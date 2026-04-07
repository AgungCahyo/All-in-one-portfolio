export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-neutral-400">
                        Compelling stories told through motion and sound
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Project 1 - Software: SkripIn */}
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-3xl border-2 border-neutral-700 overflow-hidden shadow-2xl hover:shadow-white/10 transition-all">
                        <div className="p-8 sm:p-12">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                <div>
                                    <div className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                                        Software Engineering
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                                        SkripIn - AI Script Generator
                                    </h3>
                                    <p className="text-lg text-neutral-400">
                                        A production-ready AI solution with 90%+ test coverage
                                    </p>
                                </div>
                            </div>
                            
                            <div className="relative w-full aspect-video bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-700 mb-8 flex items-center justify-center">
                                <div className="text-center text-neutral-600">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <p className="text-sm">Screenshot UI Project SkripIn</p>
                                </div>
                            </div>

                            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                                SkripIn is a robust AI script generator crafted from scratch using modern web technologies. Engineered with Next.js 16, React 19, and TypeScript, it seamlessly integrates Google Gemini for advanced language processing and OpenAI for high-quality text-to-speech. The application boasts a heavily tested and robust architecture with 84 automated tests.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {['Next.js', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-neutral-800 text-neutral-200 text-sm font-medium rounded-lg">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                                >
                                    View Live App
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-3 border-2 border-neutral-700 text-white font-semibold rounded-xl hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - Showreel */}
                    <div className="bg-neutral-900 rounded-2xl border-2 border-neutral-800 p-8 hover:border-neutral-600 hover:shadow-lg transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-full mb-3">
                                    Videography
                                </div>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                                        Cinematography & Editing Reel
                                    </h3>
                                    <p className="text-lg text-neutral-400">
                                        A curated selection of my best work across genres
                                    </p>
                                </div>
                            </div>

                            {/* Video Embed — replace src with your YouTube/Vimeo embed URL */}
                            <div className="relative w-full aspect-video bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 mb-8 flex items-center justify-center">
                                {/* <iframe
                                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                    title="Showreel 2024"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                /> */}
                                <div className="text-center text-neutral-500">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm">Uncomment iframe dan ganti YOUR_VIDEO_ID</p>
                                </div>
                            </div>

                            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                                A diverse showcase spanning corporate brand films, documentary shorts, and cinematic content. Each piece demonstrates a commitment to intentional framing, purposeful editing rhythm, and story-driven color grading. Developer background informs efficient workflow and technical precision on every project.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="text-center p-4 bg-neutral-800 rounded-xl border-2 border-neutral-700">
                                    <div className="text-2xl font-bold text-white mb-1">15+</div>
                                    <div className="text-sm text-neutral-400">Projects Delivered</div>
                                </div>
                                <div className="text-center p-4 bg-neutral-800 rounded-xl border-2 border-neutral-700">
                                    <div className="text-2xl font-bold text-white mb-1">4K</div>
                                    <div className="text-sm text-neutral-400">Max Resolution</div>
                                </div>
                                <div className="text-center p-4 bg-neutral-800 rounded-xl border-2 border-neutral-700">
                                    <div className="text-2xl font-bold text-white mb-1">3</div>
                                    <div className="text-sm text-neutral-400">Genres</div>
                                </div>
                                <div className="text-center p-4 bg-neutral-800 rounded-xl border-2 border-neutral-700">
                                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                                    <div className="text-sm text-neutral-400">Client Satisfaction</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-white mb-3">Capabilities Shown:</h4>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-neutral-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Cinematography & camera operation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Advanced color grading (DaVinci Resolve)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Motion graphics & titles (After Effects)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Sound design & audio mixing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Multi-cam production editing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Drone / aerial footage integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Brand narrative & corporate video</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-0.5">✓</span>
                                        <span>Documentary-style storytelling</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {['DaVinci Resolve', 'Adobe Premiere', 'After Effects', 'Audition', 'Blender', '4K Production'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.youtube.com/@agungcahyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                                >
                                    Watch Full Reel
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:cahyoprasetyo507@gmail.com"
                                    className="px-6 py-3 border-2 border-neutral-700 text-white font-semibold rounded-xl hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>

                    {/* Project 2 - Corporate Brand Film */}
                    <div className="bg-neutral-900 rounded-2xl border-2 border-neutral-800 p-8 hover:border-neutral-600 hover:shadow-lg transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-neutral-800 text-white text-sm font-semibold rounded-full mb-3">
                                    Corporate Video
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Brand Film – [Client Name]
                                </h3>
                                <p className="text-neutral-400">
                                    Company Profile & Product Showcase
                                </p>
                            </div>
                        </div>

                        {/* Video Embed */}
                        <div className="relative w-full aspect-video bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 mb-6 flex items-center justify-center">
                            {/* <iframe
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                title="Brand Film"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            /> */}
                            <div className="text-center text-neutral-500">
                                <svg className="w-10 h-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm">Video embed</p>
                            </div>
                        </div>

                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            Describe this project here — the creative challenge, the story you told, the techniques you used. What was the client's goal? How did you approach it visually and narratively?
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Cinematography', 'Color Grading', 'Sound Design', 'Motion Graphics'].map((tag) => (
                                <span key={tag} className="px-3 py-1.5 bg-neutral-800 text-white text-sm font-medium rounded-lg">{tag}</span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <a
                                href="#"
                                className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                            >
                                Watch Full Project
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-neutral-800 p-4 rounded-xl border-2 border-neutral-700">
                            <p className="text-sm text-neutral-300">
                                <span className="font-semibold text-white">Production Note:</span> Add a behind-the-scenes insight here — what made this project unique, a challenge you overcame, or a technique you're particularly proud of.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 - Beverage Portfolio */}
                    <div className="bg-neutral-900 rounded-2xl border-2 border-neutral-800 p-8 hover:border-neutral-600 hover:shadow-lg transition-all">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-amber-600 text-white text-sm font-semibold rounded-full mb-3">
                                    Beverage Craft
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Signature Mocktail Development
                                </h3>
                                <p className="text-neutral-400">
                                    Menu Creation & Flavor Profiling
                                </p>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative w-full aspect-video bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 mb-6 flex items-center justify-center">
                            <div className="text-center text-neutral-500">
                                <svg className="w-10 h-10 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h18v18H3V3z" />
                                </svg>
                                <p className="text-sm">Foto Racikan Minuman / Menu</p>
                            </div>
                        </div>

                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            Crafting refreshing, balanced mocktails goes beyond mixing syrups; it requires understanding the chemical interactions between acidity, sweetness, and aromatics. In this project, I developed a seasonal beverage menu that increased customer satisfaction and streamlined ordering times during peak shifts.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Menu Engineering', 'Ingredient Sourcing', 'Standard Operating Procedures', 'Garnish Design'].map((tag) => (
                                <span key={tag} className="px-3 py-1.5 bg-neutral-800 text-white text-sm font-medium rounded-lg">{tag}</span>
                            ))}
                        </div>

                        <div className="bg-neutral-800 p-4 rounded-xl border-2 border-neutral-700">
                            <p className="text-sm text-neutral-300">
                                <span className="font-semibold text-white">Insight:</span> The same precision required to debug a React application is utilized when adjusting the micro-measurements of a beverage recipe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
