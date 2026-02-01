import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CartItem, Tool } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (tool: Tool, quantity: number, days: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('outdoor-cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('outdoor-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (tool: Tool, quantity: number, days: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.tool.id === tool.id);
            if (existing) {
                return prev.map(item =>
                    item.tool.id === tool.id
                        ? { ...item, quantity: item.quantity + quantity, days }
                        : item
                );
            }
            return [...prev, { tool, quantity, days }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.tool.id !== id));
    };

    const clearCart = () => setCart([]);

    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

    const cartTotal = useMemo(() => cart.reduce((total, item) =>
        total + (item.tool.price * item.quantity * item.days), 0), [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
