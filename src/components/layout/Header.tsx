'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

interface HeaderProps {
    onOpenSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <button
                    className={styles.menuTrigger}
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>

                <Link href="/" className={styles.logo}>
                    NovaMart
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavVisible : ''}`}>
                    <button
                        className={styles.closeMenu}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    <ul className={styles.navList}>
                        <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
                        <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                        <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.actionBtn} aria-label="Search" onClick={onOpenSearch}>
                        <Search size={20} />
                    </button>
                    <button
                        className={styles.cartBtn}
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Toggle cart"
                    >
                        <ShoppingCart size={20} />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;
