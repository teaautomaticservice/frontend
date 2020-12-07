import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { RouterHref } from '~/router/config';
import { getProfileDetail } from '~/router/helpers';
import { Label } from '~/components/core/label/Label';
import { UiAvatar } from '~/components/ui/avatar/UiAvatar';
import { UiDropdown } from '~/components/ui/dropdown/UiDropdown';
import { UiLink } from '~/components/ui/link/UiLink';

import styles from './Header.scss';

const toUserProfile = getProfileDetail('my');

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <Link className={styles.header__logoLink} to={RouterHref.Main}>
          <Label />
        </Link>
      </div>
      <div className={styles.header__toolbarContainer}>
        <UiDropdown
          buttonChildren={<UiAvatar size="1" />}
          buttonClassName={styles.header__toolbarButtonUser}
          horizontalPosition="right"
        >
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
            <UiLink to={toUserProfile}>Мой профиль</UiLink>
          </div>
          <div className={styles.header__userContainer}>
            <UiLink to={RouterHref.Authorization}>Log out</UiLink>
          </div>
        </UiDropdown>
      </div>
    </div>
  );
};

export { Header };
