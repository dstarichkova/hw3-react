import classnames from "classnames";
import styles from "../Layout/styles.module.css";
import {Link} from "react-router-dom";

export const Layout = (props, className) => {
    return <div>
        <header className={classnames(styles.header, className)}>
            <Link className={classnames(styles.logo, className)} to="/">Магазин</Link>
            <Link to="/cart" className={classnames(styles.cart__icon, className)}/>
        </header>
        <div className={classnames(styles.main, className)}>
            { props.children }
        </div>
    </div>
}
