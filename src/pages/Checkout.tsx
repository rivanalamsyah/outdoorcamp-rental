import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CustomButton } from '../components/ui';
import { CONTACT_INFO } from '../data/constants';
import { Send, User, Phone, Calendar, FileText, AlertTriangle } from 'lucide-react';

const Checkout: React.FC = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        startDate: '',
        endDate: '',
        notes: ''
    });

    if (cart.length === 0) {
        navigate('/alat');
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let msg = `*HALO OUTDOORCAMP RENTAL*\n`;
        msg += `----------------------------\n`;
        msg += `Saya ingin melakukan booking sewa:\n\n`;
        cart.forEach((it) => {
            msg += `✅ ${it.tool.name}\n`;
            msg += `   (${it.quantity} Unit x ${it.days} Hari)\n`;
        });
        msg += `\n*TOTAL ESTIMASI:* Rp ${cartTotal.toLocaleString()}\n`;
        msg += `----------------------------\n`;
        msg += `*DATA PENYEWA*\n`;
        msg += `Nama: ${formData.name}\n`;
        msg += `WA: ${formData.phone}\n`;
        msg += `Jadwal: ${formData.startDate} s/d ${formData.endDate}\n`;
        msg += `Catatan: ${formData.notes || '-'}\n\n`;
        msg += `Mohon konfirmasi ketersediaan alatnya ya admin. Terima kasih!`;

        const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');

        // Optional: clear cart after redirect
        // clearCart();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Finalisasi Booking</h1>
                <p className="text-stone-400 font-medium italic">Data Anda aman, kami hanya menggunakan ini untuk verifikasi pemesanan via WhatsApp.</p>
            </div>

            <div className="bg-white p-8 md:p-16 rounded-[4rem] border border-stone-200 shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>

                <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                    {/* PERSONAL INFO */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-emerald-600 flex items-center gap-4">
                            <span className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-sm shadow-lg shadow-emerald-200">1</span>
                            Informasi Identitas
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1 flex items-center gap-2">
                                    <User size={12} /> Nama Lengkap Sesuai KTP
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                    placeholder="Contoh: Andi Wijaya"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1 flex items-center gap-2">
                                    <Phone size={12} /> Nomor WhatsApp Aktif
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                    placeholder="081234567890"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SCHEDULE */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-emerald-600 flex items-center gap-4">
                            <span className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-sm shadow-lg shadow-emerald-200">2</span>
                            Jadwal Pendakian
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1 flex items-center gap-2">
                                    <Calendar size={12} /> Tanggal Ambil Alat
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    required
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-sm outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all uppercase"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1 flex items-center gap-2">
                                    <Calendar size={12} /> Tanggal Kembali Alat
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    required
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    className="w-full bg-stone-50 border-none rounded-2xl px-8 py-5 font-black text-sm outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all uppercase"
                                />
                            </div>
                        </div>
                    </div>

                    {/* EXTRA */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-black uppercase tracking-tighter text-emerald-600 flex items-center gap-4">
                            <span className="w-10 h-10 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-sm shadow-lg shadow-emerald-200">3</span>
                            Catatan Tambahan
                        </h3>
                        <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase text-stone-400 tracking-widest ml-1 flex items-center gap-2">
                                <FileText size={12} /> Keinginan Khusus / Pertanyaan
                            </label>
                            <textarea
                                name="notes"
                                rows={4}
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full bg-stone-50 border-none rounded-3xl px-8 py-6 font-black text-lg outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
                                placeholder="Contoh: Butuh tenda warna biru, jaminan KTP Bandung..."
                            />
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-[11px] font-black uppercase tracking-widest text-stone-400 mb-2">Total Estimasi Pembayaran</p>
                            <div className="text-5xl font-black text-emerald-600 tracking-tighter">Rp {cartTotal.toLocaleString()}</div>
                        </div>
                        <CustomButton
                            type="submit"
                            variant="dark"
                            size="lg"
                            className="flex items-center justify-center gap-4 px-16"
                        >
                            <Send size={20} />
                            Kirim via WhatsApp
                        </CustomButton>
                    </div>
                </form>
            </div>

            {/* GUARANTEE BOX */}
            <div className="mt-12 bg-yellow-50 border border-yellow-200 p-8 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="w-14 h-14 bg-yellow-400 text-yellow-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-200/50">
                    <AlertTriangle size={24} />
                </div>
                <p className="text-xs font-bold text-yellow-800 uppercase tracking-tight leading-relaxed">
                    PENTING: Mohon siapkan E-KTP asli sebagai jaminan wajib saat pengambilan alat di Basecamp. Jaminan akan dikembalikan utuh saat alat kembali.
                </p>
            </div>
        </div>
    );
};

export default Checkout;
