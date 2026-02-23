import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { fetchProducts } from '@/data/productsApi';
import ProductGrid from '@/components/product/ProductGrid';
import NewsletterForm from '@/components/layout/NewsletterForm';
import styles from './page.module.css';

export default async function Home() {
  const products = await fetchProducts();
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} animate-slide-up`}>
            <span className={styles.heroBadge}>New Collection 2026</span>
            <h1>Everyday essentials, elevated.</h1>
            <p>Discover our curated collection of premium apparel, accessories, and home goods designed for the modern lifestyle.</p>
            <div className={styles.heroActions}>
              <Link href="/shop" className={styles.primaryBtn}>
                Shop New Arrivals <ArrowRight size={18} />
              </Link>
              <Link href="/shop" className={styles.secondaryBtn}>
                Browse Best Sellers
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1523381235312-3a1647fa9921?q=80&w=1470&auto=format&fit=crop"
              alt="NovaMart Hero"
            />
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <section className={styles.features}>
        <div className={`container ${styles.featuresContainer}`}>
          <div className={styles.feature}>
            <Truck size={24} />
            <div>
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
          </div>
          <div className={styles.feature}>
            <ShieldCheck size={24} />
            <div>
              <h3>Secure Payment</h3>
              <p>100% secure checkout</p>
            </div>
          </div>
          <div className={styles.feature}>
            <RefreshCcw size={24} />
            <div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Shop by Category</h2>
            <Link href="/shop" className={styles.viewAll}>View All Categories</Link>
          </div>
          <div className={styles.categoryGrid}>
            <Link href="/shop?category=Apparel" className={styles.categoryCard}>
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop" alt="Apparel" />
              <div className={styles.categoryOverlay}>
                <h3>Apparel</h3>
              </div>
            </Link>
            <Link href="/shop?category=Accessories" className={styles.categoryCard}>
              <img src="https://images.unsplash.com/photo-1544816153-12ad23689f41?q=80&w=800&auto=format&fit=crop" alt="Accessories" />
              <div className={styles.categoryOverlay}>
                <h3>Accessories</h3>
              </div>
            </Link>
            <Link href="/shop?category=Home" className={styles.categoryCard}>
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=800&auto=format&fit=crop" alt="Home" />
              <div className={styles.categoryOverlay}>
                <h3>Home</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" style={{ background: 'hsl(var(--secondary))' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.subheading}>Most Popular</span>
              <h2>Best Sellers</h2>
            </div>
            <Link href="/shop?filter=popular" className={styles.viewAllBtn}>Shop All</Link>
          </div>
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.subheading}>Just In</span>
              <h2>New Arrivals</h2>
            </div>
            <Link href="/shop?filter=new" className={styles.viewAllBtn}>Explore New Items</Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaContent}>
            <h2>Join the NovaMart Society</h2>
            <p>Sign up to receive updates, access to exclusive deals, and 10% off your first order.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
