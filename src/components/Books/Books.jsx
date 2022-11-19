import {Book} from "../Book/Book";

import styles from './styles.module.css';
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadBooksIfNotExist} from "../../store/books/loadBooksIfNotExist";
import {selectIsBooksLoading} from "../../store/books/selectors";
import {selectSectionBookIds} from "../../store/section/selectors";
import {useParams} from "react-router-dom";
import { selectCartBookIds } from "../../store/cart/selectors";

export const Books = (className) => {
    const {sectionId} = useParams()
    const {cart} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(sectionId));
    }, [sectionId]);


    let bookIds = useSelector(state => selectSectionBookIds(state, sectionId))
    let bookCartIds = useSelector(state => selectCartBookIds(state))

    const isLoading = useSelector(state => selectIsBooksLoading(state))

    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (!bookIds) {
        return null;
    }

    if (cart) {
        return <div className={classnames(styles.books, className)}>
            {
                bookCartIds.map((id) => (
                    <Book key={id} bookId={id}/>
                ))}
        </div>
    }

    return <div className={classnames(styles.books, className)}>
        {
            bookIds.map((id) => (
                <Book key={id} bookId={id} sectionId={sectionId}/>
            ))}
    </div>
}