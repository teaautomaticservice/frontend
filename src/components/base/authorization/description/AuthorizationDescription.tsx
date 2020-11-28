import React from 'react';

import LogoTeaSVG from '~/components/svg/logo-tea.svg';

import styles from './AuthorizationDescription.scss';

const AuthorizationDescription: React.FC = () => (
  <div className={styles.authorizationDescription}>
    <div>TEA</div>
    <LogoTeaSVG className={styles.authorizationDescription__logo} />
    <div>automatic service</div>
  </div>
);

export { AuthorizationDescription };
