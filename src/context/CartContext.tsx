'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, OrderSummary } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
    removeFromCart: (id: string, selectedSize?: string, selectedColor?: string) => void;
    updateQuantity: (id: string, quantity: number, selectedSize?: string, selectedColor?: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    orderSummary: OrderSummary;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('nova_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to load cart', e);
            }
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('nova_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product, quantity = 1, selectedSize?: string, selectedColor?: string) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (item) => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            }

            return [...prevCart, { ...product, quantity, selectedSize, selectedColor }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string, selectedSize?: string, selectedColor?: string) => {
        setCart((prevCart) => prevCart.filter(
            (item) => !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
        ));
    };

    const updateQuantity = (id: string, quantity: number, selectedSize?: string, selectedColor?: string) => {
        if (quantity < 1) return;
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const shipping = cartTotal > 100 || cartTotal === 0 ? 0 : 15;
    const tax = cartTotal * 0.08; // 8% tax

    const orderSummary: OrderSummary = {
        subtotal: cartTotal,
        shipping,
        tax,
        total: cartTotal + shipping + tax
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            orderSummary,
            isCartOpen,
            setIsCartOpen
        }}>
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
