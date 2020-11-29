import React from 'react';

import { UiButton } from '~/components/ui/button/UiButton';

import styles from './FormLogIn.scss';

const FormLogIn: React.FC = () => {
  return (
    <div className={styles.formLogIn}>
      <UiButton label="Log in" />
    </div>
  );
};

export { FormLogIn };
