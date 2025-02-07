"use client";
import { useEffect } from "react";
// components/HeroSection.js
export default function HeroSection() {
  useEffect(() => {
    const video = document.querySelector("#home video");

    if (video) {
      video.playbackRate = 0.5;
    }
  }, []);
    return (
        <section id="home" className="relative w-full min-h-[60vh] flex items-center justify-center md:pr-0 pt-20 md:pt-6 bg-black overflow-hidden">
          {/* 🎥 Video-Hintergrund */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          >
          <source src="/videos/matrix.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* Container, der den Inhalt begrenzt (max-width) und zentriert */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          {/* Linke Spalte: Text */}
          <div className="px-14 md:w-1/2 flex flex-col md:ml-4 md:mb-28">
            <h1 className="text-7xl font-bold mb-2">Hi, I'm <span className="text-mainAkzent text-glow">Timon</span></h1>
            <p className="mb-6">
              Computer Science & Cyber Security Student 🚀
            </p>
            <div className="flex gap-4">
              <a 
                href="/about"
                className="text-mainAkzent px-8 md:px-16 py-3 rounded transform transition-transform duration-300 hover:scale-105 w-fit border border-mainAkzent">
                About Me
              </a>
              <a 
                href="#projects" 
                className="bg-mainAkzent text-white px-8 md:px-4 py-3 rounded transform transition-transform duration-300 hover:scale-105 w-fit"
              >
                My Projects
              </a>
            </div>  
          </div>

          {/* Rechte Spalte: Bild */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/hero-bg.png" 
              alt="Timon Portrait" 
              loading="lazy"
              className="object-contain md:h-120 w-auto"
            />
          </div>
        </div>
      </section>
    );
}