import {BookInfo} from "../../components/BookInfo/BookInfo";
import {Reviews} from "../../components/Reviews/Reviews";
import classnames from "classnames";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectSections} from "../../store/section/selectors";
import {selectBookById} from "../../store/books/selectors";
import {useParams} from "react-router-dom";

export const BookPage = (className) => {
    const dispatch = useDispatch();
    const {bookId} = useParams()
    console.log(bookId)
    const book = useSelector(state => selectBookById(state, bookId))

    return <div>
        <BookInfo bookId={bookId}/>
        <Reviews bookId={bookId}/>
    </div>
}