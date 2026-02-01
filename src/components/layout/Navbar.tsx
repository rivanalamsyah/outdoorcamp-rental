import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Tent, Menu, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Katalog Alat', path: '/alat' },
        { name: 'Paket Hemat', path: '/paket' },
        { name: 'Tentang', path: '/tentang' },
        { name: 'Kontak', path: '/kontak' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* TOP NAV INFO */}
            <div className="bg-emerald-950 text-white py-2 text-[10px] font-black uppercase tracking-[0.2em] text-center hidden md:block">
                🌟 Promo Member Baru: Diskon 10% untuk sewa pertama! | WhatsApp Support: 0812-3456-7890
            </div>

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-stone-200 py-3' : 'bg-white/80 backdrop-blur-md py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* LOGO */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src="/images/logo.png" className="h-10 w-auto group-hover:scale-105 transition-transform" alt="OutdoorCamp Logo" />
                            <span className="text-2xl font-black text-emerald-950 tracking-tighter">OutdoorCamp</span>
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex space-x-10 font-bold text-[11px] uppercase tracking-[0.15em] text-stone-500">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`hover:text-emerald-600 transition-colors ${isActive(link.path) ? 'text-emerald-600' : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* ACTION */}
                        <div className="flex items-center gap-4">
                            <Link
                                to="/keranjang"
                                className="relative p-3 bg-stone-100 hover:bg-emerald-50 text-stone-600 hover:text-emerald-600 rounded-2xl transition-all group"
                            >
                                <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full ring-4 ring-white shadow-lg">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <button
                                className="lg:hidden p-3 bg-stone-100 text-stone-600 rounded-2xl"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-stone-100 overflow-hidden"
                        >
                            <div className="px-4 py-8 space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block font-black text-xs uppercase tracking-widest ${isActive(link.path) ? 'text-emerald-600' : 'text-stone-500'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
