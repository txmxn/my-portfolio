import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}