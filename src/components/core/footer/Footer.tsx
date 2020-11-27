import React from 'react';

import { Label } from '~/components/core/label/Label';

import styles from './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Label />
      <div className={styles.footer__descriptionContainer}>
        <span className={styles.footer__description}>Created by DahakaLab</span>
        <span className={styles.footer__description}>2020</span>
      </div>
    </div>
  );
};

export { Footer };
