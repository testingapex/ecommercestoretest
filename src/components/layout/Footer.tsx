'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            // In a real app, this would call an API
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.main}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            NovaMart
                        </Link>
                        <p className={styles.tagline}>
                            Everyday essentials, elevated. We bring you curated products that blend function with sophisticated design.
                        </p>
                        <div className={styles.socials}>
                            <button aria-label="Instagram"><Instagram size={20} /></button>
                            <button aria-label="Twitter"><Twitter size={20} /></button>
                            <button aria-label="Facebook"><Facebook size={20} /></button>
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/shop?category=Apparel">Apparel</Link></li>
                            <li><Link href="/shop?category=Accessories">Accessories</Link></li>
                            <li><Link href="/shop?category=Home">Home</Link></li>
                            <li><Link href="/shop?filter=new">New Arrivals</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h4>Newsletter</h4>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Join</button>
                        </form>
                        {isSubscribed && <span className={styles.success}>Thanks for subscribing!</span>}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} NovaMart. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
