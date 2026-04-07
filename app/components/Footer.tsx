export default function Footer() {
    return (
        <footer className="py-12 border-t-2 border-neutral-800 bg-black">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-neutral-400 mb-2">
                    © {new Date().getFullYear()} Agung Cahyo Prasetyo
                </p>
                <p className="text-sm text-neutral-600">
                    Videographer & Editor • Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
