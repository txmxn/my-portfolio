"use client";
import { useRef } from "react";
// components/Projects.js
const projectsData = [
    {
        id: 1,
        imageSrc: "images/encoder.png",
        altText: "Encoder",
        description: "Encoder",
    },
    {
        id: 2,
        imageSrc: "images/encoder.png",
        altText: "Project 2",
        description: "Test2",
    },
    {
        id: 3,
        imageSrc: "images/encoder.png",
        altText: "Project 3",
        description: "Test3",
    },
    {
        id: 4,
        imageSrc: "images/encoder.png",
        altText: "Project 3",
        description: "Test3",
    },
    {
        id: 5,
        imageSrc: "images/encoder.png",
        altText: "Project 3",
        description: "Test3",
    },
    {
        id: 6,
        imageSrc: "images/encoder.png",
        altText: "Project 3",
        description: "Test3",
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
            <div className="container px-10 mx-auto max-w-screen-xl">
                <h1 className="text-white pt-10 pb-2 text-4xl font-bold text-center text-opacity-70">
                    My Projects<span className="text-mainAkzent"></span> 
                </h1>
                <p className="text-white text-center text-opacity-30 text-xs">
                    Used languages: C, C++, Python, Next.js, Java
                </p>

                <div className="relative w-full">
                    {/*Linker Pfeil */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                    >
                        &#8592;
                    </button>

                    {/* Hier wird der Container referenziert */}
                    <div ref={scrollContainerRef} className="overflow-x-auto">
                        <div className="flex flex-nowrap gap-8 justify-start pt-6">
                            {projectsData.map((project) => (
                                <div key={project.id} className="flex flex-col items-center flex-shrink-0 w-64 transform transition-transform duration-200 hover:scale-105">
                                    <img src={project.imageSrc} alt={project.altText} className="h-48" />
                                    <p className="text-white text-base mt-2">{project.description}</p> 
                                </div>   
                            ))}
                        </div>
                    </div>

                    {/* Rechter Pfeil */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
}