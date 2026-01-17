import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.heroSection}>
                <h1>Illuminating Serenity</h1>
                <p>Handcrafted salt lamps for a warmer, healthier home.</p>
            </div>
            
            <div className={styles.contentSection}>
                <div className={styles.textBlock}>
                    <h2>Our Fine Salt Lamps</h2>
                    <p>
                        Sourced from the foothills of the Himalayas, our salt lamps are more than just light fixtures—they are pieces of ancient history. Each lamp is hand-carved to preserve its natural crystal structure, emitting a warm, amber glow that instantly transforms the atmosphere of any room.
                    </p>
                    <p>
                        We believe in the power of natural light to soothe the mind. Whether you are looking to purify your air or simply add a touch of elegance to your nightstand, our collection offers the highest quality mineral craftsmanship.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                   
                </div>
            </div>
        </div>
    );
}

export default About;