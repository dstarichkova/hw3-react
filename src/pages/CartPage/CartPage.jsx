import {Order} from "../../components/Order/Order";
import {useDispatch, useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {selectBooks} from "../../store/books/selectors";
import {Cart} from "../../components/Cart/Cart";
import {CartBooks} from "../../components/CartBooks/Books";


export const CartPage = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(loadCartIfNotExist);
    // }, [dispatch]);

    return <div>
        <Cart/>
        <CartBooks/>
    </div>
}