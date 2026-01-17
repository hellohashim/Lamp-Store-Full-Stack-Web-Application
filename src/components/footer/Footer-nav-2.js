import styles from './Footer-nav-2.module.css';
import amazonLogo2 from '../../assets/amazon-logo-2.png';
import world_symbol from '../../assets/world-symbol.png';
import dropdownIcon from '../../assets/up-and-down-arrow.png';
import dollarSign from '../../assets/dollar-sign.png';
function FooterNav2()
{
    return(
        <section className={`d-flex align-items-center justify-content-center ${styles["footer-nav-2-section"]}`}>
            <div className={`${styles["footer-nav-2-logo-container"]} ${styles["hide-on-mobile"]}`}>
                <img src={amazonLogo2} alt="Amazon logo" />
            </div>
            <ul className={`d-flex gap-2 ${styles["footer-nav-2-ul"]}`}>
                <li className={`${styles["footer-nav-2-li"]}`}>
                    <a className={`d-flex align-items-center justify-content-between ${styles["footer-nav-2-li1-a"]}`} href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang">
                        <div className={`d-flex align-items-center ${styles["footer-nav-2-li1-2items"]}`}>
                            <img className={`${styles["footer-nav-2-world-symbol"]} ${styles["footer-nav-2-ul-imgs"]}`} src={world_symbol} alt="world icon" />
                            <div className={`${styles["footer-nav-2-language"]}`}>English</div>
                        </div>
                        <img className={`${styles["footer-nav-2-dropdown-arrows"]} ${styles["footer-nav-2-ul-imgs"]} ${styles["hide-on-mobile"]}`} src={dropdownIcon} alt="v" />
                    </a>
                </li>
                <li className={`${styles["footer-nav-2-li"]} ${styles["footer-similar-li"]}`}>
                    <a className={`d-flex align-items-center ${styles["footer-nav-2-li2-a"]}`} href="https://www.amazon.com/customer-preferences/edit?ie=UTF8&ref_=footer_cop&preferencesReturnUrl=%2Famz-books%2Fstore">
                        <div className={`${styles["footer-nav2-currency-symbol"]}`}> <img className={`${styles["footer-nav-2-ul-imgs"]}`} src={dollarSign} alt="$" /></div>
                        <div className={`${styles["footer-nav-2-currency-name"]}`}>USD - U.S. Dollar</div>
                    </a>
                </li>

                <li className={`${styles["footer-nav-2-li"]} ${styles["footer-similar-li"]}`}>
                    <a className={`d-flex align-items-center ${styles["footer-nav-2-li2-a"]}`} href="https://www.amazon.com/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_icp_cp">
                        <div className={`fi fi-us ${styles["footer-nav2-flag-icon"]}`}></div>
                        <div className={`${styles["footer-nav-2-country-name"]}`}>United States</div>
                    </a>
                </li>

            </ul>
        </section>
    )
}

export default FooterNav2;