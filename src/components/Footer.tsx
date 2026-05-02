export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/20 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="text-lg font-bold tracking-tight text-foreground">The Audio Lounge</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
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
