import React from 'react';
import { Link } from 'react-router-dom';

import { RouterHref } from '~/router/config';
import LogoTeaSVG from '~/components/svg/logo-tea.svg';

import styles from './Header.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <Link className={styles.header__logoLink} to={RouterHref.Main}>
          <LogoTeaSVG className={styles.header__logo} />
          <div className={styles.header__logoDescriptionContainer}>
            <span
              className={
                (styles.header__logoDescription,
                styles.header__logoDescription_heading)
              }
            >
              Tea
            </span>
            <span className={styles.header__logoDescription}>
              automatic service
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Header };
