import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TOOLS } from '../data/constants';
import { useCart } from '../hooks/useCart';
import { CustomButton } from '../components/ui';
import { Star, ChevronLeft, Plus, Minus, CheckCircle, Info } from 'lucide-react';
import SEO from '../components/SEO';

const Detail: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const tool = useMemo(() => TOOLS.find(t => t.slug === slug), [slug]);

    const [qty, setQty] = useState(1);
    const [days, setDays] = useState(1);
    const [activeTab, setActiveTab] = useState<'desc' | 'terms'>('desc');

    if (!tool) {
        return (
            <div className="py-32 text-center">
                <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Produk Tidak Ditemukan</h2>
                <Link to="/alat">
                    <CustomButton variant="primary">Kembali Ke Katalog</CustomButton>
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(tool, qty, days);
        navigate('/keranjang');
    };

    return (
        <>
            <SEO
                title={`${tool.name} - Sewa Alat Camping`}
                description={tool.description}
                image={tool.image}
                type="product"
            />
            <div className="space-y-20">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* LEFT: GALLERY */}
                    <div className="space-y-6">
                        <button
                            onClick={() => navigate('/alat')}
                            className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-stone-400 hover:text-emerald-600 transition-all"
                        >
                            <ChevronLeft size={16} />
                            Kembali Ke Katalog
                        </button>
                        <div className="aspect-square bg-white rounded-[3.5rem] border border-stone-200 overflow-hidden shadow-2xl p-12 lg:p-20 relative flex items-center justify-center">
                            <img
                                src={tool.image}
                                alt={tool.name}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute bottom-10 left-10 right-10 flex justify-center gap-3">
                                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-stone-200 rounded-full"></div>
                                <div className="w-2 h-2 bg-stone-200 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: INFO */}
                    <div className="py-4 lg:py-12 space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    {tool.category}
                                </span>
                                {tool.stock > 0 && (
                                    <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        Tersedia: {tool.stock} Unit
                                    </span>
                                )}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-stone-950 uppercase">
                                {tool.name}
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex text-yellow-400 fill-current">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <Star key={s} size={16} />
                                    ))}
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-stone-400">
                                    ({tool.reviews} Review Pelanggan)
                                </span>
                            </div>
                            <div className="text-5xl font-black text-emerald-600 pt-4 tracking-tighter">
                                Rp {tool.price.toLocaleString()} <span className="text-lg text-stone-300 font-normal">/ hari</span>
                            </div>
                        </div>

                        {/* TRANSACTION BOX */}
                        <div className="bg-white p-10 rounded-[3rem] border border-stone-200 shadow-xl space-y-10 relative overflow-hidden">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-stone-400 tracking-widest ml-1">Jumlah Unit</label>
                                    <div className="flex items-center gap-6">
                                        <button
                                            onClick={() => setQty(Math.max(1, qty - 1))}
                                            className="w-12 h-12 rounded-2xl border-2 border-stone-100 flex items-center justify-center font-black text-lg hover:bg-emerald-50 hover:border-emerald-200 transition-all"
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="text-2xl font-black w-8 text-center">{qty}</span>
                                        <button
                                            onClick={() => setQty(qty + 1)}
                                            className="w-12 h-12 rounded-2xl border-2 border-stone-100 flex items-center justify-center font-black text-lg hover:bg-emerald-50 hover:border-emerald-200 transition-all"
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase text-stone-400 tracking-widest ml-1">Durasi (Hari)</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={days}
                                            onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                                            min="1"
                                            className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                        />
                                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-stone-400 bg-stone-50 pl-2">Hari</span>
                                    </div>
                                </div>
                            </div>

                            <CustomButton
                                variant="primary"
                                fullWidth
                                size="lg"
                                onClick={handleAddToCart}
                                className="flex items-center justify-center gap-4 py-8"
                            >
                                <Plus size={24} />
                                Tambahkan Ke Keranjang
                            </CustomButton>
                        </div>

                        {/* TABS CONTENT */}
                        <div className="space-y-8">
                            <div className="flex gap-8 border-b border-stone-200">
                                <button
                                    onClick={() => setActiveTab('desc')}
                                    className={`pb-4 text-xs font-black uppercase tracking-widest transition-all border-b-2 ${activeTab === 'desc' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-stone-400 hover:text-stone-600'
                                        }`}
                                >
                                    Deskripsi
                                </button>
                                <button
                                    onClick={() => setActiveTab('terms')}
                                    className={`pb-4 text-xs font-black uppercase tracking-widest transition-all border-b-2 ${activeTab === 'terms' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-stone-400 hover:text-stone-600'
                                        }`}
                                >
                                    Syarat & Ketentuan
                                </button>
                            </div>

                            <div className="space-y-6">
                                {activeTab === 'desc' ? (
                                    <>
                                        <p className="text-stone-500 font-medium leading-relaxed text-lg italic">
                                            "{tool.description}"
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {tool.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-stone-100 group hover:border-emerald-200 transition-all">
                                                    <CheckCircle size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                                                    <span className="text-sm font-bold text-stone-600 uppercase tracking-tight">{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-4 text-stone-500 font-medium leading-relaxed">
                                        <div className="flex gap-4 items-start bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                                            <Info className="text-blue-500 flex-shrink-0" size={20} />
                                            <p className="text-sm">Jaminan wajib berupa E-KTP asli yang masih berlaku. Penyewa wajib mengecek kondisi alat saat serah terima.</p>
                                        </div>
                                        <ul className="list-disc pl-5 space-y-2 text-sm italic">
                                            <li>Denda keterlambatan 50% dari harga harian.</li>
                                            <li>Kerusakan ringan dikenakan biaya servis.</li>
                                            <li>Kehilangan alat wajib mengganti unit baru/setara.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIMILAR ITEMS */}
                <section className="pt-20 border-t border-stone-200">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">Mungkin Kamu Butuh Juga</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {TOOLS.filter(t => t.id !== tool.id).slice(0, 4).map(s => (
                            <Link
                                key={s.id}
                                to={`/detail/${s.slug}`}
                                className="group bg-white p-6 rounded-[2.5rem] border border-stone-100 hover:shadow-xl hover:border-emerald-100 transition-all cursor-pointer"
                            >
                                <img src={s.image} className="w-full aspect-square object-contain rounded-2xl mb-6 group-hover:scale-105 transition-transform" alt={s.name} />
                                <h4 className="font-bold text-sm truncate uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                                    {s.name}
                                </h4>
                                <p className="text-emerald-600 font-black text-xs mt-2">Rp {s.price.toLocaleString()}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Detail;
