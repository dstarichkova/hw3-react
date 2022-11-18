import {Books} from "../Books/Books";
import styles from "./styles.module.css"
import classnames from "classnames";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSectionById} from "../../store/section/selectors";

export const Section = ({className}) => {
    const { sectionId } = useParams();
    const section = useSelector(state => selectSectionById(state, sectionId))
    console.log(sectionId)

    if (!section) {
        return null;
    }

    console.log(sectionId)

    return <div className={classnames(styles.section, className)}>
        <Books sectionId={sectionId}/>
    </div>
}