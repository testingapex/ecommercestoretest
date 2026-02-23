'use client';

import React from 'react';
import Link from 'next/link';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        cartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
            <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <ShoppingBag size={20} />
                        <span>Your Cart ({cart.length})</span>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.content}>
                    {cart.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your cart is empty</p>
                            <Link href="/shop" className={styles.shopLink} onClick={() => setIsCartOpen(false)}>
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.cartItems}>
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <img src={item.images[0]} alt={item.name} />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <div className={styles.itemHeader}>
                                            <h3>{item.name}</h3>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        {(item.selectedSize || item.selectedColor) && (
                                            <p className={styles.itemVariants}>
                                                {[item.selectedSize, item.selectedColor].filter(Boolean).join(' / ')}
                                            </p>
                                        )}
                                        <div className={styles.itemFooter}>
                                            <div className={styles.quantity}>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}>
                                                    <Minus size={14} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}>
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <p className={styles.taxNote}>Taxes and shipping calculated at checkout.</p>
                        <div className={styles.actions}>
                            <Link href="/cart" className={styles.viewCartBtn} onClick={() => setIsCartOpen(false)}>
                                View Full Cart
                            </Link>
                            <Link href="/checkout" className={styles.checkoutBtn} onClick={() => setIsCartOpen(false)}>
                                Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
