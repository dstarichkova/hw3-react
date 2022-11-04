import {Book} from "../Book/Book";

import styles from './styles.module.css';
import classnames from "classnames";

export const Books = ({books}, className) => {
    return <div className={classnames(styles.books, className)}>
        {
            books.map((book) => <Book key={book.id} book={book}/>)
        }
    </div>
}