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
        <ul className={styles.cart__items}>
            {cart.map((item) => (<Order key={item.bookId} item={item}/>))}
        </ul>
        <div className={styles.cart__price}>
            <div className={styles.cart__total}>Итого: {total}</div>
            <button className={styles.cart__buy}>Купить</button>
        </div>
    </div>
}