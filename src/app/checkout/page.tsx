'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Lock, CheckCircle, ArrowRight, Package, CreditCard, User, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

export default function CheckoutPage() {
    const { cart, clearCart, orderSummary } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (cart.length === 0 && !isSuccess) {
        return (
            <div className="container section text-center">
                <h1>Your cart is empty</h1>
                <p>You need items in your cart to checkout.</p>
                <Link href="/shop" style={{ marginTop: '2rem', display: 'inline-block', fontWeight: 700 }}>Return to Shop</Link>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, validate and send to backend
        setIsSuccess(true);
        clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSuccess) {
        return (
            <div className="container section">
                <div className={styles.successContainer}>
                    <div className={styles.successIcon}>
                        <CheckCircle size={80} />
                    </div>
                    <h1>Order Confirmed!</h1>
                    <p>Thank you for your purchase. Your order <strong>#NM-2026-9842</strong> has been placed successfully and will be shipped soon.</p>
                    <div className={styles.successActions}>
                        <Link href="/" className={styles.primaryBtn}>Return Home</Link>
                        <Link href="/shop" className={styles.secondaryBtn}>Keep Shopping</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <div className={styles.header}>
                <Link href="/cart" className={styles.backLink}>
                    <ChevronLeft size={18} /> Back to Cart
                </Link>
                <h1>Checkout</h1>
                <div className={styles.secureBadge}>
                    <Lock size={14} /> Secure Checkout
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.checkoutLayout}>
                {/* Form Column */}
                <div className={styles.formColumn}>
                    {/* Contact Info */}
                    <section className={styles.formSection}>
                        <div className={styles.sectionTitle}>
                            <User size={20} />
                            <h2>Contact Information</h2>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email" id="email" name="email" required
                                placeholder="you@example.com"
                                value={formData.email} onChange={handleInputChange}
                            />
                        </div>
                    </section>

                    {/* Shipping Info */}
                    <section className={styles.formSection}>
                        <div className={styles.sectionTitle}>
                            <Package size={20} />
                            <h2>Shipping Address</h2>
                        </div>
                        <div className={styles.inputGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text" id="firstName" name="firstName" required
                                    value={formData.firstName} onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text" id="lastName" name="lastName" required
                                    value={formData.lastName} onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="address">Street Address</label>
                            <input
                                type="text" id="address" name="address" required
                                value={formData.address} onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="city">City</label>
                                <input
                                    type="text" id="city" name="city" required
                                    value={formData.city} onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="zipCode">ZIP Code</label>
                                <input
                                    type="text" id="zipCode" name="zipCode" required
                                    value={formData.zipCode} onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Payment Info */}
                    <section className={styles.formSection}>
                        <div className={styles.sectionTitle}>
                            <CreditCard size={20} />
                            <h2>Payment Details</h2>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text" id="cardNumber" name="cardNumber" required
                                placeholder="0000 0000 0000 0000"
                                value={formData.cardNumber} onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="expiry">Expiry (MM/YY)</label>
                                <input
                                    type="text" id="expiry" name="expiry" required
                                    placeholder="MM/YY"
                                    value={formData.expiry} onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text" id="cvv" name="cvv" required
                                    placeholder="123"
                                    value={formData.cvv} onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </section>

                    <button type="submit" className={styles.placeOrderBtn}>
                        Place Order (${orderSummary.total.toFixed(2)})
                    </button>
                </div>

                {/* Sidebar Summary */}
                <aside className={styles.summarySidebar}>
                    <div className={styles.summaryCard}>
                        <h3>Order Summary</h3>
                        <div className={styles.itemsList}>
                            {cart.map(item => (
                                <div key={`${item.id}-${item.selectedSize}`} className={styles.summaryItem}>
                                    <div className={styles.itemImage}>
                                        <img src={item.images[0]} alt={item.name} />
                                        <span className={styles.itemQuantity}>{item.quantity}</span>
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.summaryDivider} />

                        <div className={styles.summaryLine}>
                            <span>Subtotal</span>
                            <span>${orderSummary.subtotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryLine}>
                            <span>Shipping</span>
                            <span>{orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping.toFixed(2)}`}</span>
                        </div>
                        <div className={styles.summaryLine}>
                            <span>Taxes</span>
                            <span>${orderSummary.tax.toFixed(2)}</span>
                        </div>

                        <div className={styles.summaryDivider} />

                        <div className={`${styles.summaryLine} ${styles.totalLine}`}>
                            <span>Total</span>
                            <span>${orderSummary.total.toFixed(2)}</span>
                        </div>
                    </div>
                </aside>
            </form>
        </div>
    );
}
