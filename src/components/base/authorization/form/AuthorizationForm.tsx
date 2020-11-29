import React from 'react';
import classNames from 'classnames';

import styles from './AuthorizationForm.scss';
import { FormLogIn } from './log-in/FormLogIn';
import { FormRegistration } from './registration/FormRegistration';

export enum AuthorizationFormType {
  LogIn,
  Registration,
}

const formMap: Record<AuthorizationFormType, React.FC> = {
  [AuthorizationFormType.LogIn]: FormLogIn,
  [AuthorizationFormType.Registration]: FormRegistration,
};

interface Props {
  className?: string;
  formType: AuthorizationFormType;
}

const AuthorizationForm: React.FC<Props> = ({ className, formType }) => {
  const FormComponent = formMap[formType];
  return (
    <div className={classNames(styles.authorizationForm, className)}>
      <FormComponent />
    </div>
  );
};

export { AuthorizationForm };
