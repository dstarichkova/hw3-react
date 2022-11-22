import {Review} from "../Review/Review";
import styles from './styles.module.css';
import classnames from "classnames";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadBooksIfNotExist} from "../../store/books/loadBooksIfNotExist";
import {selectSectionBookIds} from "../../store/section/selectors";
import {selectBookReviewIds, selectIsBooksLoading} from "../../store/books/selectors";
import {selectIsReviewsLoading} from "../../store/reviews/selectors";
import {loadReviewsIfNotExist} from "../../store/reviews/loadReviewsIfNotExist";

export const Reviews = (className) => {

    const { bookId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReviewsIfNotExist(bookId));
    }, [bookId]);



    const reviewIds = useSelector(state => selectBookReviewIds(state, bookId))
    const isLoading = useSelector(state => selectIsReviewsLoading(state))

    // console.log(reviewIds)

    if (isLoading) {
        return <span>Loading ...</span>;
    }

    if (!reviewIds) {
        return null;
    }

    return <div className={classnames(styles.reviews, className)}>
        {
            reviewIds.map((id) => <Review key={id} reviewId={id} bookId={bookId}/>)
        }
    </div>
}