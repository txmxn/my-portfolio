// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Unterer Bereich: Copyright */}
            <div className="border-t border-gray-700 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                    {/* Linker Bereich: Copyright */}
                    <div>
                        <p>© {new Date().getFullYear()} Timon Kayser. All rights reserved.</p>
                    </div>

                    {/* Rechter Bereich: Built with & Icons8 */}
                    <div className="flex flex-col items-end text-right">
                        <p>
                            Built with <span className="text-mainAkzent">Next.js</span> &amp;{' '}
                            <span className="text-mainAkzent">Tailwind</span>
                        </p>
                        <p>
                            Icons by{' '}
                            <a
                                href="https://icons8.com"
                                target="_blank"
                                rel="noreferrer"
                                className="underline hover:text-mainAkzent"
                            >
                                Icons8
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}