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
];

export default function Projects() {
    return (
        <section id="projects" className="w-full min-h-96 flex items-start justify-center px-4 bg-dunkelgrau">
            <div className="">
                <h1 className="text-white pt-10 pb-2 text-4xl font-bold text-center text-opacity-70">
                    My Projects<span className="text-mainAkzent"></span> 
                </h1>
                <p className="text-white text-center text-opacity-30 text-xs">
                    Used languages: C, C++, Python, Next.js, Java
                </p>
                <div className="flex flex-wrap gap-8 justify-center pt-6">
                    {projectsData.map((project) => (
                        <div key={project.id} className="flex flex-col items-center">
                            <img src={project.imageSrc} alt={project.altText} className="h-48" />
                            <p className="text-white text-base mt-2">{project.description}</p> 
                        </div>   
                    ))}
                </div>

            </div>
        </section>
    );
}