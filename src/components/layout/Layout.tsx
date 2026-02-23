'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';
import SearchModal from './SearchModal';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header onOpenSearch={() => setIsSearchOpen(true)} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
            <CartDrawer />
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </div>
    );
};

export default Layout;
