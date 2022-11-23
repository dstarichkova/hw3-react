import classnames from 'classnames';
import styles from './styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectReviewById} from "../../store/reviews/selectors";
import {useEffect, useState} from "react";
import {selectUserById} from "../../store/users/selectors";
import {loadUsersIfNotExist} from "../../store/users/loadUsersIfNotExist";

export const Review = ({ reviewId, className }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersIfNotExist(reviewId));
    }, [reviewId]);

    const [review, setReview] = useState(useSelector(state => selectReviewById(state, reviewId)))
    console.log(review)


    useEffect(() => {
        review && localStorage.setItem('review', JSON.stringify(review))
    }, [review])

    useEffect(() => {
        const newReview = JSON.parse(localStorage.getItem('review'))
        setReview(newReview)
    }, [])

    const user = useSelector(state => selectUserById(state, review?.userId))
    console.log(user)


    return (
        <div className={classnames(styles.review, className)}>
            <div className={classnames(styles.review__user, className)}>
                {user?.name}
            </div>
            <div className={classnames(styles.review__text, className)}>
                {review?.text}
            </div>
        </div>
    );
};
