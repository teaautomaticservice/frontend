import React from 'react';
import classNames from 'classnames';

import styles from './Authorization.scss';
import { AuthorizationDescription } from './description/AuthorizationDescription';

const Authorization: React.FC = () => {
  return (
    <div className={styles.authorization}>
      <div
        className={classNames(
          styles.authorization__section,
          styles.authorization__section_form
        )}
      >
        Form
      </div>
      <div
        className={classNames(
          styles.authorization__section,
          styles.authorization__section_description
        )}
      >
        <AuthorizationDescription />
      </div>
    </div>
  );
};

export { Authorization };
