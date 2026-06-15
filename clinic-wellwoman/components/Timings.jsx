'use client'

import { useEffect, useRef } from 'react'

export default function Timings() {
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

  const timings = [
    { day: 'Monday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: '11:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: '11:00 AM – 5:00 PM' },
  ]

  return (
    <section id="timings" className="py-24 px-6 md:px-12 bg-[#FDF6F0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B4F6B] mb-3 block">
            Visit Us
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A]">
            Timings & Location
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timings */}
          <div ref={leftRef} className="fade-in bg-white rounded-3xl p-8 shadow-sm border border-[#E8B89A]/20">
            <h3 className="font-playfair text-2xl font-semibold text-[#1A1A1A] mb-6">Clinic Hours</h3>
            <ul className="space-y-3">
              {timings.map(({ day, hours }) => (
                <li key={day} className="flex justify-between items-center py-3 border-b border-[#F0E8E0] last:border-0">
                  <span className="text-sm font-medium text-[#1A1A1A]">{day}</span>
                  <span className="text-sm font-semibold text-[#8B4F6B]">{hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-[#FDF6F0] rounded-2xl">
              <p className="text-sm text-[#555]">
                📍 1st Floor, Block-B8, 114, Off NIBM Road,<br />
                Opp. Kubera Colony, Pune, Maharashtra 411048
              </p>
            </div>
          </div>

          {/* Map */}
          <div ref={rightRef} className="fade-in bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8B89A]/20 min-h-[400px]">
            <div className="p-5 flex items-center justify-between border-b border-[#F0E8E0]">
              <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A]">Find Us</h3>
              <a
                href="https://www.google.com/maps/dir//18.4761265,73.8941865"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8B4F6B] hover:underline flex items-center gap-1"
              >
                Get Directions →
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.450146039!2d73.8941865!3d18.4761265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzM0LjEiTiA3M8KwNTMnMzguNyJF!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Well Woman Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
