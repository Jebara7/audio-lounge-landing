export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-navy px-6 py-16">
      <div className="container-wide flex flex-col items-center justify-between gap-8 md:flex-row">
        <span className="text-xl font-bold tracking-tight text-white">The Audio Lounge</span>
        <nav className="flex gap-8 text-sm text-white/50">
          <a href="#" className="transition-colors hover:text-white">Home</a>
          <a href="#studio" className="transition-colors hover:text-white">Studio</a>
          <a href="#prijzen" className="transition-colors hover:text-white">Prijzen</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-white/40">© 2026 The Audio Lounge. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
