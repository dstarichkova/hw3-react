import {BookInfo} from "../../components/BookInfo/BookInfo";
import {Reviews} from "../../components/Reviews/Reviews";
// import {useState} from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export const BookPage = (book, className) => {
    return <div className={classnames(styles.section__content, className)}>
        {/*<BookInfo>{book}</BookInfo>*/}
        <Reviews>reviews={book.reviews}</Reviews>
    </div>
}