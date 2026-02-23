'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types';
import styles from './SearchModal.module.css';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const results = query.trim() === ''
        ? []
        : products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()) ||
            p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 6);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.searchField}>
                        <Search size={24} className={styles.searchIcon} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search for products, categories..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.content}>
                    {query.trim() !== '' && (
                        <div className={styles.results}>
                            {results.length > 0 ? (
                                <>
                                    <div className={styles.resultsHeader}>
                                        <span>Products</span>
                                        <Link href={`/shop?q=${query}`} onClick={onClose}>View all result</Link>
                                    </div>
                                    <div className={styles.resultsList}>
                                        {results.map(product => (
                                            <Link
                                                key={product.id}
                                                href={`/product/${product.slug}`}
                                                className={styles.resultItem}
                                                onClick={onClose}
                                            >
                                                <div className={styles.productThumb}>
                                                    <img src={product.images[0]} alt={product.name} />
                                                </div>
                                                <div className={styles.productInfo}>
                                                    <h4>{product.name}</h4>
                                                    <p>{product.category} • ${product.price}</p>
                                                </div>
                                                <ArrowRight size={18} className={styles.resultArrow} />
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className={styles.noResults}>
                                    <p>No results found for "<strong>{query}</strong>"</p>
                                </div>
                            )}
                        </div>
                    )}

                    {query.trim() === '' && (
                        <div className={styles.quickLinks}>
                            <h3>Popular Categories</h3>
                            <div className={styles.categoryLinks}>
                                <Link href="/shop?category=Apparel" onClick={onClose}>Apparel</Link>
                                <Link href="/shop?category=Accessories" onClick={onClose}>Accessories</Link>
                                <Link href="/shop?category=Home" onClick={onClose}>Home</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
