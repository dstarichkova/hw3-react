import {useState} from "react";
import classnames from 'classnames';

import styles from './styles.module.css';

export const BookOnPage = ({book, className}) => {
    const [count, setCount] = useState(0);
    return <div className={classnames(styles.book, className)}>
        <div className={classnames(styles.book__content, className)}>
            <h3 className={classnames(styles.book__name, className)}>{book?.name}</h3>
            <div className={classnames(styles.book__info, className)}>{book?.author}</div>
            <div className={classnames(styles.book__info)}>{book?.genre}</div>
            <div className={classnames(styles.book__buy, className)}>
                {book?.price !== undefined ? <div className={classnames(styles.book__price)}>{book?.price}р</div> : <div>Нет в наличии</div>}
                <div className={classnames(styles.add__buttons_count)}>
                    <button className={classnames(styles.add__button, className)} onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
                    {count}
                    <button className={classnames(styles.add__button, className)} onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
    </div>
}