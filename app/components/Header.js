"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// components/Header.js
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    if (scrollTarget && pathname === "/") {
      const element = document.getElementById(scrollTarget);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setScrollTarget(null); // Reset nach dem Scroll
        }, 50); // Leichte Verzögerung für sauberen Scroll
      }
    }
  }, [pathname, scrollTarget]);

  const handleNavigation = (id) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      setScrollTarget(id);
      router.push("/"); // Navigiert zur Startseite
    }
  };
  return (
      <header className="w-full p-4 bg-black text-white flex justify-center items-center fixed top-0 left-0 right-0 z-50 rounded-b-md"> 
        <nav>
          <ul className="flex gap-4">
            <li>
            <button onClick={() => handleNavigation("home")} className="hover:text-mainAkzent">Home</button>
            </li>
            <li>
              <Link href="/about" className="hover:text-mainAkzent">About</Link>
            </li>
            <li>
              <button onClick={() => handleNavigation("projects")} className="hover:text-mainAkzent">Projects</button>
            </li>
            <li>
              <button onClick={() => handleNavigation("contact")} className="hover:text-mainAkzent">Contact</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }