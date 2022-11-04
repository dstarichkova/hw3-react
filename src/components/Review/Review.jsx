import classnames from 'classnames';
import styles from './styles.module.css';

export const Review = ({review, className}) => {
    return <div className={classnames(styles.review, className)}>
            <div className={classnames(styles.review__user, className)}>{review.user}</div>
            <div className={classnames(styles.review__text, className)}>{review.text}</div>
    </div>
}