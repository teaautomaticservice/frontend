import React from 'react';
import classNames from 'classnames';

import LogoTeaSVG from '~/components/svg/logo-tea.svg';

import styles from './Label.scss';

const Label: React.FC = () => (
  <div className={styles.label}>
    <LogoTeaSVG className={styles.label__logo} />
    <div className={styles.label__descriptionContainer}>
      <span
        className={classNames(
          styles.label__description,
          styles.label__description_heading
        )}
      >
        Tea
      </span>
      <span className={styles.label__description}>automatic service</span>
    </div>
  </div>
);

export { Label };
