"use client";
import { translations } from "./i18n";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// components/Header.js
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);
  const [language, setLanguage] = useState("en");

  // Automatische Spracherkennung
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.startsWith("de") ? "de" : "en";
        setLanguage(browserLang);
        localStorage.setItem("lang", browserLang);
      }
  }, []
);
  
  // Sprachumschalter
  const toggleLanguage = () => {
    const newLang = language === "en" ? "de" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
    window.location.reload(); // Damit die Sprache nach Umschalten neu geladen wird
  };

  const t = translations[language].header;

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
    <header className="w-full p-4 bg-black text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 rounded-b-md">
      
    {/* Sprachumschalter oben links */}
    <div
      className="cursor-pointer text-sm hover:text-mainAkzent"
      onClick={toggleLanguage}
    >
      {language === "en" ? "EN | DE" : "DE | EN"}
    </div>

    <nav>
      <ul className="flex gap-4">
        <li>
          <button onClick={() => handleNavigation("home")} className="hover:text-mainAkzent">{t.home}</button>
        </li>
        <li>
          <Link href="/about" className="hover:text-mainAkzent">{t.about}</Link>
        </li>
        <li>
          <button onClick={() => handleNavigation("projects")} className="hover:text-mainAkzent">{t.projects}</button>
        </li>
        <li>
          <button onClick={() => handleNavigation("contact")} className="hover:text-mainAkzent">{t.contact}</button>
        </li>
      </ul>
    </nav>
  </header>
);
}