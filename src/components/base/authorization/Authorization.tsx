import React from 'react';
import classNames from 'classnames';

import styles from './Authorization.scss';
import {
  AuthorizationForm,
  AuthorizationFormType,
} from './form/AuthorizationForm';
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
        <AuthorizationForm
          className={styles.authorization__form}
          formType={AuthorizationFormType.LogIn}
        />
        <AuthorizationForm
          className={styles.authorization__form}
          formType={AuthorizationFormType.Registration}
        />
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
