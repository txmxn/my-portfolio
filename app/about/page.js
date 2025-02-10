"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { translations } from "../components/i18n";

export default function AboutPage() {
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

  const t = translations[language]?.about;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header language={language} setLanguage={setLanguage} />

      <main className="flex-grow p-8 md:p-16 lg:p-24 flex flex-col items-center space-y-10">
        <h1 className="text-5xl md:text-6xl font-bold text-mainAkzent mb-4 tracking-wide">
          {t?.title || "About Me"}
        </h1>

        {/* 📸 Bild oben */}
        <img
          src="/images/hero-bg.png"
          alt="Timon"
          className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-full border-4 border-mainAkzent shadow-xl"
        />

        {/* 🌟 Textbereich */}
        <section className="w-full max-w-3xl bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 hover:shadow-3xl transition duration-300 space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>{t?.intro}</p>
          <p>{t?.studies}</p>
          <p>{t?.journey}</p>
          <p>{t?.today}</p>
          <p>{t?.techStack}</p>
          <p className="text-mainAkzent font-semibold text-xl text-center">
            {t?.closing}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}