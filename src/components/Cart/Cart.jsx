import {useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {Order} from "../Order/Order";
import styles from "./styles.module.css"
import {useEffect, useState} from "react";


export const Cart = () => {
    const [cart, setCart] = useState(useSelector(state => selectCart(state)));
    const total = useSelector(state => selectCartTotal(state));

    console.log(cart)

    useEffect(() => {
        cart && localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const newCart = JSON.parse(localStorage.getItem('cart'))
        setCart(newCart)
    }, [])

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