import { partners } from '../data/partners'
import { Building2 } from 'lucide-react'

export default function Partners() {
  return (
    <section id="mitra" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase
                        text-brand-green-mid font-medium mb-4">
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
            Mitra Perusahaan
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
          </p>
          <h2 className="text-brand-dark font-bold text-3xl sm:text-4xl leading-tight">
            Dipercaya oleh Berbagai Instansi
          </h2>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="border border-gray-100 rounded-xl p-5 flex items-center justify-center
                         min-h-[80px] hover:border-brand-green/30 hover:bg-brand-green-light/30
                         transition-all duration-200 group"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 w-auto object-contain grayscale
                             group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-center">
                  <Building2 size={20} className="text-gray-300 group-hover:text-brand-green
                                                   transition-colors duration-200" />
                  <span className="text-gray-400 text-xs font-medium leading-tight
                                   group-hover:text-brand-green-dark transition-colors duration-200">
                    {partner.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
