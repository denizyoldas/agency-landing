'use client'

const MENU = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Client', href: '#client' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
]

export default function Header() {
  return (
    <header className="bg-white pt-12 pb-8">
      <div className="flex items-center justify-center md:justify-between">
        <h1 className="text-3xl font-bold">Digital Agency</h1>
        <nav className="hidden space-x-4 md:flex">
          {MENU.map(item => (
            <a
              href={item.href}
              className="text-teks hover:underline"
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
