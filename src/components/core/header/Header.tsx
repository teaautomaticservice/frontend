import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { RouterHref } from '~/router/config';
import { Label } from '~/components/core/label/Label';
import { UiAvatar } from '~/components/ui/avatar/UiAvatar';
import { UiLink } from '~/components/ui/link/UiLink';

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
            <UiAvatar size="1" />
          </button>
          <div className={styles.header__userDropdown}>
            <div
              className={classNames(
                styles.header__userContainer,
                styles.header__userContainer_horizontal
              )}
            >
              <div className={styles.header__userAvatarContainer}>
                <UiAvatar size="3" />
              </div>
              <div className={styles.header__userBioContainer}>
                <div className={styles.header__userFullName}>
                  <span className="font-title">Иванов Иван</span>
                </div>
                <div className={styles.header__userPosition}>
                  <span>Администратор</span>
                </div>
              </div>
            </div>
            <div className={styles.header__userContainer}>
              <UiLink to={RouterHref.Authorization}>Log out</UiLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
