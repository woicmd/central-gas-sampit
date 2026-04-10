import {
  HeartPulse, Factory, FlaskConical, Wind,
  Flame, Beaker, Zap, Package,
} from 'lucide-react'
import { products } from '../data/products'

// Map nama ikon (string) ke komponen Lucide
const iconMap = {
  HeartPulse, Factory, FlaskConical, Wind,
  Flame, Beaker, Zap, Package,
}

export default function Products() {
  return (
    <section id="produk" className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase
                        text-brand-green-mid font-medium mb-4">
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
            Produk Kami
          </p>
          <h2 className="text-brand-dark font-bold text-3xl sm:text-4xl leading-tight mb-3">
            Gas Berkualitas untuk Kebutuhan Anda
          </h2>
          <p className="text-gray-500 text-base max-w-lg">
            Semua produk kami diproduksi dengan standar keamanan tinggi
            dan telah memenuhi regulasi yang berlaku.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            const Icon = iconMap[product.icon] ?? Package
            return (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl p-6
                           hover:border-brand-green/30 hover:shadow-sm
                           transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green-light
                                flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green" />
                </div>

                <h3 className="text-brand-dark font-semibold text-base mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <span className="inline-block bg-brand-yellow/15 text-brand-yellow-dark
                                 text-xs font-medium px-3 py-1 rounded-full">
                  {product.spec}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
