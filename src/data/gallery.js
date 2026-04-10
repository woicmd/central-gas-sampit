// ─────────────────────────────────────────────
// DATA GALERI FOTO
// Untuk menambah foto, cukup tambahkan objek baru.
//
// src  : path ke file foto di /public/images/gallery/
// alt  : deskripsi foto (penting untuk aksesibilitas)
// size : 'large' (800×500px) atau 'small' (400×500px)
//        — lihat README untuk panduan ukuran foto
// ─────────────────────────────────────────────

export const gallery = [
  {
    id: 1,
    src: '/images/gallery/foto-1.jpg',
    alt: 'Fasilitas produksi Central Gas Sampit',
    size: 'large',
  },
  {
    id: 2,
    src: '/images/gallery/foto-2.jpg',
    alt: 'Tangki penyimpanan oksigen',
    size: 'small',
  },
  {
    id: 3,
    src: '/images/gallery/foto-3.jpg',
    alt: 'Proses pengiriman gas',
    size: 'small',
  },
  // Tambahkan foto berikutnya di sini:
  // {
  //   id: 4,
  //   src: '/images/gallery/foto-4.jpg',
  //   alt: 'Deskripsi foto',
  //   size: 'large', // atau 'small'
  // },
]
