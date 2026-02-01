import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { Star } from 'lucide-react';

interface ToolCardProps {
    tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
    return (
        <Link to={`/detail/${tool.slug}`} className="group bg-white rounded-[2.5rem] border border-stone-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div className="aspect-square bg-stone-100 overflow-hidden relative">
                <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {tool.isBestSeller && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                        Laris
                    </div>
                )}
                {tool.isPromo && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                        Promo
                    </div>
                )}
            </div>
            <div className="p-8">
                <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className={i <= Math.round(tool.rating) ? "text-yellow-400 fill-current" : "text-stone-200"} />
                    ))}
                    <span className="text-[10px] font-bold text-stone-400 ml-1">({tool.reviews})</span>
                </div>
                <h3 className="font-bold text-stone-900 truncate mb-1 text-lg group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                    {tool.name}
                </h3>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-100">
                    <div className="text-emerald-600 font-black text-lg">Rp {tool.price.toLocaleString()}</div>
                    <div className="text-[9px] font-black uppercase text-stone-300 tracking-[0.2em]">Per Hari</div>
                </div>
            </div>
        </Link>
    );
};

export const CategoryBento: React.FC<{ onSelect: (cat: string) => void }> = ({ onSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div onClick={() => onSelect('Tenda')} className="md:col-span-2 md:row-span-2 bg-stone-900 rounded-3xl relative overflow-hidden group cursor-pointer">
                <img src="/images/tenda-4p.png" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Tenda" />
                <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">Peralatan Tenda</h4>
                    <p className="text-stone-300 font-medium italic">Kapasitas 1 hingga 8 orang tersedia.</p>
                </div>
            </div>
            <div onClick={() => onSelect('Tas')} className="md:col-span-1 bg-emerald-600 rounded-3xl relative overflow-hidden group cursor-pointer">
                <img src="/images/carrier-60l.png" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Tas" />
                <div className="absolute bottom-6 left-6 text-white text-center w-full pr-12">
                    <h4 className="text-xl font-black uppercase tracking-tight">Carrier & Pack</h4>
                </div>
            </div>
            <div onClick={() => onSelect('Masak')} className="md:col-span-1 bg-stone-200 rounded-3xl relative overflow-hidden group cursor-pointer">
                <img src="/images/kompor-portable.png" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Masak" />
                <div className="absolute bottom-6 left-6 text-stone-900 text-center w-full pr-12">
                    <h4 className="text-xl font-black uppercase tracking-tight">Cooking Set</h4>
                </div>
            </div>
            <div onClick={() => onSelect('Tidur')} className="md:col-span-2 bg-stone-800 rounded-3xl relative overflow-hidden group cursor-pointer">
                <img src="/images/sb-polar.png" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" alt="Tidur" />
                <div className="absolute bottom-6 left-8 text-white">
                    <h4 className="text-2xl font-black uppercase tracking-tight">Sleep System</h4>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Sleeping Bag & Matras</p>
                </div>
            </div>
        </div>
    );
};
