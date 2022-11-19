import {Order} from "../../components/Order/Order";
import {useSelector} from "react-redux";
import {selectCart, selectCartTotal} from "../../store/cart/selectors";
import {selectBooks} from "../../store/books/selectors";
import {Cart} from "../../components/Cart/Cart";
import {Books} from "../../components/Books/Books";

export const CartPage = () => {
    return <div>
        <Cart/>
        <Books cart={true}/>
    </div>
}