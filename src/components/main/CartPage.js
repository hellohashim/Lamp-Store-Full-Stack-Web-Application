import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate
import styles from './CartPage.module.css';

const getLampImage = (src) => {
  try { return require(`../../assets/Lamp-images/${src}`); }
  catch (e) { return "https://via.placeholder.com/100"; }
};

function CartPage() {
    const { cartItems, removeFromCart, cartTotal } = useCart();
    const navigate = useNavigate(); // 2. Initialize navigate

    if (cartItems.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>Your Cart is Empty</h2>
                <Link to="/" className={styles.continueBtn}>Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Shopping Cart</h1>
            <div className={styles.cartContent}>
                <div className={styles.cartItems}>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={getLampImage(item.src)} alt={item.name} className={styles.itemImg} />
                            <div className={styles.itemDetails}>
                                <h3>{item.name}</h3>
                                <p>Rs. {item.newPrice}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
                            </div>
                            <div className={styles.itemTotal}>
                                Rs. {(parseFloat(item.newPrice.replace(/,/g, '')) * item.quantity).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={styles.cartSummary}>
                    <h3>Order Summary</h3>
                    <div className={styles.summaryRow}>
                        <span>Subtotal ({cartItems.reduce((a,c) => a + c.quantity,0)} items):</span>
                        <span>Rs. {cartTotal.toLocaleString()}</span>
                    </div>
                    {/* 3. Added onClick event here */}
                    <button 
                        className={styles.checkoutBtn} 
                        onClick={() => navigate('/checkout')}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CartPage;