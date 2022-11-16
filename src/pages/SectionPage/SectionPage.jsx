import { Section } from '../../components/Section/Section';
import {useEffect, useState} from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import { selectSections } from "../../store/section/selectors";
import { loadSectionsIfNotExist } from "../../store/section/loadSectionsIfNotExist";
import { NavLink, Outlet } from "react-router-dom";
// import { Outlet } from "react-router"

export const SectionPage = (className) => {
  const dispatch = useDispatch();
  const sections = useSelector(state => selectSections(state));

  useEffect(() => {
      dispatch(loadSectionsIfNotExist)
  }, []);

  return (
    <div className={classnames(styles.section__content, className)}>
      <div className={classnames(styles.sections__buttons, className)}>
        {sections.map((section) => (
          <NavLink
            to={section.id}
            key={section.id}
            className={({isActive}) =>
              classnames(styles.sections__button, {
                      [styles.sections__button_status_active]: isActive,
                  }
                // styles.sections__button,
                // section.id === activeSection ?.id
                // && styles.sections__button_status_active,
                // className
            )}
          >
            {section.name}
          </NavLink>
        ))}
      </div>
        <Outlet/>
    </div>
  );
};
