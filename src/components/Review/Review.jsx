import classnames from 'classnames';
import styles from './styles.module.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBookReviewIds} from "../../store/books/selectors";
import {selectReviewById} from "../../store/reviews/selectors";

export const Review = ({ reviewId, bookId, className }) => {



    const review = useSelector(state => selectReviewById(state, reviewId, bookId))

  return (
    <div className={classnames(styles.review, className)}>
      <div className={classnames(styles.review__user, className)}>
        {review?.user.name}
      </div>
      <div className={classnames(styles.review__text, className)}>
        {review?.text}
      </div>
    </div>
  );
};
