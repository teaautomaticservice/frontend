import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiButton } from '~/components/ui/button/UiButton';
import { user } from '~/mock/user';
import PersonSVG from '~/components/svg/person.svg';

import styles from './ProfileDetail.scss';

const ProfileDetail: React.FC = () => {
  const userFullName = `${user.surname} ${user.name}`;

  return (
    <UiSection className={styles.profileDetail}>
      <div className={styles.profileDetail__avatarContainer}>
        <div className={styles.profileDetail__avatarWrapper}>
          <PersonSVG className={styles.profileDetail__avatarPlug} />
        </div>
        <UiButton appearance="soft" label="Изменить аватар" />
      </div>

      <div className={styles.profileDetail__contentContainer}>
        <div className={styles.profileDetail__contentSection}>
          <div className={styles.profileDetail__headingWrapper}>
            <h2>{userFullName}</h2>
            <UiButton
              className={styles.profileDetail__buttonChange}
              appearance="edit"
            />
          </div>
        </div>

        <div className={styles.profileDetail__contentSection}>
          <div className={styles.profileDetail__headingWrapper}>
            <h5>Контакты</h5>
            <UiButton
              className={styles.profileDetail__buttonChange}
              appearance="edit"
            />
          </div>
          <div>
            <span className={styles.profileDetail__contentDescription}>
              {'Телефон: '}
            </span>
            <span>{user.mainPhoneNumber}</span>
          </div>
        </div>
      </div>
    </UiSection>
  );
};

export { ProfileDetail };
