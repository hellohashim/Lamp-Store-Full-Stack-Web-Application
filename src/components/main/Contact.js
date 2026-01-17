import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    // Check validity whenever form data changes
    useEffect(() => {
        const isValid = formData.name.trim() !== '' && 
                        formData.email.trim() !== '' && 
                        formData.phone.trim() !== '';
        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will contact you shortly.");
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.infoSection}>
                    <h1 className={styles.heading}>Contact Us</h1>
                    <p className={styles.subText}>
                        Have questions about our lamps? We are here to help.
                    </p>
                    <div className={styles.phoneDisplay}>
                        <span>Call us directly:</span>
                        <h3>+92 316 0515057</h3>
                    </div>
                    
                </div>

                <form className={styles.formSection} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Name <span className={styles.required}>*</span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Haris" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Email <span className={styles.required}>*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Haris@example.com" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Phone <span className={styles.required}>*</span></label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+923123456789" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help you?"></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.submitBtn} 
                        disabled={!isFormValid}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;