import {useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {Order} from "../Order/Order";
import styles from "./styles.module.css"


export const Cart = () => {
    const cart = useSelector(state => selectCart(state));
    const total = useSelector(state => selectCartTotal(state));

    if (cart.length === 0) return <p>Корзина пуста</p>

    return <div className={styles.cart}>
        <h3 className={styles.cart__title}>Ваш заказ:</h3>
        <ul>
            {cart.map((item) => (<Order className={styles.cart__item} key={item.bookId} item={item}/>))}
        </ul>
        <div>Итого: {total}</div>
    </div>
}