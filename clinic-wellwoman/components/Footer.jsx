export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-playfair text-xl font-semibold text-[#E8B89A] mb-4">
              Well Woman Clinic
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Women's Health & Preventive Care in NIBM, Pune. Open every day of the week.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8B89A] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['#home', '#about', '#timings', '#contact'].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors capitalize"
                  >
                    {href.replace('#', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8B89A] mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                <a href="tel:02029910155" className="hover:text-white transition-colors">
                  020-29910155
                </a>
              </p>
              <p>1st Floor, Block-B8, 114,<br />Off NIBM Road, Opp. Kubera Colony,<br />Pune, Maharashtra 411048</p>
              <p>Mon – Sun: 11:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Well Woman Clinic. All rights reserved.</p>
          <p>Built by <span className="text-[#E8B89A]">Nexlo Systems</span></p>
        </div>
      </div>
    </footer>
  )
}
