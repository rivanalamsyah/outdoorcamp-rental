import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './ui';

export const HeroSection: React.FC = () => {
    return (
        <section className="mb-24">
            <div className="bg-emerald-900 rounded-[3.5rem] p-8 md:p-24 text-white overflow-hidden relative shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/50 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        Unit Terjamin Steril & Wangi
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
                        Petualangan <br /><span className="text-emerald-400">Dimulai Sini.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100/80 mb-12 leading-relaxed font-medium">
                        Penyedia rental perlengkapan outdoor berstandar profesional. Mulai pendakian Anda dengan aman, nyaman, dan hemat tanpa harus membeli alat mahal.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link to="/alat">
                            <CustomButton variant="primary">Sewa Sekarang</CustomButton>
                        </Link>
                        <Link to="/tentang">
                            <CustomButton variant="outline" className="border-emerald-700/50 text-white hover:bg-emerald-800 hover:border-emerald-800">
                                Pelajari Kami
                            </CustomButton>
                        </Link>
                    </div>
                </div>

                {/* LOGO PARTNERS */}
                <div className="mt-20 pt-20 border-t border-emerald-800/50 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/50 mb-8">
                        Dipercaya oleh ribuan petualang
                    </p>
                    <div className="flex flex-wrap gap-12 opacity-30 grayscale contrast-125">
                        <div className="text-xl font-black italic">MOUNTAINERS</div>
                        <div className="text-xl font-black italic">ADVENTURE.CO</div>
                        <div className="text-xl font-black italic">OUTDOORLIFE</div>
                        <div className="text-xl font-black italic">SUMMIT.ID</div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 opacity-20 lg:opacity-100 pointer-events-none">
                    <img
                        src="/images/hero-bg.png"
                        alt="Camping"
                        className="w-full h-full object-cover rounded-l-[5rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export const ValueProps: React.FC = () => {
    const values = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600',
            title: 'Higienitas Utama',
            description: 'Setiap unit tenda, sleeping bag, hingga nesting dicuci dan disinfeksi menggunakan standar industri setelah setiap pemakaian.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600',
            title: 'Update Alat Rutin',
            description: 'Kami hanya menyediakan brand terpercaya seperti Eiger, Consina, dan Naturehike yang kondisinya selalu kami kurasi setiap musim.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600',
            title: 'Tanpa Biaya Tersembunyi',
            description: 'Harga yang Anda lihat adalah harga flat per hari. Tanpa biaya admin tambahan atau biaya packing yang membingungkan.'
        }
    ];

    return (
        <section className="mb-32 grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
                <div key={i} className="space-y-6 group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:text-white ${v.color}`}>
                        {v.icon}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{v.title}</h3>
                    <p className="text-stone-500 font-medium leading-relaxed">{v.description}</p>
                </div>
            ))}
        </section>
    );
};
