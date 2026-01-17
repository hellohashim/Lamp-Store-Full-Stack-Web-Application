import styles from './Footer-n3-items.module.css';

function FooterNav3Items(props)
{
    return(
        <div className={`col ${styles["footer-nav-3-items"]}`}>
            <a href={props.url}>
                <h5>{props.linkTop}</h5>
                <span>{props.linkDic}</span>
            </a>
        </div>
    )
}

export default FooterNav3Items;