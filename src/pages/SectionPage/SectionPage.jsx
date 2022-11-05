import { Section } from '../../components/Section/Section';
import { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export const SectionPage = (props, className) => {
  const [activeSection, setActiveSection] = useState(props.sections[0]);

  return (
    <div className={classnames(styles.section__content, className)}>
      <div className={classnames(styles.sections__buttons, className)}>
        {props.sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section)}
            className={classnames(
                styles.sections__button,
                section.id === activeSection.id
                && styles.sections__button_status_active,
                className
            )}
          >
            {section.name}
          </button>
        ))}
      </div>
      <Section section={activeSection} />
    </div>
  );
};
