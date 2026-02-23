'use client';

import React from 'react';
import { Target, Leaf, Sparkles, Award } from 'lucide-react';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <div className="container section">
            <div className={styles.hero}>
                <span className={styles.subheading}>Our Story</span>
                <h1>Everyday essentials, elevated.</h1>
                <p className={styles.lead}>
                    NovaMart was founded with a simple objective: to bring high-quality, beautifully designed essentials into every home.
                </p>
            </div>

            <div className={styles.imageSection}>
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
                    alt="Our Workshop"
                />
            </div>

            <div className={styles.storySection}>
                <div className={styles.column}>
                    <h2>The NovaMart Philosophy</h2>
                    <p>We believe that the items you use every day should be a source of joy. From the shirt you put on in the morning to the clock on your wall, every object has the potential to elevate your mood and reflect your values.</p>
                    <p>That’s why we obsess over the details. We source the finest organic cottons, sustainable woods, and durable metals to ensure that NovaMart products aren’t just beautiful—they’re built to last.</p>
                </div>
                <div className={styles.column}>
                    <h2>Quality Without Compromise</h2>
                    <p>Our design process is rooted in minimalism and functionality. We strip away the unnecessary, focusing on core features and timeless aesthetics. The result is a collection of essentials that feel modern yet classic.</p>
                    <p>By working directly with master craftsmen and ethical manufacturers, we’re able to provide premium quality without the traditional luxury markup.</p>
                </div>
            </div>

            <div className={styles.pillars}>
                <div className={styles.pillar}>
                    <Target size={32} />
                    <h3>Curated Selection</h3>
                    <p>We don't believe in endless choice. We believe in the right choice. Our catalog is intentionally limited to the best of the best.</p>
                </div>
                <div className={styles.pillar}>
                    <Leaf size={32} />
                    <h3>Sustainability</h3>
                    <p>We are committed to reducing our footprint. From organic fabrics to plastic-free packaging, we prioritize the planet.</p>
                </div>
                <div className={styles.pillar}>
                    <Sparkles size={32} />
                    <h3>Design First</h3>
                    <p>Form and function are inseparable at NovaMart. Our products are designed to be as efficient as they are beautiful.</p>
                </div>
                <div className={styles.pillar}>
                    <Award size={32} />
                    <h3>Lasting Value</h3>
                    <p>Quality is the ultimate sustainability. Our products are tested for durability to ensure they serve you for years to come.</p>
                </div>
            </div>
        </div>
    );
}
