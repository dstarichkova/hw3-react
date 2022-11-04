import classnames from 'classnames';
import styles from './styles.module.css';

export const Annotation = ({annotation}, className) => {
    console.log(annotation)
    return <div className={classnames(styles.annotation, className)}>
        <div className={classnames(styles.annotation__title, className)}>Аннотация</div>
        <div className={classnames(styles.annotation__text, className)}>{annotation}</div>
    </div>
}