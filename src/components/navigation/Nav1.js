import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { FaUserCircle, FaBars, FaTimes, FaSignOutAlt, FaEdit } from "react-icons/fa"; 
import styles from './Nav1.module.css';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

function Nav1({ onSearch }) {
    const isMobile = useMediaQuery({ maxWidth: 1271 });
    const isDesktop = useMediaQuery({ minWidth: 1272 });
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setShowDropdown(false);
        navigate('/');
    };

    const UserSection = () => (
        user ? (
            <div className={styles.userContainer}>
                <div className={styles.avatarCircle} onClick={() => setShowDropdown(!showDropdown)}>
                    {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                </div>
                {showDropdown && (
                    <div className={styles.userDropdown}>
                        <div className={styles.dropdownHeader}>
                            <strong>{user.displayName || "User"}</strong>
                            <span>{user.email}</span>
                        </div>
                        <hr />
                        <button onClick={() => navigate('/signin')} className={styles.dropBtn}>
                            <FaEdit size={14}/> Change Name
                        </button>
                        <button onClick={handleLogout} className={styles.logoutBtn}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                )}
            </div>
        ) : (
            <Link to="/signin" className={styles.iconLink}>
                <div className={styles.signInWrapper}>
                    <FaUserCircle size={24} />
                    <span>Sign In</span>
                </div>
            </Link>
        )
    );

    return (
        <>
            {isDesktop && <NavDesktop onSearch={onSearch} UserSection={UserSection} />} 
            {isMobile && <MobileNav onSearch={onSearch} UserSection={UserSection} />}
        </>
    );
}

function NavDesktop({ onSearch, UserSection }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logoSection}>
                    <Link to="/" className={styles.brandName}>LUMIÈRE</Link>
                </div>
                <div className={styles.searchSection}>
                    <SearchBar onSearch={onSearch} />
                </div>
                <ul className={styles.navLinks}>
                    <li><Link to="/" className={styles.link}>Home</Link></li>
                    <li><Link to="/about" className={styles.link}>About</Link></li>
                    <li><Link to="/contact" className={styles.link}>Contact</Link></li>
                </ul>
                <div className={styles.rightIcons}>
                    <UserSection />
                    <div className={styles.cartWrapper}><Cart /></div>
                </div>
            </div>
        </nav>
    );
}

function MobileNav({ onSearch, UserSection }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <nav className={styles.mobileNavbar}>
            <div className={styles.mobileTop}>
                <button className={styles.menuBtn} onClick={() => setIsDrawerOpen(true)}>
                    <FaBars size={24} color="#fff"/>
                </button>
                <Link to="/" className={styles.brandNameMobile}>LUMIÈRE</Link>
                <div className={styles.mobileRight}>
                    <UserSection />
                    <Cart />
                </div>
            </div>
            <div className={styles.mobileSearch}><SearchBar onSearch={onSearch} /></div>
            {isDrawerOpen && (
                <>
                    <div className={`${styles.sideDrawer} ${styles.drawerOpen}`}>
                        <div className={styles.drawerHeader}>
                            <h2 className={styles.drawerBrand}>LUMIÈRE</h2>
                            <button className={styles.closeBtn} onClick={() => setIsDrawerOpen(false)}><FaTimes size={24} color="#fff"/></button>
                        </div>
                        <ul className={styles.drawerLinks}>
                            <li><Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setIsDrawerOpen(false)}>About</Link></li>
                            <li><Link to="/contact" onClick={() => setIsDrawerOpen(false)}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.backdrop} onClick={() => setIsDrawerOpen(false)}></div>
                </>
            )}
        </nav>
    );
}
export default Nav1;