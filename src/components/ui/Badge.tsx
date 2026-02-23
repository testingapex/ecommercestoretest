'use client';

import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'success';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {children}
        </span>
    );
};

export default Badge;
