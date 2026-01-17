import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './OrderCheckout.module.css';
import { auth } from '../../firebase';

function OrderCheckout() {
    const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({ name: "", address: "", phone: "", payment: "cod" });
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        if (auth.currentUser) {
            setFormData(prev => ({ ...prev, name: auth.currentUser.displayName || "" }));
        }
    }, []);

    const handleOrder = () => {
        if (!formData.address || !formData.phone) return alert("Please fill all details");
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) return (
        <div className={styles.emptyCart}>
            <h2>Thank you for your purchase!</h2>
            <p>Your order for Rs. {cartTotal} is being processed.</p>
            <Link to="/" className={styles.continueBtn}>Return Home</Link>
        </div>
    );

    if (cartItems.length === 0) return (
        <div className={styles.emptyCart}>
            <h2>Your Cart is Empty</h2>
            <Link to="/" className={styles.continueBtn}>Continue Shopping</Link>
        </div>
    );

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Checkout</h1>
            <div className={styles.cartContent}>
                <div className={styles.checkoutForm}>
                    <h3>Shipping Details</h3>
                    <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <textarea placeholder="Complete Address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                    <input type="text" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    
                    <h3>Payment Method</h3>
                    <div className={styles.paymentGrid}>
                        <label className={formData.payment === 'cod' ? styles.activePay : ''}>
                            <input type="radio" name="pay" value="cod" checked={formData.payment==='cod'} onChange={e => setFormData({...formData, payment: 'cod'})}/>
                            Cash on Delivery
                        </label>
                        <label className={formData.payment === 'easypaisa' ? styles.activePay : ''}>
                            <input type="radio" name="pay" value="easypaisa" onChange={e => setFormData({...formData, payment: 'easypaisa'})}/>
                            Easypaisa
                        </label>
                        <label className={formData.payment === 'jazz' ? styles.activePay : ''}>
                            <input type="radio" name="pay" value="jazz" onChange={e => setFormData({...formData, payment: 'jazz'})}/>
                            JazzCash
                        </label>
                    </div>
                    <button className={styles.confirmBtn} onClick={handleOrder}>Confirm Order</button>
                </div>
                
                <div className={styles.cartSummary}>
                    <h3>Order Summary</h3>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.miniItem}>
                            <span>{item.name} (x{item.quantity})</span>
                            <span>Rs. {item.newPrice}</span>
                        </div>
                    ))}
                    <hr />
                    <div className={styles.summaryRow}>
                        <strong>Total:</strong>
                        <strong>Rs. {cartTotal.toLocaleString()}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderCheckout;

