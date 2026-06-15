import './globals.css'

export const metadata = {
  title: 'Well Woman Clinic | Women\'s Health & Preventive Care — NIBM, Pune',
  description: 'Well Woman Clinic in NIBM, Pune. Women\'s Health & Preventive Care. Open Monday to Sunday, 11:00 AM to 5:00 PM. Call 020-29910155.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
