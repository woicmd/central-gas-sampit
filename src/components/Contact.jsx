import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const EMAIL_TUJUAN = '[EMAIL_PERUSAHAAN]' // Ganti dengan email resmi perusahaan

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: '[ALAMAT LENGKAP PERUSAHAAN]',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '[NOMOR TELEPON]',
  },
  {
    icon: Mail,
    label: 'Email',
    value: '[EMAIL_PERUSAHAAN]',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: '[JAM BUKA] — Senin s/d Sabtu',
  },
]

const initialForm = { nama: '', email: '', pesan: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Pesan dari ${form.nama}`)
    const body    = encodeURIComponent(
      `Nama  : ${form.nama}\nEmail : ${form.email}\n\nPesan:\n${form.pesan}`
    )
    window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontak" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase
                        text-brand-green-mid font-medium mb-4">
            <span className="w-8 h-0.5 bg-brand-yellow inline-block" />
            Kontak
          </p>
          <h2 className="text-brand-dark font-bold text-3xl sm:text-4xl leading-tight">
            Hubungi Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-brand-green-light flex items-center
                                justify-center flex-shrink-0 mt-0.5">
                  <Icon size={16} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-brand-dark text-sm leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Nama <span className="text-brand-yellow">*</span>
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm
                           text-brand-dark placeholder-gray-300
                           focus:outline-none focus:border-brand-green
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Email <span className="text-brand-yellow">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@anda.com"
                required
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm
                           text-brand-dark placeholder-gray-300
                           focus:outline-none focus:border-brand-green
                           transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Pesan <span className="text-brand-yellow">*</span>
              </label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                placeholder="Tulis pesan Anda..."
                rows={5}
                required
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm
                           text-brand-dark placeholder-gray-300
                           focus:outline-none focus:border-brand-green
                           transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto
                         bg-brand-green text-white font-semibold text-sm
                         px-8 py-3.5 rounded-lg hover:bg-brand-green-dark
                         transition-colors duration-200"
            >
              <Send size={15} />
              Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
