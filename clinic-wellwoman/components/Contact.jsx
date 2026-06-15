'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8B4F6B] mb-4 block">
            Contact
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-6">
            Get in Touch
          </h2>
          <p className="text-[#555] leading-relaxed mb-10">
            We're here to support your health journey. Reach out by phone or send us a message and we'll get back to you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#8B4F6B]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#8B4F6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-1">Phone</p>
                <a href="tel:02029910155" className="text-lg font-semibold text-[#1A1A1A] hover:text-[#8B4F6B] transition-colors">
                  020-29910155
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#8B4F6B]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#8B4F6B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/02029910155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[#1A1A1A] hover:text-[#8B4F6B] transition-colors"
                >
                  Message Us
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#8B4F6B]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#8B4F6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-1">Address</p>
                <p className="text-[#1A1A1A] leading-relaxed">
                  1st Floor, Block-B8, 114, Off NIBM Road,<br />
                  Opp. Kubera Colony, Pune, Maharashtra 411048
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div ref={ref} className="fade-in bg-[#FDF6F0] p-8 md:p-10 rounded-3xl border border-[#E8B89A]/20">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-[#8B4F6B]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#8B4F6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#1A1A1A] mb-3">Message Sent</h3>
              <p className="text-[#555]">Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="font-playfair text-2xl font-semibold text-[#1A1A1A] mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-[#E8B89A]/40 rounded-xl text-[#1A1A1A] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#8B4F6B]/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your mobile number"
                    className="w-full px-4 py-3 bg-white border border-[#E8B89A]/40 rounded-xl text-[#1A1A1A] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#8B4F6B]/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#8B4F6B] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-white border border-[#E8B89A]/40 rounded-xl text-[#1A1A1A] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#8B4F6B]/30 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#8B4F6B] text-white font-semibold rounded-xl hover:bg-[#7a4460] transition-all shadow-md active:scale-95"
                >
                  Send Inquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
