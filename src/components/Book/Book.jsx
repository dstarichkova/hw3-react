import {useEffect, useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/books/selectors";
import {cartSlice} from "../../store/cart";
import {selectBookCount} from "../../store/cart/selectors";
import {Link, useParams} from "react-router-dom";

export const  Book = ({bookId, className}) => {
    const dispatch = useDispatch();
    const book = useSelector(state => selectBookById(state, bookId))
    const count = useSelector(state => selectBookCount(state, bookId))

    if (!book) {
        return null;
    }

    return <div className={classnames(styles.book, className)}>
        <div className={classnames(styles.book__content, className)}>
            <Link to={"/book/" + book.id} className={classnames(styles.book__name, className)}>{book.name}</Link>
            <div className={classnames(styles.book__info, className)}>{book.author}</div>
            <div className={classnames(styles.book__info)}>{book.genre}</div>
            {book.price !== undefined ? <div className={classnames(styles.book__price)}>{book.price}р</div> : <div>Нет в наличии</div>}
        </div>
        <div className={classnames(styles.add__buttons_count)}>
            <button className={classnames(styles.add__button, className)} onClick={() => dispatch(cartSlice.actions.removeBook(bookId))} disabled={count === 0}>-</button>
            {count || 0}
            <button className={classnames(styles.add__button, className)} onClick={() => dispatch(cartSlice.actions.addBook(bookId))}>+</button>
        </div>
    </div>
}