import React from 'react';
import { SectionHeader } from '../components/ui';
import SEO from '../components/SEO';

const About: React.FC = () => {
    return (
        <>
            <SEO
                title="Tentang Kami - OutdoorCamp"
                description="Pelajari kisah kami dalam menyediakan alat gunung berkualitas dengan harga terjangkau sejak 2020. Kami melayani petualangan Anda dengan sepenuh hati."
            />
            <div className="max-w-5xl mx-auto py-12 space-y-32">
                {/* STORY */}
                <section className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] bg-emerald-900 rounded-[3rem] overflow-hidden rotate-3 shadow-3xl relative z-10">
                            <img
                                src="/images/about-story.png"
                                className="w-full h-full object-cover opacity-60"
                                alt="Our Story"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-stone-200 rounded-[3rem] pointer-events-none"></div>
                    </div>
                    <div className="space-y-10">
                        <span className="text-[11px] font-black uppercase text-emerald-600 tracking-widest">Our Humble Story</span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                            Mendaki Sejak <br /><span className="text-emerald-600 italic">2020.</span>
                        </h1>
                        <p className="text-lg text-stone-500 font-medium leading-relaxed italic">
                            "Kami percaya petualangan hebat tidak harus dimulai dengan biaya yang mahal. Setiap orang berhak menyentuh puncak gunung dengan alat yang aman."
                        </p>
                        <p className="text-lg text-stone-500 font-medium leading-relaxed">
                            Berawal dari workshop kecil di Bandung, OutdoorCamp kini telah melayani lebih dari 10.000 pendakian di seluruh pegunungan Jawa. Kami mengkurasi alat terbaik dunia untuk Anda sewa dengan harga rakyat.
                        </p>
                    </div>
                </section>

                {/* VALUES */}
                <section className="bg-emerald-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
                    <div className="text-center mb-20 relative z-10">
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Prinsip Kami</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-16 relative z-10">
                        {[
                            { id: '01', title: 'Higienitas Total', desc: 'Sleeping bag dicuci laundry setiap pemakaian. Tenda disemprot disinfektan. Kami benci bau apek di gunung.' },
                            { id: '02', title: 'Kualitas Unit', desc: 'Kami tidak menyewakan alat yang sudah \'mati\'. Setiap frame tenda dan resleting dicek detail sebelum keluar toko.' },
                            { id: '03', title: 'Edukasi Gratis', desc: 'Kami bukan hanya rental. Kami mengajari pemula cara packing dan mendirikan tenda yang benar secara gratis di Basecamp.' }
                        ].map((v) => (
                            <div key={v.id} className="space-y-6">
                                <h4 className="text-6xl font-black text-emerald-800/50">{v.id}</h4>
                                <h5 className="text-xl font-black uppercase tracking-tight">{v.title}</h5>
                                <p className="text-emerald-200/50 font-medium leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEAM MOCK */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Para Pengelola</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map(member => (
                            <div key={member} className="group">
                                <div className="aspect-[3/4] bg-stone-200 rounded-3xl overflow-hidden mb-6 relative">
                                    <img
                                        src="/images/team.png"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        alt="Team"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h4 className="font-black text-lg uppercase tracking-tight">Founder Team {member}</h4>
                                <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest mt-1">Basecamp Specialist</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
