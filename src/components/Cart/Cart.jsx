import {useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {Order} from "../Order/Order";

export const Cart = () => {
    const cart = useSelector(state => selectCart(state));
    const total = useSelector(state => selectCartTotal(state));

    console.log(cart)

    if (cart.length === 0) return <p>Корзина пуста</p>

    return <div>
        <h3>Ваш заказ:</h3>
        <ul>
            {cart.map((item) => (<Order key={item.bookId} item={item}/>))}
        </ul>
        <div>Итого: {total}</div>
    </div>
}