// components/Projects.js
export default function Projects() {
    return (
        <section className="w-full min-h-96 flex items-start justify-center px-4 bg-dunkelgrau">
            <div className="">
                <h1 className="text-white pt-10 pb-2 text-4xl font-bold text-center">
                    My <span className="text-mainAkzent">projects</span> 
                </h1>
                <p className="text-white text-center">
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