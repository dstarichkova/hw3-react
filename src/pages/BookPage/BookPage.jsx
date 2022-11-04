import {BookInfo} from "../../components/BookInfo/BookInfo";
import {Reviews} from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css";

export const BookPage = (book, className) => {
    return <div className={classnames(styles.section__content, className)}>
        <BookInfo book={book}/>
        <Reviews reviews={book.book.reviews}/>
    </div>
}