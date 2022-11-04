import {Books} from "../Books/Books";
import styles from "./styles.module.css"
import classnames from "classnames";

export const Section = ({section, className}) => {
    return <div className={classnames(styles.section, className)}>
        <Books books={section.books}/>
    </div>
}