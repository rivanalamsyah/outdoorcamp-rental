import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CustomButton } from '../components/ui';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Info } from 'lucide-react';

const Cart: React.FC = () => {
    const { cart, removeFromCart, cartCount, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto py-12">
            <div className="flex items-center justify-between mb-16">
                <h1 className="text-5xl font-black uppercase tracking-tighter">Keranjang Sewa</h1>
                <Link to="/alat" className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:underline flex items-center gap-2">
                    <ShoppingBag size={14} />
                    Tambah Alat Lain
                </Link>
            </div>

            {cart.length === 0 ? (
                <div className="bg-white rounded-[4rem] p-24 text-center border-2 border-dashed border-stone-200 shadow-inner">
                    <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-10 text-stone-300">
                        <ShoppingBag size={48} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Keranjang Kosong</h3>
                    <p className="text-stone-400 font-medium mb-10 italic">Anda belum memilih alat petualangan apapun untuk disewa.</p>
                    <Link to="/alat">
                        <CustomButton variant="dark">Lihat Katalog</CustomButton>
                    </Link>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* ITEMS */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.tool.id} className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-center group hover:border-emerald-200 transition-all">
                                <div className="w-32 h-32 bg-stone-50 rounded-3xl border border-stone-100 p-4">
                                    <img src={item.tool.image} className="w-full h-full object-contain" alt={item.tool.name} />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-xl font-black text-stone-900 uppercase tracking-tight">{item.tool.name}</h4>
                                    <div className="text-[10px] text-stone-400 font-black uppercase tracking-widest mt-2 flex flex-wrap justify-center md:justify-start gap-4">
                                        <span className="px-3 py-1 bg-stone-100 rounded-full">{item.quantity} Unit</span>
                                        <span className="px-3 py-1 bg-stone-100 rounded-full">{item.days} Hari</span>
                                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full">@Rp {item.tool.price.toLocaleString()}</span>
                                    </div>
                                    <div className="text-2xl font-black text-emerald-600 mt-4 tracking-tighter">
                                        Rp {(item.tool.price * item.quantity * item.days).toLocaleString()}
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.tool.id)}
                                    className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                    title="Hapus dari keranjang"
                                >
                                    <Trash2 size={24} />
                                </button>
                            </div>
                        ))}

                        <div className="bg-yellow-50/50 border border-yellow-100 p-8 rounded-[2.5rem] flex gap-6 items-start">
                            <Info className="text-yellow-600 flex-shrink-0" size={24} />
                            <div className="space-y-2">
                                <h5 className="font-black text-xs uppercase tracking-widest text-yellow-800">Perhatian Jaminan</h5>
                                <p className="text-sm text-yellow-700 leading-relaxed font-medium italic">
                                    OutdoorCamp mewajibkan jaminan berupa E-KTP asli. Pastikan identitas Anda siap saat pengambilan unit di Basecamp.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-10 rounded-[3rem] border border-stone-200 shadow-2xl sticky top-28 space-y-10">
                            <h3 className="text-2xl font-black uppercase tracking-tighter border-b border-stone-100 pb-6 text-emerald-950 flex items-center justify-between">
                                Ringkasan
                                <ShieldCheck size={24} className="text-emerald-600" />
                            </h3>
                            <div className="space-y-6">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-stone-400">
                                    <span>Total Unit</span>
                                    <span className="text-stone-900">{cartCount} Items</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-stone-400">
                                    <span>Lama Sewa</span>
                                    <span className="text-stone-900">Rata-rata 2-3 Hari</span>
                                </div>
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-stone-400">
                                    <span>Estimasi Jaminan</span>
                                    <span className="text-emerald-600">E-KTP Asli</span>
                                </div>
                                <div className="pt-8 border-t border-stone-100 flex justify-between items-end">
                                    <div className="text-[11px] font-black uppercase tracking-widest text-emerald-600">Total Sewa</div>
                                    <div className="text-4xl font-black text-emerald-600 tracking-tighter">Rp {cartTotal.toLocaleString()}</div>
                                </div>
                            </div>
                            <CustomButton
                                variant="dark"
                                fullWidth
                                size="lg"
                                onClick={() => navigate('/checkout')}
                                className="flex items-center justify-center gap-4 py-8"
                            >
                                Lanjut Checkout
                                <ArrowRight size={20} />
                            </CustomButton>

                            <p className="text-[9px] text-center text-stone-400 font-bold uppercase tracking-widest">
                                Harga di atas belum termasuk biaya kirim (jika perlu).
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
