import styles from './Footer-nav-1.module.css';
import { useMediaQuery } from "react-responsive";
import topIcon from '../../assets/top-icon.png'
import { useEffect } from 'react';
function FooterNav1()
{
    useEffect(() => {
    const buttons = document.querySelectorAll(`.${styles["back-to-top-button"]}`);
    const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    buttons.forEach(btn => btn.addEventListener("click", handleClick));

    return () => {
        buttons.forEach(btn => btn.removeEventListener("click", handleClick));
    };
    }, []);

    {/*Media queries for responsive design */}
    const isMobile = useMediaQuery({ maxWidth: 1270 });
    const isDesktop = useMediaQuery({ minWidth: 1271 });

    return (
    <>
      {isDesktop && <FooterDesktop />}
      {isMobile && <FooterMobile/>}
    </>
  );
}

function FooterDesktop()
{
    return(
        <>
            <div>
                <button className={`${styles["back-to-top-button"]}`}>
                    Back to top
                </button>
            </div>

            <div className={`${styles["footer-1-links-container"]}`}>
                <div className={`${styles["footer1-column"]}`}>
                    <div className={`${styles["footer-1-links-heading"]}`}>
                        <h6>Get to Know Us</h6>
                    </div>
                    <ul className={`${styles["footer-links-ul-column"]}`}>
                        <li class="footer-1-links"><a href="https://www.amazon.jobs/en/">Careers</a></li>
                        <li class="footer-1-links"><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Blog</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/amz-books/store?node=283155&ref_=apb_psf&ie=UTF8">About Amazon</a></li>
                        <li class="footer-1-links"><a href="https://ir.aboutamazon.com/overview/default.aspx">Investor Relations</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices">Amazon Devices</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">Amazon Science</a></li>
                    </ul>
                </div>


                <div className={`${styles["footer1-column"]}`}>
                    <div className={`${styles["footer-1-links-heading"]}`}>
                        <h6>Make Money with Us</h6>
                    </div>
                    <ul className={`${styles["footer-links-ul-column"]}`}>
                        <li class="footer-1-links"><a href="https://www.amazon.jobs/en/">Sell products on Amazon</a></li>
                        <li class="footer-1-links"><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Sell on Amazon Business</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/amz-books/store?node=283155&ref_=apb_psf&ie=UTF8">Sell apps on Amazon</a></li>
                        <li class="footer-1-links"><a href="https://ir.aboutamazon.com/overview/default.aspx">Become an Affiliate</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices">Advertise Your Products</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">Self-Publish with Us</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">Host an Amazon Hub</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">› See More Make Money with Us</a></li>
                    </ul>
                </div>

                <div className={`${styles["footer1-column"]}`}>
                    <div className={`${styles["footer-1-links-heading"]}`}>
                        <h6>Amazon Payment Products</h6>
                    </div>
                    <ul className={`${styles["footer-links-ul-column"]}`}>
                        <li class="footer-1-links"><a href="https://www.amazon.jobs/en/">Amazon Business Card</a></li>
                        <li class="footer-1-links"><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Shop with Points</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/amz-books/store?node=283155&ref_=apb_psf&ie=UTF8">Reload Your Balance</a></li>
                        <li class="footer-1-links"><a href="https://ir.aboutamazon.com/overview/default.aspx">Amazon Currency Converter</a></li>
                    </ul>
                </div>

                <div className={`${styles["footer1-column"]}`}>
                    <div className={`${styles["footer-1-links-heading"]}`}>
                        <h6>Let Us Help You</h6>
                    </div>
                    <ul className={`${styles["footer-links-ul-column"]}`}>
                        <li class="footer-1-links"><a href="https://www.amazon.jobs/en/">Amazon and COVID-19</a></li>
                        <li class="footer-1-links"><a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Your Account</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/amz-books/store?node=283155&ref_=apb_psf&ie=UTF8">Your Orders</a></li>
                        <li class="footer-1-links"><a href="https://ir.aboutamazon.com/overview/default.aspx">Shipping Rates & Policies</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices">Returns & Replacements</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">Manage Your Content and Devices</a></li>
                        <li class="footer-1-links"><a href="https://www.amazon.science/">help</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function FooterMobile()
{
    {/*<!-------------------------------------For Mobile--------------------------------------->*/}
    
    return(
        <>
            <div>
                <button className={`${styles["back-to-top-button"]}`}>
                    <img className={`${styles["goto-top-icon"]}`} src={topIcon} alt="^"/>
                    TOP OF PAGE
                </button>
            </div>


            <div className={`${styles["main-footer-nav-mobile"]}`}>
                <div class="container">
                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/?ref_=navm_ftr_home">
                                    Amazon.com
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dnavm_ftr_yo&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                                    Your Orders
                                </a>
                            </div>
                        </div>
                            <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fhz%2Fwishlist%2Fls%2Flol%3Fref_%3Dnavm_ftr_wl&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_wishlist_mobile_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=Amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                                    Your Lists
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                                <a href="https://www.amazon.com/b/?node=2238192011">
                                    Gift Cards
                                </a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/registries?ref_=nav_footer_registry_giftlist_mobile">
                                    Registry & Gift List
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                                <a href="https://www.amazon.com/b?node=206764924011">
                                    Find a Gift
                                </a>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-account%3F_encoding%3DUTF8%26from%3Dgp&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                                    Your Account
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                                <a href="https://www.amazon.com/gp/aw/ybh?ref_=navm_ftr_ybh">
                                    Browsing History
                                </a>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://sell.amazon.com/?ld=AZFSSOA-m_FTSELL-C&ref_=footer_soa_m">
                                    Sell products on Amazon
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fyour-returns%3Fingress%3Dnavm_footer%26ref_%3Dnavm_ftr_returns&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_us&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                                    Your Returns
                                </a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/product-safety-alerts?ref_=footer_bsx_ypsa">
                                    Recalls and Product Safety Alerts
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                            </div>
                        </div>                        

                        <div class="row">
                            <div class="col-6 col-lg-6 c1">
                                <a href="https://www.amazon.com/gp/help/customer/display.html?ref_=navm_ftr_cu">
                                    Customer Service
                                </a>
                            </div>

                            <div class="col-6 col-lg-6 c2">
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FooterNav1;