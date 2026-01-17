import styles from './Nav2.module.css';
import { useMediaQuery } from "react-responsive";
import { HashLink } from 'react-router-hash-link';
import { FaFire, FaGem, FaLightbulb, FaTable, FaMoon } from "react-icons/fa";

function Nav2() {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    const isDesktop = useMediaQuery({ minWidth: 901 });

    return (
        <>
            {isDesktop && <Nav2Desktop />}
            {isMobile && <Nav2Mobile />}
        </>
    );
}

function Nav2Desktop() {
    return (
        <nav className={styles.nav2}>
            <ul className={styles.categoryList}>
                <li>
                    <HashLink smooth to="/#himalayan" className={styles.categoryItem}>
                        <FaGem className={styles.icon} /> Himalayan Salt
                    </HashLink>
                </li>

                <li>
                    <HashLink smooth to="/#table" className={styles.categoryItem}>
                        <FaTable className={styles.icon} /> Table Lamps
                    </HashLink>
                </li>

                <li>
                    <HashLink smooth to="/#floor" className={styles.categoryItem}>
                        <FaLightbulb className={styles.icon} /> Floor Lamps
                    </HashLink>
                </li>

                <li>
                    <HashLink smooth to="/#selenite" className={styles.categoryItem}>
                        <FaMoon className={styles.icon} /> Selenite Crystals
                    </HashLink>
                </li>
            </ul>

            <div className={styles.promoBadge}>
                <FaFire />
                <span>Trending: Selenite Crystals</span>
            </div>
        </nav>
    );
}

function Nav2Mobile() {
    return (
        <div className={styles.nav2Mobile}>
            <div className={styles.scrollWrapper}>
                <HashLink smooth to="/#himalayan">Salt Lamps</HashLink>
                <HashLink smooth to="/#table">Table</HashLink>
                <HashLink smooth to="/#floor">Floor</HashLink>
                <HashLink smooth to="/#selenite">New Arrivals</HashLink>
                <HashLink smooth to="/#selenite">Sale</HashLink>
            </div>
        </div>
    );
}

export default Nav2;
