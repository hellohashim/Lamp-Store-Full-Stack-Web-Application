import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase'; 
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import styles from './signin.module.css';

function Signin() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState(""); // New Name state
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Error state
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // Update the profile with the Name
                await updateProfile(userCredential.user, { displayName: name });
            }
            navigate('/');
        } catch (error) {
            setError("Error: " + error.message);
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authBox}>
                <div className={styles.formSide}>
                    <h2 className={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <form onSubmit={handleAuth}>
                        {!isLogin && (
                            <div className={styles.inputGroup}>
                                <label>Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                        )}
                        <div className={styles.inputGroup}>
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        
                        <button type="submit" className={styles.mainBtn}>
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>
                    <div className={styles.divider}>OR</div>
                    <button onClick={() => signInWithPopup(auth, googleProvider).then(() => navigate('/'))} className={styles.googleBtn}>
                        <FaGoogle style={{ marginRight: '10px' }} /> Sign in with Google
                    </button>
                    <div className={styles.toggleText}>
                         <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create an account" : "Back to Login"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signin;