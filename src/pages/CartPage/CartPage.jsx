import {Order} from "../../components/Order/Order";
import {useDispatch, useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {selectBooks} from "../../store/books/selectors";
import {Cart} from "../../components/Cart/Cart";
import {CartBooks} from "../../components/CartBooks/Books";
import styles from './styles.module.css';


export const CartPage = () => {

    return <div className={styles.cart}>
        <Cart/>
        <CartBooks/>
    </div>
}