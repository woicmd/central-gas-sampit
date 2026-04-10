import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { gallery } from '../data/gallery'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galeri" className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase
                        text-brand-green-mid font-medium mb-4">
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
            Galeri
          </p>
          <h2 className="text-brand-dark font-bold text-3xl sm:text-4xl leading-tight mb-2">
            Fasilitas &amp; Kegiatan
          </h2>
          <p className="text-gray-500 text-sm">
            Klik foto untuk memperbesar.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {gallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`
                relative overflow-hidden rounded-xl group cursor-zoom-in text-left
                ${item.size === 'large' ? 'col-span-2 aspect-video' : 'aspect-square'}
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-105"
                onError={(e) => {
                  // Fallback placeholder jika foto belum ada
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder — tersembunyi jika foto ada */}
              <div
                className="hidden w-full h-full bg-brand-green-light items-center
                           justify-center flex-col gap-2 text-brand-green/40"
                style={{ display: 'none' }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-brand-green/30" />
                <span className="text-xs tracking-wide">{item.alt}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30
                              transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-brand-dark/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white
                       bg-white/10 hover:bg-white/20 rounded-full p-2
                       transition-colors duration-200"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>

          <img
            src={active.src}
            alt={active.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 text-white/50 text-sm">
            {active.alt}
          </p>
        </div>
      )}
    </section>
  )
}
