'use client';

import React from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Cart.module.css';

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, orderSummary } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container section">
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>
                        <ShoppingBag size={64} />
                    </div>
                    <h1>Your cart is empty</h1>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link href="/shop" className={styles.shopBtn}>
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>Your Shopping Bag</h1>

            <div className={styles.cartLayout}>
                {/* Cart Items List */}
                <div className={styles.itemsColumn}>
                    <div className={styles.itemsHeader}>
                        <span>Product</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>

                    <div className={styles.itemsList}>
                        {cart.map((item) => (
                            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className={styles.item}>
                                <div className={styles.productInfo}>
                                    <div className={styles.itemImage}>
                                        <img src={item.images[0]} alt={item.name} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <Link href={`/product/${item.slug}`}>
                                            <h3>{item.name}</h3>
                                        </Link>
                                        {(item.selectedSize || item.selectedColor) && (
                                            <p className={styles.itemMeta}>
                                                {[item.selectedSize, item.selectedColor].filter(Boolean).join(' / ')}
                                            </p>
                                        )}
                                        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                        >
                                            <Trash2 size={16} /> Remove
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.quantityControl}>
                                    <div className={styles.quantityBox}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}>
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.itemTotal}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cartFooter}>
                        <Link href="/shop" className={styles.continueLink}>
                            ← Continue Shopping
                        </Link>
                        <div className={styles.shippingNotice}>
                            <Truck size={18} />
                            <span>{orderSummary.shipping === 0 ? 'Your order qualifies for FREE shipping!' : `Add $${(100 - orderSummary.subtotal).toFixed(2)} more for FREE shipping.`}</span>
                        </div>
                    </div>
                </div>

                {/* Order Summary Sidebar */}
                <aside className={styles.summarySidebar}>
                    <div className={styles.summaryCard}>
                        <h2>Order Summary</h2>

                        <div className={styles.summaryLine}>
                            <span>Subtotal</span>
                            <span>${orderSummary.subtotal.toFixed(2)}</span>
                        </div>

                        <div className={styles.summaryLine}>
                            <div className={styles.labelWithInfo}>
                                <span>Shipping</span>
                                <Info size={14} />
                            </div>
                            <span>{orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping.toFixed(2)}`}</span>
                        </div>

                        <div className={styles.summaryLine}>
                            <span>Estimated Tax</span>
                            <span>${orderSummary.tax.toFixed(2)}</span>
                        </div>

                        <div className={styles.summaryDivider} />

                        <div className={`${styles.summaryLine} ${styles.totalLine}`}>
                            <span>Total</span>
                            <span>${orderSummary.total.toFixed(2)}</span>
                        </div>

                        <Link href="/checkout" className={styles.checkoutBtn}>
                            Proceed to Checkout <ArrowRight size={20} />
                        </Link>

                        <div className={styles.paymentMethods}>
                            <p>We Accept</p>
                            <div className={styles.paymentIcons}>
                                <div className={styles.iconPlaceholder}>VISA</div>
                                <div className={styles.iconPlaceholder}>MC</div>
                                <div className={styles.iconPlaceholder}>AMEX</div>
                                <div className={styles.iconPlaceholder}>PP</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
