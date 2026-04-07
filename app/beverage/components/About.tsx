export default function About() {
    return (
        <section id="about" className="py-24 bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[3/3.3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl border-2 border-neutral-700 flex items-center justify-center overflow-hidden">
                            <img
                                src="/profile.png"
                                alt="Agung Cahyo Prasetyo"
                                className="w-full h-full object-cover object-[50%_30%]"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
                            <p>
                                My journey is unconventional. It started in the fast-paced environment of the <span className="font-semibold text-white">beverage & hospitality industry</span>, where I learned that creating the perfect drink requires exact measurements, timing, and an obsession with customer experience.
                            </p>
                            <p>
                                That same obsession with precision led me into <span className="font-semibold text-white">Software Engineering</span>. I transitioned from mixing ingredients to writing code — building robust applications and AI tools from scratch. I discovered that drafting a clean architecture is surprisingly similar to formulating a drink recipe.
                            </p>
                            <p>
                                Ultimately, this blend of hospitality's empathy and software's logic culminated in <span className="font-semibold text-white">Videography</span>. Whether I'm crafting a signature beverage, writing a production-ready application, or directing a cinematic brand film, my philosophy remains the same: <span className="font-semibold text-white">intentionality in every detail.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
