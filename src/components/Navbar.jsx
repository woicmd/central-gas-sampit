import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Tentang',  href: '#tentang'  },
  { label: 'Produk',   href: '#produk'   },
  { label: 'Mitra',    href: '#mitra'    },
  { label: 'Galeri',   href: '#galeri'   },
  { label: 'Kontak',   href: '#kontak'   },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-brand-dark'}
        border-b-2 border-brand-yellow`}
    >
      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 rounded-lg bg-brand-yellow flex items-center justify-center
                          text-brand-dark font-bold text-sm tracking-tight select-none">
            CGS
          </div>
          <span className="text-white font-semibold text-base leading-tight hidden sm:block">
            Central Gas <span className="text-brand-yellow">Sampit</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/70 hover:text-brand-yellow text-sm transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#pesan"
          className="hidden lg:block bg-brand-yellow text-brand-dark text-sm font-semibold
                     px-5 py-2 rounded-lg hover:bg-brand-yellow-light transition-colors duration-200 no-underline"
        >
          Pesan Sekarang
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white/80 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-brand-dark border-t border-white/10 px-5 pb-5 pt-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLink}
              className="text-white/70 hover:text-brand-yellow text-sm py-2.5 border-b
                         border-white/5 transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pesan"
            onClick={handleLink}
            className="mt-3 bg-brand-yellow text-brand-dark text-sm font-semibold
                       px-5 py-3 rounded-lg text-center hover:bg-brand-yellow-light
                       transition-colors duration-200 no-underline"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
  )
}
