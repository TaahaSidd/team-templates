'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Timings', href: '#timings' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FDF6F0]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-playfair text-xl font-semibold text-[#8B4F6B] tracking-tight">
          Well Woman Clinic
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#8B4F6B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:02029910155"
            className="ml-4 px-5 py-2 bg-[#8B4F6B] text-white text-sm font-semibold rounded-full hover:bg-[#7a4460] transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#8B4F6B]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDF6F0] border-t border-[#E8B89A]/30 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#8B4F6B] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:02029910155"
            className="mt-2 px-5 py-2 bg-[#8B4F6B] text-white text-sm font-semibold rounded-full text-center hover:bg-[#7a4460] transition-colors"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
