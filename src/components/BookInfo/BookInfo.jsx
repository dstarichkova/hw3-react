import styles from './styles.module.css';
import classnames from "classnames";
import {Annotation} from "../Annotation/Annotation";
import {BookOnPage} from "../BookOnPage/BookOnPage";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/books/selectors";

export const BookInfo = (className) => {
    const {bookId} = useParams()
    console.log(bookId)
    const book = useSelector(state => selectBookById(state, bookId))
    console.log(book)

    return <div className={classnames(styles.book__info, className)}>
        <BookOnPage book={book} className={classnames(styles.book__on_page, className)}/>
        <Annotation annotation={book?.annotation}/>
    </div>
}