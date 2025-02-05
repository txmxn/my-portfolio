// components/HeroSection.js
export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-0 bg-black-900">
        {/* Container, der den Inhalt begrenzt (max-width) und zentriert */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Linke Spalte: Text */}
          <div className="pl-20 md:w-1/2 flex flex-col">
            <h1 className="text-7xl font-bold mb-4">Hi, I am <span className="text-mainAkzent text-glow">Timon</span></h1>
            <p className="mb-4">
              Welcome to my digital playground, where I show my projects
            </p>
            <div className="flex gap-4">
              <a 
                href=""
                className="bg-black-500 text-mainAkzent px-10 py-3 rounded transform transition-transform duration-300 hover:scale-105 w-fit border border-mainAkzent">
                Show CV
              </a>
              <a 
                href="#projects" 
                className="bg-mainAkzent text-white px-6 py-3 rounded transform transition-transform duration-300 hover:scale-105 w-fit"
              >
                My Projects
              </a>
            </div>  
          </div>

          {/* Rechte Spalte: Bild */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/hero-bg.png" 
              alt="Timon Portät" 
              className="object-contain h-120 w-auto"
            />
          </div>
        </div>
      </section>
    );
}