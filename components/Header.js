import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src="/images/logo.png" alt="Elbrit Logo" />
        </div>
    </header>
);

export default Header;
