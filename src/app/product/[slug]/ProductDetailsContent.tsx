'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ShoppingBag, Truck, RefreshCcw, ShieldCheck, ChevronRight, Plus, Minus } from 'lucide-react';
import { Product, Variant } from '@/types';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import Badge from '@/components/ui/Badge';
import ProductGrid from '@/components/product/ProductGrid';
import styles from './ProductDetails.module.css';

// Helper to keep code clean
const Link = ({ href, children, ...props }: any) => (
    <a href={href} {...props} style={{ color: 'inherit', textDecoration: 'none' }}>{children}</a>
);

export default function ProductDetailsContent({ product, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const [activeImage, setActiveImage] = useState(product.images[0] || '');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const handleAddToCart = () => {
        const hasSize = product.variants?.find((v: Variant) => v.type === 'Size');
        const hasColor = product.variants?.find((v: Variant) => v.type === 'Color');

        if (hasSize && !selectedSize) {
            showToast('Please select a size', 'error');
            return;
        }
        if (hasColor && !selectedColor) {
            showToast('Please select a color', 'error');
            return;
        }

        addToCart(product, quantity, selectedSize, selectedColor);
        showToast(`Added ${quantity} ${product.name} to cart!`);
    };

    const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

    return (
        <div className="container section">
            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs}>
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <Link href="/shop">Shop</Link>
                <ChevronRight size={14} />
                <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
                <ChevronRight size={14} />
                <span>{product.name}</span>
            </nav>

            <div className={styles.productLayout}>
                {/* Media Gallery */}
                <div className={styles.gallery}>
                    <div className={styles.mainImage}>
                        <img src={activeImage} alt={product.name} />
                    </div>
                    <div className={styles.thumbnails}>
                        {product.images.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                className={`${styles.thumbnail} ${activeImage === img ? styles.activeThumbnail : ''}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    <div className={styles.badges}>
                        {product.isNew && <Badge variant="accent">New Arrival</Badge>}
                        {onSale && <Badge variant="success">On Sale</Badge>}
                    </div>

                    <h1 className={styles.title}>{product.name}</h1>

                    <div className={styles.ratingRow}>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                    className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}
                                />
                            ))}
                        </div>
                        <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
                    </div>

                    <div className={styles.priceRow}>
                        <span className={styles.price}>${product.price.toFixed(2)}</span>
                        {onSale && (
                            <span className={styles.comparePrice}>${product.compareAtPrice?.toFixed(2)}</span>
                        )}
                    </div>

                    <p className={styles.shortDesc}>{product.description}</p>

                    <div className={styles.selectors}>
                        {product.variants?.map((variant: Variant) => (
                            <div key={variant.type} className={styles.selectorGroup}>
                                <label>{variant.type}: {variant.type === 'Size' ? selectedSize : selectedColor}</label>
                                <div className={styles.options}>
                                    {variant.options.map((option: string) => (
                                        <button
                                            key={option}
                                            className={`${styles.optionBtn} ${(variant.type === 'Size' ? selectedSize === option : selectedColor === option) ? styles.selectedOption : ''
                                                }`}
                                            onClick={() => variant.type === 'Size' ? setSelectedSize(option) : setSelectedColor(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className={styles.selectorGroup}>
                            <label>Quantity</label>
                            <div className={styles.quantitySelector}>
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease">
                                    <Minus size={18} />
                                </button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase">
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        className={styles.addToCartBtn}
                        onClick={handleAddToCart}
                        disabled={product.stockStatus === 'out_of_stock'}
                    >
                        <ShoppingBag size={20} />
                        {product.stockStatus === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
                    </button>

                    {/* Value Props */}
                    <div className={styles.valueProps}>
                        <div className={styles.prop}>
                            <Truck size={20} />
                            <span>Complimentary shipping on orders over $100</span>
                        </div>
                        <div className={styles.prop}>
                            <RefreshCcw size={20} />
                            <span>Free 30-day extended returns</span>
                        </div>
                        <div className={styles.prop}>
                            <ShieldCheck size={20} />
                            <span>Authentic products with 2-year warranty</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs / Detailed Info */}
            <div className={styles.detailsSection}>
                <div className={styles.tabHeaders}>
                    <button
                        className={activeTab === 'description' ? styles.activeTab : ''}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={activeTab === 'features' ? styles.activeTab : ''}
                        onClick={() => setActiveTab('features')}
                    >
                        Key Features
                    </button>
                    <button
                        className={activeTab === 'shipping' ? styles.activeTab : ''}
                        onClick={() => setActiveTab('shipping')}
                    >
                        Shipping & Returns
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'description' && (
                        <div className="animate-fade-in">
                            <p>{product.description}</p>
                            <p style={{ marginTop: '1rem' }}>Crafted with attention to detail and high-quality materials, this {product.name} is a testament to our commitment to excellence. Whether you're upgrading your daily essentials or looking for the perfect gift, this item delivers on both style and functionality.</p>
                        </div>
                    )}
                    {activeTab === 'features' && (
                        <ul className={styles.featureList}>
                            {product.features.map((feature: string, i: number) => (
                                <li key={i} className="animate-fade-in">
                                    <ChevronRight size={14} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                    {activeTab === 'shipping' && (
                        <div className="animate-fade-in">
                            <h4>Shipping Information</h4>
                            <p>All orders are processed within 1-2 business days. Standard shipping takes 3-5 business days. We offer free standard shipping on all orders over $100.</p>
                            <h4 style={{ marginTop: '1.5rem' }}>Return Policy</h4>
                            <p>We want you to be completely satisfied with your purchase. If for any reason you're not, we offer free returns within 30 days of delivery. The item must be in its original condition and packaging.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className={styles.related}>
                    <h2 className={styles.sectionTitle}>You might also like</h2>
                    <ProductGrid products={relatedProducts} />
                </section>
            )}
        </div>
    );
}
