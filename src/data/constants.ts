import { Tool, Testimonial, FAQ } from '../types';

export const TOOLS: Tool[] = [
    {
        id: 1, slug: 'tenda-doom-4p', name: 'Tenda Doom 4 Orang', category: 'Tenda',
        price: 45000, stock: 10, image: '/images/tenda-4p.png',
        description: 'Tenda dome kapasitas 4 orang dengan layer ganda tahan hujan badai. Material ripstop kualitas tinggi.',
        specs: ['Kapasitas: 4 Orang', 'Double Layer', 'Frame Fiber', 'Pasak Besi'],
        rating: 4.8, reviews: 124, isBestSeller: true
    },
    {
        id: 2, slug: 'carrier-60l', name: 'Carrier 60L Premium', category: 'Tas',
        price: 35000, stock: 5, image: '/images/carrier-60l.png',
        description: 'Tas carrier kapasitas 60 liter dengan sistem sirkulasi udara di punggung dan desain ergonomis.',
        specs: ['Kapasitas: 60L', 'Bahan Cordura', 'Raincover Included', 'Torso Adjustable'],
        rating: 4.9, reviews: 89, isPromo: true
    },
    {
        id: 3, slug: 'sleeping-bag-polar', name: 'Sleeping Bag Polar', category: 'Tidur',
        price: 15000, stock: 20, image: '/images/sb-polar.png',
        description: 'Sleeping bag dengan lapisan polar yang sangat hangat untuk suhu ekstrim gunung di Indonesia.',
        specs: ['Model Mummy', 'Lapisan Polar', 'Max Temp: 5°C', 'Ringan'],
        rating: 4.7, reviews: 203, isBestSeller: true
    },
    {
        id: 4, slug: 'kompor-portable', name: 'Kompor Portable Mawar', category: 'Masak',
        price: 10000, stock: 15, image: '/images/kompor-portable.png',
        description: 'Kompor camping portable yang praktis, anti-angin, dan sangat stabil untuk memasak di alam.',
        specs: ['Bahan Stainless', 'Pemantik Otomatis', 'Free Box', 'Anti Angin'],
        rating: 4.5, reviews: 156
    },
    {
        id: 5, slug: 'matras-foil', name: 'Matras Aluminium Foil', category: 'Tidur',
        price: 5000, stock: 30, image: '/images/matras-foil.png',
        description: 'Matras reflektif panas untuk menjaga suhu tubuh tetap stabil saat tidur di permukaan dingin.',
        specs: ['Ukuran 200x100cm', 'Double Foil', 'Tebal 3mm', 'Anti Air'],
        rating: 4.3, reviews: 98, isPromo: true
    },
    {
        id: 6, slug: 'headlamp-led', name: 'Headlamp LED 5000 Lumens', category: 'Elektronik',
        price: 8000, stock: 25, image: '/images/headlamp.png',
        description: 'Lampu kepala dengan daya sorot sangat jauh, cocok untuk trekking malam hari.',
        specs: ['USB Rechargeable', 'Waterproof IPX4', '5 Mode Cahaya', 'Baterai Tahan 8 Jam'],
        rating: 4.6, reviews: 112
    }
];

export const TESTIMONIALS: Testimonial[] = [
    { name: 'Rizky Pratama', role: 'Pendaki Hobi', comment: 'Alatnya sangat terawat dan bersih. Proses sewa lewat WA sangat cepat.', avatar: '/images/avatars.png', rating: 5 },
    { name: 'Siti Aminah', role: 'Travel Blogger', comment: 'Suka banget dengan paket hematnya. Sangat membantu budget mahasiswa.', avatar: '/images/avatars.png', rating: 5 },
    { name: 'Budi Santoso', role: 'Anggota Mapala', comment: 'Carrier-nya premium semua, kondisinya seperti baru. Recommended!', avatar: '/images/avatars.png', rating: 4 }
];

export const FAQS: FAQ[] = [
    { q: 'Apakah saya perlu deposit uang tunai?', a: 'Tidak perlu. Kami hanya mensyaratkan jaminan berupa E-KTP asli yang masih berlaku sebagai jaminan tunggal.' },
    { q: 'Apakah alat bisa diantar ke rumah?', a: 'Bisa! Kami menyediakan jasa pengiriman via kurir internal untuk area Bandung dengan biaya mulai dari Rp 15.000.' },
    { q: 'Bagaimana jika saya telat mengembalikan?', a: 'Denda keterlambatan adalah 50% dari harga sewa per hari untuk setiap hari keterlambatan.' },
    { q: 'Apakah ada diskon untuk sewa durasi lama?', a: 'Tentu. Untuk penyewaan di atas 5 hari, kami memberikan diskon otomatis sebesar 20%. Hubungi admin untuk detailnya.' }
];

export const CONTACT_INFO = {
    address: 'Jl. Alam Sutera No. 45, Coblong, Bandung',
    phone: '0812-3456-7890',
    email: 'halo@outdoorcamp.id',
    whatsapp: '6281234567890',
    workHours: {
        weekday: '08:00 - 21:00',
        weekend: '07:00 - 22:00'
    }
};
