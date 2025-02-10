"use client";
import Link from "next/link";
import { useRef } from "react";
import { translations } from "./i18n";  // Import der Übersetzungen

const projectsData = [
    {
        id: 1,
        imageSrc: "images/projects/my_portfolio.png",
        link: "https://github.com/txmxn/my-portfolio",
        altText: "Portfolio Website",
        description: "Portfolio Website",
    },
];

export default function Projects({ language }) {
    const scrollContainerRef = useRef(null);
    const t = translations[language]?.projects; // Übersetzungen für die Projects Section

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="projects" className="bg-dunkelgrau min-h-96 py-10">
            <div className="container px-10 py-4 mx-auto max-w-screen-xl">
                <h1 className="text-white pb-2 text-4xl font-bold text-center text-opacity-70">
                    {t?.title || "Projects"} {/* Falls Übersetzung fehlt, fallback */}
                </h1>
                <p className="text-white text-center text-opacity-30 text-xs">
                    {t?.usedLanguages || "Used languages: Next.js, JavaScript, HTML, CSS"}
                </p>

                <div className="relative w-full">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 w-10 h-10 items-center justify-center flex -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600 transition-colors duration-200"
                    >
                        &#8592;
                    </button>

                    <div ref={scrollContainerRef} className="overflow-x-auto">
                        <div className="flex flex-nowrap gap-8 justify-center pt-6">
                            {projectsData.map((project) => (
                                <div key={project.id} className="flex flex-col items-center flex-shrink-0 w-64 transform transition-transform duration-200 hover:scale-105">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.imageSrc} alt={project.altText} className="h-48" />
                                        <p className="text-white text-center text-base mt-2">{project.description}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 w-10 h-10 items-center justify-center flex -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600 transition-colors duration-200"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
}