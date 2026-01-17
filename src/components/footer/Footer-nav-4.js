import styles from './Footer-nav-4.module.css'
import toggleIcon from '../../assets/toggle-icon.jpg';
function FooterNav4()
{
    return(
        <section className={`${styles["footer-nav-4-section"]}`}>
            <div className={`${styles["additional-links-div"]}`}>
                <ul className={`${styles["additional-links-ul"]}`}>
                    <li className='d-flex flex-nowrap'>
                        <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088&ref_=footer_cou">
                            Conditions of Use
                        </a>
                    </li>

                    <li className='d-flex flex-nowrap'>
                        <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088&ref_=footer_cou">
                            Privacy Notice
                        </a>
                    </li>

                    <li className='d-flex flex-nowrap'>
                        <a href="https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=TnACMrGVghHocjL8KB&ref_=footer_consumer_health_data_privacy">
                            Consumer Health Data Privacy Disclosure
                        </a>
                    </li>

                    <li className='d-flex align-items-center flex-wrap'>
                        <a className="d-flex flex-nowrap" href="https://www.amazon.com/privacyprefs?ref_=footer_iba">
                            Your Ads Privacy Choices
                        </a>
                        <img className={styles["footer-nav-4-toggle-image"]} src={toggleIcon} alt="toggle-icon"/>
                    </li>
                </ul>
            </div>
            <div  className={`${styles["copyright-div"]}`}>
                © 1996-2025, Amazon.com, Inc. or its affiliates
            </div>
        </section>
    )
}

export default FooterNav4;