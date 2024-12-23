import React from 'react';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = () => {
    const features = [
        { title: 'Clinically Studied', icon: '/images/feature-clinical.png' },
        { title: 'Vegetarian Friendly', icon: '/images/feature-vegetarian.png' },
        { title: 'Made in India', icon: '/images/feature-india.png' },
        { title: 'Free Shipping', icon: '/images/feature-shipping.png' },
        { title: 'No Risk', icon: '/images/feature-risk.png' },
        { title: 'GMO Free', icon: '/images/feature-gmo.png' },
    ];

    return (
        <section className={styles.features}>
            {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                    <img src={feature.icon} alt={feature.title} />
                    <h3>{feature.title}</h3>
                </div>
            ))}
        </section>
    );
};

export default FeaturesSection;
