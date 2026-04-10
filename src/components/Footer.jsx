import { MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Tentang',  href: '#tentang'  },
  { label: 'Produk',   href: '#produk'   },
  { label: 'Mitra',    href: '#mitra'    },
  { label: 'Galeri',   href: '#galeri'   },
  { label: 'Kontak',   href: '#kontak'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-yellow flex items-center justify-center
                              text-brand-dark font-bold text-sm select-none">
                CGS
              </div>
              <span className="text-white font-semibold text-base">
                Central Gas <span className="text-brand-yellow">Sampit</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              [TAGLINE]
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white/60 text-xs font-medium uppercase tracking-widest mb-5">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-yellow text-sm
                               transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak singkat */}
          <div>
            <h4 className="text-white/60 text-xs font-medium uppercase tracking-widest mb-5">
              Kontak
            </h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-snug">
                  [ALAMAT LENGKAP PERUSAHAAN]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-brand-yellow flex-shrink-0" />
                <span className="text-white/50 text-sm">[NOMOR TELEPON]</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-brand-yellow flex-shrink-0" />
                <span className="text-white/50 text-sm">[EMAIL_PERUSAHAAN]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} Central Gas Sampit. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-white/25 text-xs">Sampit, Kalimantan Tengah</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
