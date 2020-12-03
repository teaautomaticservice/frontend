import React from 'react';
import { useForm } from 'react-hook-form';

import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';

import styles from './FormRegistration.scss';

const FormRegistration: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = handleSubmit((data: unknown) =>
    // TODO: Mock handler
    // eslint-disable-next-line no-console
    console.log('Submit!', data)
  );

  return (
    <div className={styles.formRegistration}>
      <div className={styles.formRegistration__header}>
        <span className="font-caption">Регистрация</span>
      </div>
      <form
        action="/"
        className={styles.formRegistration__form}
        onSubmit={formSubmitHandler}
      >
        <UiInput
          ref={register({ required: true })}
          className={styles.formRegistration__formInput}
          type="text"
          name="name"
          placeholder="Имя"
        />
        <UiInput
          ref={register({ required: true })}
          className={styles.formRegistration__formInput}
          type="text"
          name="lastName"
          placeholder="Фамилия"
        />
        <UiInput
          ref={register({ required: true })}
          className={styles.formRegistration__formInput}
          type="text"
          name="login"
          placeholder="Логин"
        />
        <UiInput
          ref={register({ required: true })}
          className={styles.formRegistration__formInput}
          type="text"
          name="mail"
          placeholder="Почта"
        />
        <UiButton type="submit" label="Зарегистрироваться" />
      </form>
    </div>
  );
};

export { FormRegistration };
