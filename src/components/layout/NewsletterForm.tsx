'use client';

import React from 'react';
import styles from '@/app/page.module.css';

export default function NewsletterForm() {
    return (
        <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" required />
            <button type="submit">Subscribe Now</button>
        </form>
    );
}
