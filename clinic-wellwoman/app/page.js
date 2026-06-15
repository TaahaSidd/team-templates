import Navbar from '/components/Navbar.jsx'
import Hero from '/components/Hero.jsx'
import About from '/components/About.jsx'
import Timings from '/components/Timings.jsx'
import Contact from '/components/Contact.jsx'
import Footer from '/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timings />
      <Contact />
      <Footer />
    </main>
  )
}
