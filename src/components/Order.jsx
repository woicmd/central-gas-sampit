import { useState } from 'react'
import { Send } from 'lucide-react'
import { products } from '../data/products'

const EMAIL_TUJUAN = '[EMAIL_PERUSAHAAN]' // Ganti dengan email resmi perusahaan

const initialForm = {
  nama:       '',
  perusahaan: '',
  telepon:    '',
  produk:     '',
  jumlah:     '',
  keterangan: '',
}

export default function Order() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Pesanan: ${form.produk || 'Gas'} – ${form.nama}`
    )
    const body = encodeURIComponent(
      `Nama          : ${form.nama}\n` +
      `Perusahaan    : ${form.perusahaan}\n` +
      `No. Telepon   : ${form.telepon}\n` +
      `Produk        : ${form.produk}\n` +
      `Jumlah        : ${form.jumlah}\n` +
      `Keterangan    :\n${form.keterangan}`
    )
    window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`
  }

  return (
    <section id="pesan" className="py-24 px-5 bg-brand-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase
                        text-brand-yellow font-medium mb-4">
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
            Pemesanan
          </p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl leading-tight mb-3">
            Pesan Sekarang
          </h2>
          <p className="text-white/50 text-base max-w-md">
            Isi form berikut. Klik kirim — email klien akan terbuka secara otomatis
            dengan data pesanan yang sudah terisi.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Nama Lengkap <span className="text-brand-yellow">*</span>
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm placeholder-white/30
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Nama Perusahaan
              </label>
              <input
                type="text"
                name="perusahaan"
                value={form.perusahaan}
                onChange={handleChange}
                placeholder="Opsional"
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm placeholder-white/30
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                No. Telepon <span className="text-brand-yellow">*</span>
              </label>
              <input
                type="tel"
                name="telepon"
                value={form.telepon}
                onChange={handleChange}
                placeholder="08xx-xxxx-xxxx"
                required
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm placeholder-white/30
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Produk <span className="text-brand-yellow">*</span>
              </label>
              <select
                name="produk"
                value={form.produk}
                onChange={handleChange}
                required
                className="bg-brand-dark border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="" disabled>Pilih produk</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Jumlah / Estimasi Kebutuhan <span className="text-brand-yellow">*</span>
              </label>
              <input
                type="text"
                name="jumlah"
                value={form.jumlah}
                onChange={handleChange}
                placeholder="contoh: 10 tabung / bulan"
                required
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm placeholder-white/30
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Keterangan Tambahan
              </label>
              <textarea
                name="keterangan"
                value={form.keterangan}
                onChange={handleChange}
                placeholder="Alamat pengiriman, jadwal, atau informasi lainnya..."
                rows={4}
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3
                           text-white text-sm placeholder-white/30
                           focus:outline-none focus:border-brand-yellow
                           transition-colors duration-200 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full sm:w-auto
                       bg-brand-yellow text-brand-dark font-semibold text-sm
                       px-8 py-3.5 rounded-lg hover:bg-brand-yellow-light
                       transition-colors duration-200"
          >
            <Send size={16} />
            Kirim Pesanan via Email
          </button>
        </form>

      </div>
    </section>
  )
}
