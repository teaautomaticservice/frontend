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
          <h2>{userFullName}</h2>
        </div>
      </div>
    </UiSection>
  );
};

export { ProfileDetail };
