"use client";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function HomePage() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.startsWith("de") ? "de" : "en";
      setLanguage(browserLang);
    }
  }, []);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}