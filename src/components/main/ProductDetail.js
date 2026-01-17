import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allLamps } from './LampsData';
import LampCard from './LampCard';
import styles from './ProductDetail.module.css';
import { FaStar, FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { db, auth } from '../../firebase';
import { collection, addDoc, query, where, onSnapshot, deleteDoc, doc, orderBy, serverTimestamp } from "firebase/firestore";

const getLampImage = (src) => {
  try { return require(`../../assets/Lamp-images/${src}`); }
  catch (e) { return "https://via.placeholder.com/400"; }
};

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [user, setUser] = useState(null);
  const [banner, setBanner] = useState("");

  let product = null;
  let categoryName = "";
  for (const [cat, list] of Object.entries(allLamps)) {
    const found = list.find(l => l.id === parseInt(id));
    if (found) { product = found; categoryName = cat; break; }
  }

  useEffect(() => {
    const unsubAuth = auth.onAuthStateChanged(u => setUser(u));
    const q = query(collection(db, "reviews"), where("productId", "==", id), orderBy("createdAt", "desc"));
    const unsubReviews = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => { unsubAuth(); unsubReviews(); };
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setBanner("Success: Item added to cart!");
    setTimeout(() => setBanner(""), 3000);
  };

  const handlePostReview = async () => {
    if (!user) return alert("Please login to post a review");
    if (!reviewText) return;
    await addDoc(collection(db, "reviews"), {
      productId: id,
      text: reviewText,
      userName: user.displayName || user.email.split('@')[0],
      userEmail: user.email,
      createdAt: serverTimestamp()
    });
    setReviewText("");
  };

  if (!product) return <h2>Product not found</h2>;
  const relatedProducts = allLamps[categoryName].filter(l => l.id !== product.id);

  return (
    <div className={styles.container}>
      {banner && <div className={styles.successBanner}>{banner}</div>}
      <div className={styles.mainLayout}>
        <div className={styles.imageSection}>
          <button className={styles.arrowBtn}><FaChevronLeft /></button>
          <img src={getLampImage(product.src)} alt={product.name} className={styles.mainImg} />
          <button className={styles.arrowBtn}><FaChevronRight /></button>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <FaStar key={i} color={i < 4 ? "#ffc107" : "#e4e5e9"} />)}
              <span>({reviews.length} Reviews)</span>
            </div>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.newPrice}>Rs. {product.newPrice}</span>
          </div>
          <div className={styles.purchaseAction}>
            <div className={styles.quantitySelector}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={styles.tabsSection}>
        <div className={styles.tabHeaders}>
          <button onClick={() => setActiveTab('details')} className={activeTab === 'details' ? styles.activeTab : ''}>Details</button>
          <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? styles.activeTab : ''}>Reviews</button>
        </div>
        <div className={styles.tabContent}>
          {activeTab === 'details' ? (
            <p>Premium quality {product.name} lighting designed for modern interiors.</p>
          ) : (
            <div className={styles.reviewSection}>
              <div className={styles.addReview}>
                 <h4>Write a Review</h4>
                 <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Share your thoughts..."></textarea>
                 <button onClick={handlePostReview} className={styles.submitReview}>Post Review</button>
              </div>
              <div className={styles.reviewList}>
                {reviews.map(rev => (
                  <div key={rev.id} className={styles.reviewItem}>
                    <div className={styles.reviewerInfo}>
                       <div className={styles.reviewAvatar}>{rev.userName[0].toUpperCase()}</div>
                       <strong>{rev.userName}</strong>
                    </div>
                    <p>{rev.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;