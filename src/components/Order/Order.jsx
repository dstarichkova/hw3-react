import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/books/selectors';
import styles from "./styles.module.css"

export const Order = ({item}) => {
    const book = useSelector(state => selectBookById(state, item.bookId))

    return <li key={item.bookId} className={styles.order__content}>
        <div className={styles.order__name}>{book.name}</div>
        <div className={styles.order__price}>{book.price}p х {item.count}</div>
    </li>
}
