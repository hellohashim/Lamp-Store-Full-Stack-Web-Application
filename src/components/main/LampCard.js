import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LampCard.module.css';

const getLampImage = (src) => {
  try {
    return require(`../../assets/Lamp-images/${src}`);
  } catch {
    return "https://via.placeholder.com/160x200?text=Lamp";
  }
};

function LampCard({ id, name, src, oldPrice, newPrice }) {
  return (
    <div className={styles.card}>
      
      {/* 🔑 Invisible clickable overlay */}
      <Link to={`/product/${id}`} className={styles.cardLink} />

      {/* Actual visible content */}
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src={getLampImage(src)}
            alt={name}
            className={styles.lampImg}
          />
        </div>

        <div className={styles.info}>
          <h5 className={styles.title}>{name}</h5>
          <div className={styles.priceRow}>
            <span className={styles.rsSymbol}>Rs.</span>
            <span className={styles.mainPrice}>{newPrice}</span>
            {oldPrice && (
              <span className={styles.strikePrice}>
                Rs. {oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LampCard;
