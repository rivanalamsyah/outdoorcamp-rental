import React from 'react';
import { CONTACT_INFO } from '../data/constants';
import { CustomButton } from '../components/ui';
import { MapPin, Phone, Mail, Clock, Instagram, Send, Facebook, Twitter, Youtube } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    return (
        <>
            <SEO
                title="Hubungi Kami - Lokasi Basecamp"
                description="Butuh bantuan memilih alat? Hubungi tim support kami atau kunjungi basecamp kami di Bandung. Kami siap melayani 24/7."
            />
            <div className="max-w-6xl mx-auto py-12">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Hubungi <br /><span className="text-emerald-600 underline decoration-8 underline-offset-8">Basecamp.</span>
                    </h1>
                    <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed italic">
                        Tersedia 24 jam untuk konsultasi alat dan ketersediaan stok via WhatsApp.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* CONTACT INFO */}
                    <div className="lg:col-span-1 space-y-12">
                        <div className="bg-white p-12 rounded-[3.5rem] border border-stone-200 shadow-xl space-y-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3 text-emerald-600">
                                    <MapPin size={20} />
                                    <p className="text-[10px] font-black uppercase tracking-widest">Basecamp Bandung</p>
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight">{CONTACT_INFO.address}</h4>
                                <p className="text-stone-400 text-sm font-bold leading-relaxed">
                                    Workshop utama, pencucian alat, dan gudang pusat tersedia di sini.
                                </p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-stone-100 relative z-10">
                                <div className="flex items-center gap-3 text-emerald-600">
                                    <Phone size={18} />
                                    <p className="text-[10px] font-black uppercase tracking-widest">Digital Support</p>
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight">{CONTACT_INFO.phone}</h4>
                                <p className="text-stone-400 text-sm font-bold flex items-center gap-2">
                                    <Mail size={14} />
                                    {CONTACT_INFO.email}
                                </p>
                            </div>

                            <div className="space-y-4 pt-10 border-t border-stone-100 relative z-10">
                                <div className="flex items-center gap-3 text-emerald-600">
                                    <Clock size={18} />
                                    <p className="text-[10px] font-black uppercase tracking-widest">Jam Operasional</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-tight">
                                        <span>Senin - Jumat</span>
                                        <span className="text-emerald-600">{CONTACT_INFO.workHours.weekday}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-tight">
                                        <span>Sabtu - Minggu</span>
                                        <span className="text-emerald-600">{CONTACT_INFO.workHours.weekend}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6 relative z-10">
                                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                    <div key={i} className="w-12 h-12 bg-white border border-stone-100 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shadow-sm">
                                        <Icon size={18} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-stone-200 shadow-3xl">
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
                                Kirim Pesan Cepat
                                <Send size={24} className="text-emerald-600" />
                            </h3>
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1">Nama Anda</label>
                                        <input type="text" className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1">Email</label>
                                        <input type="email" className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1">Topik Bantuan</label>
                                    <select className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 appearance-none cursor-pointer">
                                        <option>Sewa Alat Individual</option>
                                        <option>Kerja Sama / Partner</option>
                                        <option>Keluhan Pelanggan</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1">Detail Pesan</label>
                                    <textarea rows={5} className="w-full bg-stone-50 border-none rounded-[2rem] px-8 py-6 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all" />
                                </div>
                                <CustomButton variant="primary" className="px-16">Kirim Pesan</CustomButton>
                            </form>
                        </div>
                    </div>
                </div>

                {/* MAPS PLACEHOLDER */}
                <div className="mt-32 h-[500px] bg-stone-200 rounded-[4rem] overflow-hidden relative group shadow-inner">
                    <img
                        src="/images/contact-bg.png"
                        className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        alt="Map Background"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-2xl border border-white/20 max-w-md mx-4">
                            <MapPin size={64} className="text-emerald-600 mx-auto mb-6 animate-bounce" />
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Lokasi Basecamp</h4>
                            <p className="text-stone-500 font-medium mb-8">Kunjungi basecamp kami untuk pengecekan alat secara langsung atau pengambilan pesanan.</p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-black uppercase tracking-widest text-emerald-600 hover:underline"
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
