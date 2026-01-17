import signin_icon from '../../assets/signin-icon.png';
import styles from './Signin-btn.module.css';

function Signin()
{
    return(
        <div className={`${styles["sign-in-icon-container"]}`}>
            <img src={signin_icon} alt="sign-in-icon"/>  
        </div>
    );
}

export default Signin;