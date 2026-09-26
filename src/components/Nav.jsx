const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-lg tracking-tight text-bone">
          MONYCHAN MOM
        </a>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-smoke transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-blood px-4 py-2 font-body text-sm text-bone transition-colors hover:bg-blood"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}
