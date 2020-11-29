import React from 'react';
import { useForm } from 'react-hook-form';

import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';

import styles from './FormLogIn.scss';

const FormLogIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = handleSubmit((data: unknown) =>
    // TODO: Mock handler
    // eslint-disable-next-line no-console
    console.log('Submit!', data)
  );

  return (
    <div className={styles.formLogIn}>
      <div className={styles.formLogIn__header}>
        <span className="font-caption">Вход</span>
      </div>
      <form
        action="/"
        className={styles.formLogIn__form}
        onSubmit={formSubmitHandler}
      >
        <UiInput
          ref={register({ required: true })}
          className={styles.formLogIn__formInput}
          type="text"
          name="login"
          placeholder="Логин"
        />
        <UiInput
          ref={register({ required: true })}
          className={styles.formLogIn__formInput}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <UiButton type="submit" label="Войти" />
      </form>
    </div>
  );
};

export { FormLogIn };
