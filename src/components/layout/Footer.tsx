import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-950 text-white pt-32 pb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600"></div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b border-stone-800 pb-24">
                <div className="col-span-1 md:col-span-1 space-y-10">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/images/logo.png" className="h-12 w-auto" alt="OutdoorCamp Logo" />
                        <span className="text-2xl font-black text-white tracking-tighter">OutdoorCamp</span>
                    </Link>
                    <p className="text-stone-500 font-medium leading-relaxed italic">
                        Sahabat pendakian Anda di seluruh pegunungan Indonesia. Kami menyediakan alat terbaik untuk pengalaman yang tak terlupakan.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer border border-stone-800 group">
                                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-black mb-10 uppercase tracking-widest text-[11px] text-emerald-500">Layanan Sewa</h4>
                    <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                        <li><Link to="/alat" className="hover:text-emerald-400">Sewa Tenda</Link></li>
                        <li><Link to="/alat" className="hover:text-emerald-400">Sewa Carrier</Link></li>
                        <li><Link to="/alat" className="hover:text-emerald-400">Alat Masak Gunung</Link></li>
                        <li><Link to="/paket" className="hover:text-emerald-400">Paket Hemat Bundle</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black mb-10 uppercase tracking-widest text-[11px] text-emerald-500">Informasi</h4>
                    <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                        <li><Link to="/tentang" className="hover:text-emerald-400">Tentang Perusahaan</Link></li>
                        <li><Link to="/kontak" className="hover:text-emerald-400">Cara Pembayaran</Link></li>
                        <li><button className="hover:text-emerald-400 text-left">Kebijakan Kerusakan</button></li>
                        <li><button className="hover:text-emerald-400 text-left">Karir</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black mb-10 uppercase tracking-widest text-[11px] text-emerald-500">Newsletter</h4>
                    <p className="text-[10px] text-stone-500 mb-8 font-black uppercase tracking-widest leading-relaxed">
                        Dapatkan info promo dan tips pendakian langsung di emailmu.
                    </p>
                    <div className="flex relative group">
                        <input
                            type="email"
                            placeholder="Email Anda"
                            className="w-full bg-stone-900 border-none rounded-2xl px-6 py-5 text-xs font-black focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-emerald-600 text-white px-4 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-colors">
                            Ikuti
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-stone-600 text-[10px] font-black uppercase tracking-[0.3em]">
                <div>&copy; {new Date().getFullYear()} OutdoorCamp Rental Inc. Made by Passionate Climbers.</div>
                <div className="flex gap-12">
                    <button className="hover:text-white transition-colors">Privacy Policy</button>
                    <button className="hover:text-white transition-colors">Terms of Use</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
