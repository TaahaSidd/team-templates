'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div ref={leftRef} className="fade-in relative flex justify-center">
          <div className="relative w-full max-w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-xl">
            <Image
              src="/doctor.jpg"
              alt="Doctor at Well Woman Clinic"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E8B89A]/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Text */}
        <div ref={rightRef} className="fade-in">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B4F6B] mb-4 block">
            About Us
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-6 leading-snug">
            Well Woman Clinic
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Located in the heart of NIBM, Pune, Well Woman Clinic is a dedicated healthcare center focused on Women's Health & Preventive Care. We are committed to providing a safe, comfortable, and professional environment for every patient.
          </p>
          <p className="text-[#555] leading-relaxed mb-10">
            Our clinic is open seven days a week to ensure that care is always accessible when you need it most.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#FDF6F0] p-5 rounded-2xl">
              <p className="font-playfair text-2xl font-bold text-[#8B4F6B]">7 Days</p>
              <p className="text-sm text-[#555] mt-1">A Week, Including Sundays</p>
            </div>
            <div className="bg-[#FDF6F0] p-5 rounded-2xl">
              <p className="font-playfair text-2xl font-bold text-[#8B4F6B]">NIBM</p>
              <p className="text-sm text-[#555] mt-1">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
