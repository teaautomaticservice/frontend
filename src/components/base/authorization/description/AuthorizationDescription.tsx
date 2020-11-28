import React from 'react';

import LogoTeaSVG from '~/components/svg/logo-tea.svg';

import styles from './AuthorizationDescription.scss';

const AuthorizationDescription: React.FC = () => (
  <div className={styles.authorizationDescription}>
    <div className={styles.authorizationDescription__header}>
      <h1>TEA</h1>
      <h2>automatic service</h2>
    </div>
    <LogoTeaSVG className={styles.authorizationDescription__logo} />
    <div className={styles.authorizationDescription__footer}>
      <h3>Сервис автоматизации процессов.</h3>
    </div>
  </div>
);

export { AuthorizationDescription };
