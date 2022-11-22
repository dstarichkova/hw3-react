import styles from './styles.module.css';
import classnames from "classnames";
import {Annotation} from "../Annotation/Annotation";
import {BookOnPage} from "../BookOnPage/BookOnPage";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/books/selectors";
import { useEffect, useState } from 'react';

export const BookInfo = (className) => {
    const {bookId} = useParams()
    const [book, setBook] = useState(useSelector(state => selectBookById(state, bookId)))

    useEffect(() => {
        book && localStorage.setItem('book', JSON.stringify(book))
    }, [book])

    useEffect(() => {
        const newBook = JSON.parse(localStorage.getItem('book'))
        setBook(newBook)
    }, [])

    return <div className={classnames(styles.book__info, className)}>
        <BookOnPage book={book} className={classnames(styles.book__on_page, className)}/>
        <Annotation annotation={book?.annotation}/>
    </div>
}