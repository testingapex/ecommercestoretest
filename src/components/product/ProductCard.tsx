'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import Badge from '../ui/Badge';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        showToast(`Added ${product.name} to cart!`);
    };

    const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

    return (
        <div className={styles.card}>
            <Link href={`/product/${product.slug}`} className={styles.imageLink}>
                <div className={styles.imageContainer}>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className={styles.image}
                        loading="lazy"
                    />

                    <div className={styles.badges}>
                        {product.isNew && <Badge variant="accent">New</Badge>}
                        {onSale && <Badge variant="success">Sale</Badge>}
                        {product.isBestSeller && <Badge variant="primary">Popular</Badge>}
                    </div>

                    <div className={styles.overlay}>
                        <button
                            className={styles.quickAdd}
                            onClick={handleQuickAdd}
                            aria-label="Quick Add to Cart"
                        >
                            <ShoppingBag size={20} />
                            <span>Quick Add</span>
                        </button>
                    </div>
                </div>
            </Link>

            <div className={styles.content}>
                <div className={styles.category}>{product.category}</div>
                <Link href={`/product/${product.slug}`}>
                    <h3 className={styles.title}>{product.name}</h3>
                </Link>

                <div className={styles.footer}>
                    <div className={styles.priceContainer}>
                        <span className={styles.price}>${product.price}</span>
                        {onSale && (
                            <span className={styles.comparePrice}>${product.compareAtPrice}</span>
                        )}
                    </div>

                    <div className={styles.rating}>
                        <Star size={12} fill="currentColor" />
                        <span>{product.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
