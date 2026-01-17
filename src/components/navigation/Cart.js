// components/navigation/Cart.js
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Import Hook
import Cart_icon from '../../assets/Cart-Icon.png';
import style from './Cart.module.css';

function Cart() {
    const { cartCount } = useCart(); // Get real number

    return(
        <Link to="/cart" className="d-flex" style={{textDecoration:'none'}}>
            <div style={{position:'relative'}}>
                <span id={style["nav-cart-items-number"]}>{cartCount}</span>
                <img src={Cart_icon} alt="cart icon" className={style["nav-cart-icon"]}/>
            </div>                        
        </Link>
    )
}
export default Cart;