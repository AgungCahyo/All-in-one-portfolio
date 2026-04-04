import Link from 'next/link'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            AGUNG CAHYO
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#journey" className="nav-link">Journey</a>
            <a href="#projects" className="nav-link">Work</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              From Code to Cinema.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm Agung Cahyo Prasetyo. A programmer turned videographer who crafts compelling visual narratives. Blending technical precision with creative storytelling.
            </p>
            <a href="#projects" className="cta-button">
              View Selected Work
            </a>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-gray-400">Your hero image here</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-900 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-gray-400">Your profile image here</p>
            </div>
          </div>
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a developer-turned-videographer who discovered that the same problem-solving mindset that powers clean code also creates powerful visual stories. After years of building software solutions, I realized my passion lies in capturing moments and transforming them into compelling narratives.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My technical background gives me a unique edge: I understand workflow optimization, color theory, and post-production workflows with the precision of someone trained in software architecture. Every frame is intentional. Every cut has purpose.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From corporate videos to personal projects, I bring the same dedication to quality and attention to detail that defines my code. The medium changed, but the mission stayed the same: solving problems and creating value through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title">My Journey</h2>
        <p className="text-gray-300 text-lg mb-12">From programming to visual storytelling</p>

        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <div className="border-l-2 border-gray-700 pl-8 pb-8">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">Videographer & Editor</h3>
              <span className="text-gray-400 text-sm">2024 - Present</span>
            </div>
            <p className="text-gray-300">Professional videography and video editing services</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Producing high-quality video content across multiple genres</li>
              <li>• Advanced color grading and post-production workflows</li>
              <li>• Motion graphics and visual effects integration</li>
              <li>• Client collaboration and project management</li>
            </ul>
          </div>

          {/* Timeline Item 2 */}
          <div className="border-l-2 border-gray-700 pl-8 pb-8">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
              <span className="text-gray-400 text-sm">2022 - 2024</span>
            </div>
            <p className="text-gray-300">Built production applications and AI-powered tools</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Developed SkripIn AI script generator with comprehensive testing</li>
              <li>• Created multiple web and mobile applications</li>
              <li>• Learned full-stack development through hands-on projects</li>
              <li>• Discovered passion for visual communication</li>
            </ul>
          </div>

          {/* Timeline Item 3 */}
          <div className="border-l-2 border-gray-700 pl-8">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">Career Foundations</h3>
              <span className="text-gray-400 text-sm">Previous</span>
            </div>
            <p className="text-gray-300">Early career transitions and learning</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Started in culinary arts (SMK Tata Boga)</li>
              <li>• Transitioned to programming through self-directed learning</li>
              <li>• Developed problem-solving and creative thinking skills</li>
              <li>• Now channeling these into visual storytelling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-300 text-lg mb-12">Compelling stories told through motion and sound</p>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
            <div className="bg-gray-900 aspect-video flex items-center justify-center">
              <p className="text-gray-500">Video 1 - YouTube/Vimeo embed or thumbnail</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Project Title Here</h3>
              <p className="text-gray-400 mb-4">Short project category: Corporate Video / Cinematic / Event / Music Video</p>
              <p className="text-gray-300 mb-6">
                Describe your project here. What was the creative challenge? What story did you tell? What techniques did you use? Include duration, client info, or any special achievements.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Cinematography</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Color Grading</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Sound Design</span>
              </div>
              <a href="#" className="secondary-button">
                Watch Full Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
            <div className="bg-gray-900 aspect-video flex items-center justify-center">
              <p className="text-gray-500">Video 2 - YouTube/Vimeo embed or thumbnail</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Project Title Here</h3>
              <p className="text-gray-400 mb-4">Short project category</p>
              <p className="text-gray-300 mb-6">
                Project description...
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag 1</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag 2</span>
              </div>
              <a href="#" className="secondary-button">
                Watch Full Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
            <div className="bg-gray-900 aspect-video flex items-center justify-center">
              <p className="text-gray-500">Video 3 - YouTube/Vimeo embed or thumbnail</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Project Title Here</h3>
              <p className="text-gray-400 mb-4">Short project category</p>
              <p className="text-gray-300 mb-6">
                Project description...
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag 1</span>
                <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Tag 2</span>
              </div>
              <a href="#" className="secondary-button">
                Watch Full Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text-gray-300 text-lg mb-12">Tools and techniques I've mastered</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Cinematography</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Camera Operation</li>
              <li>• Lighting Design</li>
              <li>• Composition & Framing</li>
              <li>• Shot Planning</li>
              <li>• Multi-cam Production</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Post-Production</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Video Editing (Adobe Premiere, DaVinci Resolve)</li>
              <li>• Color Grading</li>
              <li>• Motion Graphics (After Effects)</li>
              <li>• Audio Design & Mixing</li>
              <li>• VFX Integration</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Software & Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Adobe Creative Suite</li>
              <li>• DaVinci Resolve</li>
              <li>• Final Cut Pro</li>
              <li>• Blender</li>
              <li>• Adobe Audition</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Creative Direction</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Concept Development</li>
              <li>• Storyboarding</li>
              <li>• Visual Storytelling</li>
              <li>• Brand Narrative</li>
              <li>• Creative Problem-Solving</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Production</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Pre-production Planning</li>
              <li>• On-set Direction</li>
              <li>• Crew Management</li>
              <li>• Equipment Handling</li>
              <li>• Location Scouting</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg font-bold mb-4">Bonus: Developer Mindset</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Workflow Optimization</li>
              <li>• Version Control</li>
              <li>• System Architecture</li>
              <li>• Problem Analysis</li>
              <li>• Quality Assurance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gray-900 rounded-lg p-12 md:p-16 border border-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a corporate video, cinematic content, or visual storytelling expertise, let's collaborate and bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:cahyoprasetyo507@gmail.com" className="cta-button">
              Email Me
            </a>
            <a href="https://www.instagram.com" className="secondary-button">
              Instagram
            </a>
            <a href="https://www.youtube.com" className="secondary-button">
              YouTube
            </a>
            <a href="https://www.linkedin.com" className="secondary-button">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
          <p>© {currentYear} Agung Cahyo Prasetyo</p>
          <p className="text-sm mt-2">Videographer & Editor • Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
