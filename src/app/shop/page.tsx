'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { fetchProducts } from '@/data/productsApi';
import { Product, Category } from '@/types';
import ProductGrid from '@/components/product/ProductGrid';
import styles from './Shop.module.css';

export default async function ShopPage() {
    const initialProducts = await fetchProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopContent initialProducts={initialProducts} />
        </Suspense>
    );
}

function ShopContent({ initialProducts }: { initialProducts: Product[] }) {
    const searchParams = useSearchParams();

    // State for filters
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<number>(300);
    const [minRating, setMinRating] = useState<number>(0);
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [onlyInStock, setOnlyInStock] = useState(false);

    // Sync with URL params on mount
    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat) setSelectedCategory(cat);

        const filter = searchParams.get('filter');
        if (filter === 'new') setSortBy('newest');
        if (filter === 'popular' || filter === 'bestsellers') setSortBy('rating');
        if (filter === 'bestsellers') setOnlyInStock(true); // Optional: bestsellers usually focused on in-stock
    }, [searchParams]);

    // Filtered and sorted products
    const filteredProducts = useMemo(() => {
        const urlFilter = searchParams.get('filter');

        return initialProducts
            .filter((product: Product) => {
                const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                const matchesCategory = !selectedCategory || product.category === selectedCategory;
                const matchesPrice = product.price <= priceRange;
                const matchesRating = product.rating >= minRating;
                const matchesStock = !onlyInStock || product.stockStatus !== 'out_of_stock';

                // Special check for bestsellers if from URL
                const matchesBestseller = urlFilter !== 'bestsellers' || product.isBestSeller;

                return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesStock && matchesBestseller;
            })
            .sort((a: Product, b: Product) => {
                if (sortBy === 'price-low') return a.price - b.price;
                if (sortBy === 'price-high') return b.price - a.price;
                if (sortBy === 'rating') return b.rating - a.rating;
                if (sortBy === 'newest') return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
                return 0; // Default: featured (original order)
            });
    }, [initialProducts, searchQuery, selectedCategory, priceRange, minRating, sortBy, onlyInStock]);

    const categories: Category[] = ['Apparel', 'Accessories', 'Home'];

    return (
        <div className="container section">
            <div className={styles.shopHeader}>
                <h1>Shop All Products</h1>
                <p>Explore our complete collection of elevated essentials.</p>
            </div>

            <div className={styles.shopLayout}>
                {/* Sidebar Filters - Desktop */}
                <aside className={`${styles.sidebar} ${showFilters ? styles.sidebarVisible : ''}`}>
                    <div className={styles.sidebarHeader}>
                        <h3>Filters</h3>
                        <button className={styles.closeBtn} onClick={() => setShowFilters(false)}><X size={20} /></button>
                    </div>

                    <div className={styles.filterGroup}>
                        <h4>Search</h4>
                        <div className={styles.searchBox}>
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <h4>Category</h4>
                        <div className={styles.categoryList}>
                            <button
                                className={!selectedCategory ? styles.active : ''}
                                onClick={() => setSelectedCategory(null)}
                            >
                                All Categories
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={selectedCategory === cat ? styles.active : ''}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <h4>Max Price: ${priceRange}</h4>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            step="10"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className={styles.rangeInput}
                        />
                    </div>

                    <div className={styles.filterGroup}>
                        <h4>Minimum Rating</h4>
                        <div className={styles.ratingList}>
                            {[4, 3, 2, 0].map(rating => (
                                <button
                                    key={rating}
                                    className={minRating === rating ? styles.active : ''}
                                    onClick={() => setMinRating(rating)}
                                >
                                    {rating === 0 ? 'Any Rating' : `${rating}+ Stars`}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={onlyInStock}
                                onChange={(e) => setOnlyInStock(e.target.checked)}
                            />
                            In Stock Only
                        </label>
                    </div>

                    <button
                        className={styles.resetBtn}
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory(null);
                            setPriceRange(300);
                            setMinRating(0);
                            setOnlyInStock(false);
                        }}
                    >
                        Reset Filters
                    </button>
                </aside>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    <div className={styles.toolbar}>
                        <div className={styles.countText}>
                            Showing <strong>{filteredProducts.length}</strong> products
                        </div>

                        <div className={styles.toolbarActions}>
                            <button className={styles.mobileFilterBtn} onClick={() => setShowFilters(true)}>
                                <SlidersHorizontal size={18} /> Filters
                            </button>

                            <div className={styles.sortWrapper}>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className={styles.sortSelect}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                                <ChevronDown size={14} className={styles.sortIcon} />
                            </div>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <ProductGrid products={filteredProducts} />
                    ) : (
                        <div className={styles.noResults}>
                            <h3>No products found</h3>
                            <p>Try adjusting your search or filters to find what you're looking for.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory(null);
                                    setPriceRange(300);
                                    setMinRating(0);
                                }}
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
