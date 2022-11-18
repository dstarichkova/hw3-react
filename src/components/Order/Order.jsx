import { useSelector } from 'react-redux';
import { selectBooks } from '../../store/books/selectors';
import { selectCartModule } from '../../store/cart/selectors';

export const Order = () => {
    const cart = useSelector(state => selectCartModule(state));
    const books = useSelector(state => selectBooks(state));

    console.log(cart, books)

    return <div>order</div>
}

