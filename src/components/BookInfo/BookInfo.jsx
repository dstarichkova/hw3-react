import styles from './styles.module.css';
import classnames from "classnames";
import {Annotation} from "../Annotation/Annotation";
import {BookOnPage} from "../BookOnPage/BookOnPage";

export const BookInfo = ({book}, className) => {
    return <div className={classnames(styles.book__info, className)}>
        <BookOnPage book={book.book} className={classnames(styles.book__on_page, className)}/>
        <Annotation annotation={book.book.annotation}/>
    </div>
}