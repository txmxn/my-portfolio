"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header /> {/* Wiederverwendeter Header */}

      <main className="flex-grow p-8 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-mainAkzent mb-6">About Me</h1>
        <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed">
          Hi, I'm Timon! I'm passionate about technology, software development, and hacking.
          Whether it's coding with Raspberry Pi, building web apps, or exploring new tech,
          I love pushing boundaries and creating cool projects.
        </p>
      </main>

      <Footer /> {/* Wiederverwendeter Footer */}
    </div>
  );
}