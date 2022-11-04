import classnames from "classnames";
import styles from "../Layout/styles.module.css";

export const Layout = (props, className) => {
    return <div>
        <header className={classnames(styles.header, className)}>Магазин</header>
        <div className={classnames(styles.main, className)}>
            { props.children }
        </div>
        <footer>footer</footer>
    </div>
}
