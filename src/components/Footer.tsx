export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] bg-secondary px-6 py-16">
      <div className="container-wide flex flex-col items-center justify-between gap-8 md:flex-row">
        <span className="text-xl font-bold tracking-tight text-foreground">The Audio Lounge</span>
        <nav className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Home</a>
          <a href="#studio" className="transition-colors hover:text-foreground">Studio</a>
          <a href="#prijzen" className="transition-colors hover:text-foreground">Prijzen</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 The Audio Lounge. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
}
