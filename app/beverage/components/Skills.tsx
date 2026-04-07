export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-neutral-400">
                        Tools and techniques I've mastered
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Software Engineering */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Software Engineering</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AI Integration (Gemini)', 'Version Control', 'Test Automation'].map((skill) => (
                                <div key={skill} className="bg-neutral-900 rounded-xl p-4 border-2 border-neutral-800 hover:border-white hover:shadow-lg transition-all text-center flex items-center justify-center h-full">
                                    <div className="font-semibold text-white">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Videography & Production */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Videography & Production</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Camera Operation', 'Color Grading (Resolve)', 'Lighting Design', 'Video Editing (Premiere)', 'Motion Graphics (AE)', 'Audio Design', 'Shot Planning', 'Multi-cam Production'].map((skill) => (
                                <div key={skill} className="bg-neutral-900 rounded-xl p-4 border-2 border-neutral-800 hover:border-white hover:shadow-lg transition-all text-center flex items-center justify-center h-full">
                                    <div className="font-semibold text-white">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Beverage & Hospitality */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Beverage Craft & Hospitality</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Mocktail Mixology', 'Recipe Formulation', 'Flavor Profiling', 'Inventory Management', 'Customer Experience', 'Speed of Service', 'Menu Development', 'Quality Control'].map((skill) => (
                                <div key={skill} className="bg-neutral-900 rounded-xl p-4 border-2 border-neutral-800 hover:border-white hover:shadow-lg transition-all text-center flex items-center justify-center h-full">
                                    <div className="font-semibold text-white">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Currently Developing */}
                <div className="mt-12 bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800">
                    <h3 className="text-xl font-bold text-white mb-4">Currently Developing</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg">3D Motion Graphics (Blender)</span>
                        <span className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg">Anamorphic Cinematography</span>
                        <span className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg">AI-assisted Editing Workflows</span>
                        <span className="px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg">Live Event Production</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
