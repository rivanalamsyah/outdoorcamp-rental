import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered }) => (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">{title}</h2>
        {subtitle && (
            <p className="text-stone-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                {subtitle}
            </p>
        )}
        {centered && <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>}
    </div>
);

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => (
    <div className={`bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-[2.5rem] ${className}`}>
        {children}
    </div>
);

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth,
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-200',
        secondary: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
        outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white',
        dark: 'bg-emerald-950 text-white hover:bg-stone-900 shadow-xl shadow-emerald-950/20'
    };

    const sizes = {
        sm: 'px-6 py-3 text-[10px]',
        md: 'px-10 py-5 text-xs',
        lg: 'px-12 py-6 text-sm'
    };

    return (
        <button
            className={`
        rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
