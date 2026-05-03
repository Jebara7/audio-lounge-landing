import { useState } from "react";

const BOOKING_URL = "https://cal.com/your-link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-navy text-navy-foreground">
      <div className="container-wide flex items-center justify-between py-5">
        <a href="/" className="text-xl font-bold tracking-tight">
          The Audio Lounge
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <a href="#studio" className="text-sm text-white/70 transition-colors hover:text-white">Studio</a>
          <a href="#prijzen" className="text-sm text-white/70 transition-colors hover:text-white">Prijzen</a>
          <a href="#over-ons" className="text-sm text-white/70 transition-colors hover:text-white">Over ons</a>
          <a href="#contact" className="text-sm text-white/70 transition-colors hover:text-white">Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-3 px-6">
            Boek een studio
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-navy px-6 py-6 lg:hidden flex flex-col gap-4">
          <a href="#studio" onClick={() => setOpen(false)} className="text-sm text-white/70">Studio</a>
          <a href="#prijzen" onClick={() => setOpen(false)} className="text-sm text-white/70">Prijzen</a>
          <a href="#over-ons" onClick={() => setOpen(false)} className="text-sm text-white/70">Over ons</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-white/70">Contact</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs text-center">
            Boek een studio
          </a>
        </div>
      )}
    </nav>
  );
}
