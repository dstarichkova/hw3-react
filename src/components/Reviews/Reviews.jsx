import {Review} from "../Review/Review";
import styles from './styles.module.css';
import classnames from "classnames";

export const Reviews = ({reviews}, className) => {
    return <div className={classnames(styles.reviews, className)}>
        {
            reviews.map((review) => <Review key={review.id} review={review}/>)
        }
    </div>
}