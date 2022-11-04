import {Section} from "../../components/Section/Section";
import {useState} from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export const SectionPage = (props, className) => {
    const [activeSection, setActiveSection] = useState(props.sections[0]);
    // const [isActive, setIsActive] = useState(false);
    // const handleClick = () => {
    //     setIsActive(current => !current);
    // }
    return <div className={classnames(styles.section__content, className)}>
        <div className={classnames(styles.sections__buttons, className)}>
            {
                props.sections.map((section) => <button className={classnames(styles.sections__button, className)} key={section.id} onClick={() => setActiveSection(section)}>{section.name}</button>)
            }
        </div>
        <Section section={activeSection}/>
    </div>
}