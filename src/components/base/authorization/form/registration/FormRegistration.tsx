import React from 'react';
// import { useForm } from 'react-hook-form';

import { UiButton } from '~/components/ui/button/UiButton';

import styles from './FormRegistration.scss';

const FormRegistration: React.FC = () => {
  // const {} = useForm();

  return (
    <div className={styles.formRegistration}>
      <div className={styles.formRegistration__header}>
        <span className="font-caption">Впервые у нас?</span>
        <span className="font-title">Моментальная регистрация</span>
      </div>
      <UiButton label="Registration" />
    </div>
  );
};

export { FormRegistration };
