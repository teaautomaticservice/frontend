import React from 'react';

import PersonSVG from '~/components/svg/person.svg';

import styles from './UiAvatar.scss';

const UiAvatar: React.FC = () => {
  return (
    <div className={styles.uiAvatar}>
      <PersonSVG />
    </div>
  );
};

export { UiAvatar };
