import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../components/ui';
import { CheckCircle, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Packages: React.FC = () => {
    const bundles = [
        {
            id: 'solo',
            name: 'Paket Solo',
            subtitle: 'Ideal untuk 1 Orang',
            price: '65k',
            items: ['Tenda Dome 2P', 'Sleeping Bag Polar', 'Matras Aluminium', 'Lampu Tenda'],
            featured: false,
            color: 'emerald'
        },
        {
            id: 'couple',
            name: 'Paket Couple',
            subtitle: 'Ideal untuk 2 Orang',
            price: '120k',
            items: ['Tenda Dome 4P', '2 SB Polar', '2 Matras Foil', '1 Set Alat Masak', '1 Kompor Portable'],
            featured: true,
            color: 'emerald'
        },
        {
            id: 'group',
            name: 'Paket Group',
            subtitle: 'Ideal untuk 4 Orang',
            price: '220k',
            items: ['Tenda Dome 6P', '4 SB Polar', '4 Matras Foil', '1 Set Cooking Large', '1 Flysheet 3x4'],
            featured: false,
            color: 'emerald'
        }
    ];

    return (
        <>
            <SEO
                title="Paket Sewa Hemat - One Stop Solution"
                description="Pilihan paket sewa alat camping lengkap untuk solo traveler, pasangan, hingga rombongan besar dengan harga lebih ekonomis."
            />
            <div className="max-w-6xl mx-auto py-12 space-y-24">
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Paket <br /><span className="text-emerald-600 underline decoration-8 underline-offset-8">Petualang Hemat.</span>
                    </h1>
                    <p className="text-xl text-stone-400 font-bold uppercase tracking-widest max-w-xl mx-auto leading-relaxed italic">
                        Solusi lengkap dan praktis untuk berbagai skala perjalanan Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 items-center">
                    {bundles.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`
              rounded-[3.5rem] p-12 transition-all duration-500 flex flex-col relative group
              ${pkg.featured
                                    ? 'bg-emerald-950 text-white shadow-3xl transform md:scale-110 border border-emerald-800'
                                    : 'bg-white text-stone-900 shadow-xl border border-stone-100 hover:-translate-y-4'
                                }
            `}
                        >
                            {pkg.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <Zap size={12} fill="currentColor" />
                                    Paling Populer
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{pkg.name}</h3>
                                <p className={`text-[10px] font-black uppercase tracking-widest ${pkg.featured ? 'text-emerald-500' : 'text-stone-400'}`}>
                                    {pkg.subtitle}
                                </p>
                            </div>

                            <div className={`text-6xl font-black mb-10 tracking-tighter ${pkg.featured ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                Rp {pkg.price} <span className={`text-xs font-normal ${pkg.featured ? 'text-emerald-700' : 'text-stone-300'}`}>/ hari</span>
                            </div>

                            <ul className="space-y-6 flex-1 mb-12">
                                {pkg.items.map((it, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-tight opacity-80">
                                        <CheckCircle size={16} className={pkg.featured ? "text-emerald-400" : "text-emerald-500"} />
                                        {it}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/alat">
                                <CustomButton
                                    variant={pkg.featured ? 'primary' : 'outline'}
                                    fullWidth
                                    className={pkg.featured ? 'bg-black text-emerald-400 hover:bg-emerald-50' : ''}
                                >
                                    {pkg.featured ? 'Sewa Sekarang' : 'Lihat Katalog'}
                                </CustomButton>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* PROMO BANNER */}
                <div className="bg-stone-900 rounded-[4rem] p-12 md:p-20 text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                        <img src="/images/package-promo.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s]" alt="Mountains" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">Berangkat <br />Rombongan?</h2>
                            <p className="text-stone-400 font-medium text-lg leading-relaxed">
                                Butuh lebih dari 10 paket atau sewa dalam jumlah besar untuk komunitas/instansi? Kami punya harga spesial dan dukungan logistik lengkap.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/6281234567890"
                            className="bg-emerald-600 text-white px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95"
                        >
                            Hubungi Marketing
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Packages;
