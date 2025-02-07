"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8 md:p-16 lg:p-24 flex flex-col items-center space-y-10">
        <h1 className="text-5xl md:text-6xl font-bold text-mainAkzent mb-4 tracking-wide">About Me</h1>

        {/* 📸 Bild oben */}
        <img
          src="/images/hero-bg.png" // Ersetze mit deinem Bild
          alt="Timon"
          className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-full border-4 border-mainAkzent shadow-xl"
        />

        {/* 🌟 Textbereich */}
        <section className="w-full max-w-3xl bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 hover:shadow-3xl transition duration-300 space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Hi, I’m Timon—a passionate technology enthusiast with a curious mind and a strong drive to create. I thrive on new challenges, 
            adapt quickly to different environments, and connect easily with people. Currently, I’m studying Computer Science at 
            the Frankfurt University of Applied Sciences, where I focus on algorithms, programming, and problem-solving.
          </p>
          <p>
            My journey into tech began when I was 12, driven by my fascination with Minecraft. I wanted to create my own Minecraft 
            custom client in Java, even though I had no prior programming experience. That project was my first encounter with code—and 
            it sparked a passion that continues to grow. Alongside my love for technology, I’ve always enjoyed creative work, like 
            running my own YouTube and Twitch channels.
          </p>
          <p>
            Today, I enjoy building software and applications that combine functionality with creativity. Whether it’s developing games, 
            command-line tools, or dynamic web applications, I love turning ideas into reality. I’m also highly interested in cybersecurity, 
            fascinated by how systems work behind the scenes. In my free time, you’ll often find me exploring platforms like Hack The Box 
            and TryHackMe to sharpen my ethical hacking skills.
          </p>
          <p>
            My tech stack includes Python, Java, C, C++, Next.js, Tailwind CSS, HTML, and CSS. I’m always eager to expand my knowledge, 
            explore new tools, and take on challenging projects. One day, I’d love to work at companies like Apple or contribute to cybersecurity 
            initiatives at a governmental level. Until then, I’m focused on growing, learning, and building connections with like-minded people.
          </p>
          <p className="text-mainAkzent font-semibold text-xl text-center">
            Let’s build something impactful together!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}