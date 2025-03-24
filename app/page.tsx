import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Socials from './components/Social';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Socials />
      <Experience />
      <Contact />
    </main>
  )
}
