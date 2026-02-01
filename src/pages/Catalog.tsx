import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { TOOLS } from '../data/constants';
import { ToolCard } from '../components/ToolComponents';
import { SectionHeader } from '../components/ui';
import { Search, SlidersHorizontal, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Catalog: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category') || 'All';

    // SEO title dynamic based on category
    const seoTitle = categoryFilter !== 'All' ? `Sewa Alat Camping ${categoryFilter}` : 'Katalog Alat Camping & Outdoor';
    const seoDesc = categoryFilter !== 'All'
        ? `Lengkapi kebutuhan outdoor Anda dengan koleksi ${categoryFilter} terbaik kami. Sewa sekarang dengan harga terjangkau.`
        : 'Temukan berbagai macam peralatan camping berkualitas mulai dari tenda, cariier, nesting, hingga perlengkapan pendakian lainnya.';
    const [sortBy, setSortBy] = useState('default');

    const categories = useMemo(() => ['All', ...Array.from(new Set(TOOLS.map(t => t.category)))], []);

    const filteredTools = useMemo(() => {
        let res = [...TOOLS];
        if (categoryFilter !== 'All') {
            res = res.filter(t => t.category === categoryFilter);
        }
        if (sortBy === 'price-asc') res.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-desc') res.sort((a, b) => b.price - a.price);
        return res;
    }, [categoryFilter, sortBy]);

    const countByCategory = (cat: string) => {
        if (cat === 'All') return TOOLS.length;
        return TOOLS.filter(t => t.category === cat).length;
    };

    return (
        <>
            <SEO title={seoTitle} description={seoDesc} />
            <div className="flex flex-col lg:flex-row gap-16">
                {/* SIDEBAR FILTER */}
                <aside className="w-full lg:w-72 space-y-12">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm sticky top-28">
                        <h3 className="font-black mb-8 uppercase tracking-widest text-[11px] text-stone-400">Filter Kategori</h3>
                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSearchParams({ category: cat })}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl font-black text-sm transition-all group ${categoryFilter === cat
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                                        : 'bg-stone-50 text-stone-600 hover:bg-emerald-50 hover:text-emerald-600'
                                        }`}
                                >
                                    {cat === 'All' ? 'Semua Alat' : cat}
                                    <span className={`text-[9px] font-black ${categoryFilter === cat ? 'text-emerald-200' : 'text-stone-400'}`}>
                                        {countByCategory(cat)}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-stone-100">
                            <h3 className="font-black mb-6 uppercase tracking-widest text-[11px] text-stone-400">Bantuan Chat</h3>
                            <div className="bg-emerald-950 p-6 rounded-3xl text-white relative overflow-hidden">
                                <p className="text-[10px] font-medium text-emerald-400 mb-2">Punya pertanyaan?</p>
                                <p className="font-black text-xs leading-relaxed mb-6">Konsultasi gratis untuk alat yang cocok dengan rute mendakimu.</p>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-white text-emerald-950 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 transition-colors"
                                >
                                    <MessageCircle size={14} />
                                    Chat Sekarang
                                </a>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-800 rounded-full opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* CATALOG LIST */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">Katalog Alat</h1>
                            <p className="text-stone-400 font-bold uppercase text-[10px] tracking-widest">
                                Menampilkan {filteredTools.length} Perlengkapan Terbaik
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-stone-200 shadow-sm">
                            <SlidersHorizontal size={14} className="text-stone-400" />
                            <span className="text-[10px] font-black uppercase text-stone-400">Urutkan:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="text-xs font-black bg-transparent outline-none focus:ring-0 uppercase tracking-widest cursor-pointer"
                            >
                                <option value="default">Default</option>
                                <option value="price-asc">Termurah</option>
                                <option value="price-desc">Termahal</option>
                            </select>
                        </div>
                    </div>

                    {filteredTools.length === 0 ? (
                        <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-stone-200">
                            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-300">
                                <Search size={40} />
                            </div>
                            <p className="text-stone-400 font-black uppercase tracking-widest text-xs">Belum ada alat di kategori ini.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTools.map(tool => (
                                <ToolCard key={tool.id} tool={tool} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Catalog;
