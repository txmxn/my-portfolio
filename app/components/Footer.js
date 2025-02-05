// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Oberer Bereich mit Infos & Links */}
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                {/* Brand + kurzer Beschreibungstext */}
                <div>
                    <h2 className="text-xl font-bold">Timon Kayser</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Coding Enthusiast, always curious about new technologies.
                    </p>
                </div>

                {/* Navigation / Quick Links */}
                <nav>
                    <ul className="flex flex-col md:flex-row gap-4">
                        <li>   
                            <a href="#home" className="hover:text-green-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-green-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-green-500">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-green-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Unterer Bereich: Copyright */}
                <div className="border-t border-gray-700 py-4">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                        <p>© {new Date().getFullYear()} Timon Kayser. All rights reserved.</p>
                        <p>
                            Built with <span className="text-green-500">Next.js</span> &amp;{' '}
                            <span className="text-green-500">Tailwind</span>
                        </p>
                    </div>
                </div>
        </footer>
    );
}