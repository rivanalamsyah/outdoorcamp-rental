import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection, ValueProps } from '../components/HomeComponents';
import { CategoryBento, ToolCard } from '../components/ToolComponents';
import { SectionHeader } from '../components/ui';
import { TOOLS, TESTIMONIALS, FAQS } from '../data/constants';
import { Star, ChevronDown, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const bestSellers = TOOLS.filter(t => t.isBestSeller).slice(0, 4);

    return (
        <>
            <SEO
                title="Sewa Alat Camping & Outdoor Terbaik"
                description="Rental perlengkapan mendaki gunung, tenda, carrier, dan peralatan outdoor lainnya dengan harga terjangkau dan kualitas terjamin."
            />
            <HeroSection />
            <ValueProps />

            {/* CATEGORY SECTION */}
            <section className="mb-32">
                <SectionHeader
                    title="Pilih Kebutuhanmu"
                    subtitle="Katalog Terkurasi Berdasarkan Aktivitas"
                />
                <CategoryBento onSelect={(cat) => navigate(`/alat?category=${cat}`)} />
            </section>

            {/* BEST SELLERS */}
            <section className="mb-32">
                <SectionHeader title="Produk Best Seller" centered />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
            </section>

            {/* RENTAL STEPS */}
            <section className="mb-32 bg-stone-900 rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
                <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                            Proses Sewa <br /><span className="text-emerald-400 italic">Mudah & Cepat.</span>
                        </h2>
                        <p className="text-stone-400 text-lg mb-12 font-medium leading-relaxed">
                            Kami menghilangkan kerumitan birokrasi penyewaan alat tradisional. Semua berbasis online dan WhatsApp.
                        </p>

                        <div className="space-y-12">
                            {[
                                { step: '01', title: 'Booking Online', desc: 'Pilih alat favoritmu melalui katalog digital ini dan masukkan ke keranjang.' },
                                { step: '02', title: 'Konfirmasi WhatsApp', desc: 'Kirim pesananmu ke admin kami. Stok akan langsung dikunci untuk jadwalmu.' },
                                { step: '03', title: 'Ambil & Bayar', desc: 'Ambil di Basecamp atau minta jasa antar. Cek alat bersama admin, bayar, dan berangkat!' }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-8 items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-black text-emerald-400 flex-shrink-0 text-2xl">{s.step}</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{s.title}</h4>
                                        <p className="text-stone-500 font-medium">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-emerald-800 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                            <img
                                src="/images/rental-process.png"
                                className="w-full h-full object-cover grayscale mix-blend-overlay opacity-60"
                                alt="Rental Service"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-3xl text-stone-900 border border-stone-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-black">15 Menit</div>
                                    <div className="text-[10px] font-black uppercase text-stone-400 tracking-widest">Rata-rata Waktu Proses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="mb-32">
                <SectionHeader title="Kata Penjelajah Kami" centered />
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-emerald-600 group">
                            <div className="flex items-center gap-4 mb-8">
                                <img src={t.avatar} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all" alt={t.name} />
                                <div>
                                    <div className="font-black text-stone-900 uppercase tracking-tight">{t.name}</div>
                                    <div className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">{t.role}</div>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} size={16} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-stone-500 font-medium italic leading-relaxed">"{t.comment}"</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mb-32 max-w-3xl mx-auto">
                <SectionHeader title="Pertanyaan Umum" centered />
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left font-black transition-all hover:bg-stone-50 uppercase tracking-tight text-sm"
                            >
                                {faq.q}
                                <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === i && (
                                <div className="px-6 pb-6 text-stone-500 font-medium leading-relaxed border-t border-stone-100 pt-4 bg-stone-50/50">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
