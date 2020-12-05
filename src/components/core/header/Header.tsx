import React from 'react';
import { Link } from 'react-router-dom';

import { RouterHref } from '~/router/config';
import { Label } from '~/components/core/label/Label';
import { UiAvatar } from '~/components/ui/avatar/UiAvatar';

import styles from './Header.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <Link className={styles.header__logoLink} to={RouterHref.Main}>
          <Label />
        </Link>
      </div>
      <div className={styles.header__toolbarContainer}>
        <div className={styles.header__userWrapper}>
          <button className={styles.header__toolbarButtonUser} type="button">
            <UiAvatar />
          </button>
          <div className={styles.header__userDropdown}>
            <span>Dropdown</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
