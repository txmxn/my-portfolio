// components/Header.js
export default function Header() {
    return (
      <header className="w-full p-4 bg-black text-white flex justify-center items-center fixed top-0 left-0 right-0 z-50 rounded-b-md"> 
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="hover:text-mainAkzent">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-mainAkzent">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-mainAkzent">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-mainAkzent">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }