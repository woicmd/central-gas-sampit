import { ShieldCheck, Truck, Award } from 'lucide-react'

const highlights = [
  { icon: ShieldCheck, label: 'Bersertifikat'  },
  { icon: Truck,       label: 'Pengiriman Cepat' },
  { icon: Award,       label: 'Kualitas Terjamin' },
]

export default function About() {
  return (
    <section id="tentang" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image placeholder */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden bg-brand-green-light
                            aspect-[4/3] flex items-center justify-center">
              {/*
                Ganti div ini dengan:
                <img src="/images/about.jpg" alt="Fasilitas Central Gas Sampit"
                     className="w-full h-full object-cover" />
              */}
              <div className="flex flex-col items-center gap-3 text-brand-green/40">
                <div className="w-16 h-16 rounded-full border-2 border-brand-green/30
                                flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-brand-green/30" />
                </div>
                <span className="text-xs tracking-widest uppercase">Foto Perusahaan</span>
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="flex items-center gap-2 text-xs tracking-widest uppercase
                          text-brand-green-mid font-medium mb-4">
              <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
              Tentang Kami
            </p>

            <h2 className="text-brand-dark font-bold text-3xl sm:text-4xl leading-tight mb-5">
              Central Gas Sampit
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-4">
              {/* Ganti paragraf ini dengan deskripsi perusahaan */}
              [DESKRIPSI PERUSAHAAN — ceritakan sejarah singkat, tahun berdiri,
              dan komitmen perusahaan dalam menyediakan gas oksigen berkualitas
              untuk masyarakat Kalimantan Tengah.]
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              [PARAGRAF KEDUA — visi, misi, atau nilai-nilai perusahaan.]
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-brand-green-light
                             px-4 py-2.5 rounded-lg"
                >
                  <Icon size={16} className="text-brand-green flex-shrink-0" />
                  <span className="text-brand-green-dark text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
