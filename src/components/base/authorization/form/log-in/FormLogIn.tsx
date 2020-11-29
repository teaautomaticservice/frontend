import React from 'react';
import { useForm } from 'react-hook-form';

import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';

import styles from './FormLogIn.scss';

const FormLogIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = (data: unknown) => console.log('Submit!', data);

  return (
    <div className={styles.formLogIn}>
      <div className={styles.formLogIn__header}>
        <span className="font-caption">Войти</span>
      </div>
      <form
        action="/"
        className={styles.formLogIn__form}
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <UiInput
          ref={register()}
          className={styles.formLogIn__formInput}
          type="text"
          name="userName"
          placeholder="Имя"
        />
        <UiButton type="submit" label="Log in" />
      </form>
    </div>
  );
};

export { FormLogIn };
