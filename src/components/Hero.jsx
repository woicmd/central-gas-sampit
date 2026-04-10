import { ArrowRight, Phone } from 'lucide-react'

const stats = [
  { number: '[TAHUN]',  label: 'Tahun Berdiri'    },
  { number: '[XX]+',    label: 'Klien Aktif'       },
  { number: '[XX]+',    label: 'Pengiriman / Bulan' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-brand-dark flex items-center pt-16 px-5 overflow-hidden relative"
    >
      {/* Subtle bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full
                        bg-brand-green/20 blur-[120px]" />
        <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] rounded-full
                        bg-brand-yellow/8 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6
                            bg-brand-yellow/10 border border-brand-yellow/30
                            px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-brand-yellow text-xs tracking-widest uppercase font-medium">
                Penyedia Gas Oksigen
              </span>
            </div>

            <h1 className="text-white font-bold leading-tight mb-2
                           text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Central Gas
            </h1>
            <h1 className="text-brand-yellow font-bold leading-tight mb-6
                           text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Sampit
            </h1>

            {/* Tagline — ganti [TAGLINE] dengan tagline resmi */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              [TAGLINE]
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2
                           bg-brand-yellow text-brand-dark font-semibold text-sm
                           px-6 py-3 rounded-lg hover:bg-brand-yellow-light
                           transition-colors duration-200 no-underline"
              >
                Lihat Produk
                <ArrowRight size={16} />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2
                           border border-white/25 text-white font-semibold text-sm
                           px-6 py-3 rounded-lg hover:border-brand-yellow hover:text-brand-yellow
                           transition-colors duration-200 no-underline"
              >
                <Phone size={15} />
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="flex flex-row lg:flex-col gap-4 flex-wrap justify-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-4 border-brand-yellow bg-white/5
                           px-5 py-4 rounded-r-lg min-w-[140px]"
              >
                <div className="text-brand-yellow font-bold text-2xl leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-xs leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/25 text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-white/15" />
      </div>
    </section>
  )
}
