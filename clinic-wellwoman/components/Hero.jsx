'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#FDF6F0] pt-24 pb-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div ref={ref} className="fade-in">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#8B4F6B] mb-6 border border-[#E8B89A] px-4 py-1 rounded-full">
            NIBM, Pune
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
            Women's Health &<br />
            <span className="text-[#8B4F6B]">Preventive Care</span>
          </h1>
          <p className="text-lg text-[#555] leading-relaxed mb-10 max-w-lg">
            Well Woman Clinic is dedicated to providing compassionate, specialized healthcare for women — right here in NIBM, Pune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/02029910155"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#8B4F6B] text-white font-semibold rounded-full hover:bg-[#7a4460] transition-all shadow-md active:scale-95"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="tel:02029910155"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#8B4F6B] text-[#8B4F6B] font-semibold rounded-full hover:bg-[#8B4F6B]/5 transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              020-29910155
            </a>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="relative hidden lg:flex justify-center">
          <div className="relative w-[400px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/doctor.jpg"
              alt="Doctor at Well Woman Clinic"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating card */}
          <div className="absolute bottom-8 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-[#E8B89A]/30">
            <p className="font-playfair text-[#8B4F6B] font-semibold text-sm">Open Daily</p>
            <p className="text-xs text-[#555] mt-1">Mon – Sun · 11 AM – 5 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
