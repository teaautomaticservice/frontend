import React from 'react';
import classNames from 'classnames';

import { Label } from '~/components/core/label/Label';

import styles from './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Label />
      <div className={styles.footer__descriptionContainer}>
        <span className={styles.footer__description}>Created by DahakaLab</span>
        <span
          className={classNames(
            styles.footer__description,
            styles.footer__description_heading
          )}
        >
          2020
        </span>
      </div>
    </div>
  );
};

export { Footer };
