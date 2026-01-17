import styles from './Footer-nav-3.module.css';
import FooterNav3Items from './Footer-n3-items';
import { useMediaQuery } from 'react-responsive';


function FooterNav3()
{
    {/*Media queries for responsive design */}
    const isMobile = useMediaQuery({ maxWidth: 1270 });
    const isDesktop = useMediaQuery({ minWidth: 1271 });

    return (
    <>
      {isDesktop && <FooterNavDesktop />}
      {isMobile && <FooterNavMobile/>}
    </>
  );
}

function FooterNavDesktop()
{
    return(
        <section className={`${styles["footer-nav-3-section"]}`}>
            <div className={`container ${styles["footer-nav-3-container"]}`}>
                <div className='d-flex gap-2 justify-content-center'>
                    <FooterNav3Items url="https://music.amazon.com/?ref=dm_aff_amz_com" linkTop="Amazon Music" linkDic="Stream millions of songs"/>
                    <FooterNav3Items url="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com" linkTop="Amazon Ads" linkDic="Reach customers wherever they spend their time"/>
                    <FooterNav3Items url="https://www.6pm.com/" linkTop="6am" linkDic="Score deals on fashion brands"/>
                    <FooterNav3Items url="https://www.abebooks.com/" linkTop="AbeBooks" linkDic="Books, art & collectibles"/>
                    <FooterNav3Items url="https://www.acx.com/" linkTop="ACX" linkDic="Audiobook Publishing Made Easy"/>
                    <FooterNav3Items url="https://sell.amazon.com/?ld=AZUSSOA-footer-aff&ref_=footer_sell" linkTop="Sell on Amazon" linkDic="Start a Selling Account"/>
                    <FooterNav3Items url="https://www.veeqo.com/?utm_source=amazon&utm_medium=website&utm_campaign=footer" linkTop="Veeqo" linkDic="Shipping Software Inventory Management"/>                
                </div>

                <div className={`d-flex gap-2 justify-content-center ${styles["footer-nav-3-row"]}`}>
                    <FooterNav3Items url="https://www.amazon.com/business/register/org/landing?ref_=footer_retail_b2b" linkTop="Amazon Business" linkDic="Everything For Your Business"/>
                    <FooterNav3Items url="https://www.amazon.com/gp/browse.html?node=230659011&ref_=footer_amazonglobal" linkTop="AmazonGlobal" linkDic="Ship Orders Internationally"/>
                    <FooterNav3Items url="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=amazonfooter" linkTop="Amazon Web Services" linkDic="Scalable Cloud Computing Services"/>
                    <FooterNav3Items url="https://www.audible.com/" linkTop="Audible" linkDic="Listen to Books & Original Audio Performances"/>
                    <FooterNav3Items url="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr" linkTop="Box Office Mojo" linkDic="Find Movie Box Office Data"/>
                    <FooterNav3Items url="https://www.goodreads.com/" linkTop="Goodreeds" linkDic="Book reviews & recommendations"/>
                    <FooterNav3Items url="https://www.imdb.com/" linkTop="IMDb" linkDic="Movies, TV & Celebrities"/>                
                </div>

                <div className={`d-flex gap-2 justify-content-center ${styles["footer-nav-3-row"]}`}>
                    <FooterNav3Items url="https://pro.imdb.com/signup/index.html?u=http%3A%2F%2Fpro.imdb.com%2F%3Fref_%3Damzn_nav_ftr" linkTop="IMDb Pro" linkDic="Get Info Entertainment Professional Need"/>
                    <FooterNav3Items url="https://kdp.amazon.com/en_US/" linkTop="Kindle Direct Publishing" linkDic="Indie Digital & Print Publishing Made Easy"/>
                    <FooterNav3Items url="https://videodirect.amazon.com/home/landing" linkTop="Prime Video Direct" linkDic="Video Distribution Made Easy"/>
                    <FooterNav3Items url="https://www.shopbop.com/" linkTop="Shopbop" linkDic="Designer Fashion Brands"/>
                    <FooterNav3Items url="https://www.woot.com/" linkTop="Woot!" linkDic="Deals and Shenanigans"/>
                    <FooterNav3Items url="https://www.zappos.com/" linkTop="Zappos" linkDic="Shoes & Clothing"/>
                    <FooterNav3Items url="https://ring.com/" linkTop="Ring" linkDic="Smart Home Security Systems"/>                
                </div>

                <div className={`d-flex gap-2 justify-content-center ${styles["footer-nav-3-row"]}`}>
                    <FooterNav3Items />
                    <FooterNav3Items url="https://eero.com/" linkTop="eero Wifi" linkDic="Stream 4K Video in Every Room"/>
                    <FooterNav3Items url="https://blinkforhome.com/?ref=nav_footer" linkTop="Blink" linkDic="Smart Security for Every Home"/>
                    <FooterNav3Items url="https://ring.com/neighbors" linkTop="Neighbors App" linkDic="Real-Time Crime & Safety Alerts"/>
                    <FooterNav3Items url="https://www.amazon.com/gp/browse.html?node=14498690011&ref_=amzn_nav_ftr_swa" linkTop="Amazon Subscription Boxes" linkDic="Top subscription boxes — right to your door"/>
                    <FooterNav3Items url="https://www.pillpack.com/" linkTop="Sell on Amazon" linkDic="Start a Selling Account"/>
                    <FooterNav3Items />                
                </div>

            </div>
        </section>
    )
}


function FooterNavMobile()
{
    return (
        <section className={`${styles["footer-nav-3-section-mob"]}`}>
            <span>Already a customer?
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Famz-books%2Fstore%2F%3F_encoding%3DUTF8%26ref_%3Dnav_m_foot_si&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=anywhere_v2_us&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                    Sign in
                </a>
            </span>
        </section>

    )

}
export default FooterNav3;