import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/books/selectors';

export const Order = ({item}) => {
    const book = useSelector(state => selectBookById(state, item.bookId))

    return <li key={item.bookId}>
        <div>{book.name}</div>
        <div>{book.price} х {item.count}</div>
    </li>
}
