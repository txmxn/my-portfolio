// components/Header.js
export default function Header() {
    return (
      <header className="w-full p-4 bg-black text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 rounded-b-md">
        <div className="flex items-center gap-2">
          <img 
            src="/images/portfolio.png"
            alt="portfolio-icon"
            className="h-6"
          />
          <h2 className="text-xl font-bold">My Portfolio</h2>
        </div>  
        <nav>
          <ul className="flex gap-4">
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
      </header>
    );
  }