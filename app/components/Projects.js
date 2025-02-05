// components/Projects.js
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
                <div className="flex flex-wrap gap-4 justify-center pt-6">
                    <img src="images/encoder.png" alt="En/Decoder" className="h-48" />
                    <img src="images/encoder.png" alt="Project 2" className="h-48" />
                    <img src="images/encoder.png" alt="Project 3" className="h-48" />
                </div>
                
            </div>
        </section>
    );
}