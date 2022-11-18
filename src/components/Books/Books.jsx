import {Book} from "../Book/Book";

import styles from './styles.module.css';
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadBooksIfNotExist} from "../../store/books/loadBooksIfNotExist";
import {selectBooks, selectIsBooksLoading} from "../../store/books/selectors";
import {selectSectionBookIds} from "../../store/section/selectors";
import {useParams} from "react-router-dom";

export const Books = (className,) => {
    const {sectionId} = useParams()
    const dispatch = useDispatch();
    console.log(sectionId);
    useEffect(() => {
        dispatch(loadBooksIfNotExist(sectionId));
    }, [sectionId]);
    console.log(sectionId);

    // const books = useSelector(state => selectBooks(state))
    const bookIds = useSelector(state => selectSectionBookIds(state, sectionId))
    const isLoading = useSelector(state => selectIsBooksLoading(state))

    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (!bookIds) {
        return null;
    }

    return <div className={classnames(styles.books, className)}>
        {
            bookIds.map((id) => (
                <Book key={id} bookId={id} sectionId={sectionId}/>
            ))}
    </div>
}