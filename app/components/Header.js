// components/Header.js
export default function Header() {
    return (
      <header className="w-full p-4 bg-black-500 text-white flex justify-between items-center fixed top-0 left-0 right-0">
        <h2 className="text-xl font-bold">Timon Kayser</h2>
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