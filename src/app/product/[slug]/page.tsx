import React from 'react';
import Link from 'next/link';
import { fetchProducts, fetchProductBySlug } from '@/data/productsApi';
import ProductDetailsContent from './ProductDetailsContent';
import styles from './ProductDetails.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const product = await fetchProductBySlug(slug);

    // Fetch related products
    const allProducts = await fetchProducts();
    const relatedProducts = allProducts
        .filter((p) => product && p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    if (!product) {
        return (
            <div className="container section text-center">
                <h1>Product Not Found</h1>
                <p>Sorry, the product you're looking for doesn't exist.</p>
                <Link href="/shop" className={styles.backBtn} style={{ fontWeight: 700, display: 'inline-block', marginTop: '1rem' }}>
                    Back to Shop
                </Link>
            </div>
        );
    }

    return (
        <ProductDetailsContent product={product} relatedProducts={relatedProducts} />
    );
}
