"use client";
import Link from "next/link";
import { useRef } from "react";
// components/Projects.js
const projectsData = [
    {
        id: 1,
        imageSrc: "images/projects/my_portfolio.png",
        link: "https://github.com/txmxn/my-portfolio",
        altText: "Portfolio Website",
        description: "Portfolio Website",
    },
    
];

export default function Projects() {
    // Mit useRef holen wir uns eine Referenz auf den scrollbaren Container
    const scrollContainerRef = useRef(null);

    // Diese Funktion wird beim Klick auf einen Pfeil aufgerufen und scrollt den Container
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
        // Wir scrollen 300 Pixel nach links oder rechts, je nachdem, welcher Button gedrückt wurde
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
    return (
        <section id="projects" className="bg-dunkelgrau min-h-96 py-10">
            <div className="container px-10 py-4 mx-auto max-w-screen-xl">
                <h1 className="text-white pb-2 text-4xl font-bold text-center text-opacity-70">
                    My Projects<span className="text-mainAkzent"></span> 
                </h1>
                <p className="text-white text-center text-opacity-30 text-xs">
                    Used languages: Next.js, JavaScript, HTML, CSS
                </p>

                <div className="relative w-full">
                    {/*Linker Pfeil */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 w-10 h-10 items-center justify-center flex -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 shadow-md hover:bg-gray-600 transition-colors duration-200"
                    >
                        &#8592;
                    </button>

                    {/* Hier wird der Container referenziert */}
                    <div ref={scrollContainerRef} className="overflow-x-auto">
                        <div className="flex flex-nowrap gap-8 justify-center pt-6">
                            {projectsData.map((project) => (
                                <div key={project.id} className="flex flex-col items-center flex-shrink-0 w-64 transform transition-transform duration-200 hover:scale-105">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"> {/* Klickbarer Bereich */}
                                        <img src={project.imageSrc} alt={project.altText} className="h-48" />
                                        <p className="text-white text-center text-base mt-2">{project.description}</p> 
                                    </a>
                                </div>   
                            ))}
                        </div>
                    </div>

                    {/* Rechter Pfeil */}
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