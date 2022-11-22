import classnames from 'classnames';
import styles from './styles.module.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBookById, selectBookReviewIds} from "../../store/books/selectors";
import {selectReviewById} from "../../store/reviews/selectors";
import {useEffect, useState} from "react";

export const Review = ({ reviewId, className }) => {

    console.log(reviewId)

    const [review, setReview] = useState(useSelector(state => selectReviewById(state, reviewId)))

    useEffect(() => {
        review && localStorage.setItem('review', JSON.stringify(review))
    }, [review])

    useEffect(() => {
        const newReview = JSON.parse(localStorage.getItem('review'))
        setReview(newReview)
    }, [])


    return (
        <div className={classnames(styles.review, className)}>
            <div className={classnames(styles.review__user, className)}>
                {review?.userId}
            </div>
            <div className={classnames(styles.review__text, className)}>
                {review?.text}
            </div>
        </div>
    );
};
