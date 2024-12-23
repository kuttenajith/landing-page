import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => (
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1>Essential Vitamins</h1>
            <p>Get Your Vitamins & Minerals</p>
            <button>Explore</button>
        </div>
        <img src="/images/hero-product.png" alt="Product" />
    </section>
);

export default HeroSection;
