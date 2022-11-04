import {Book} from "../Book/Book";


import styles from './styles.module.css';
import classnames from "classnames";
import {Annotation} from "../Annotation/Annotation";

export const BookInfo = ({book}, className) => {
    return <div className={classnames(styles.book__info, className)}>
        <Book book={book.book} className={classnames(styles.book__on_page, className)}/>
        <Annotation annotation={book.book.annotation}/>
    </div>
}