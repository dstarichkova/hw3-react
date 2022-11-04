import {Review} from "../Review/Review";
import {useState} from "react";
import styles from './styles.module.css';
import classnames from "classnames";

export const Reviews = ({reviews}, className) => {
  
    const [items, setItems] = useState([]);
    return <div className={classnames(styles.reviews__content, className)}>
        {
            reviews.map((review) => <Review key={review.id} review={review}/>)
        }
    </div>
}