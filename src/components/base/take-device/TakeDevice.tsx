import React from 'react';
import { useForm } from 'react-hook-form';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';

import styles from './TakeDevice.scss';

const TakeDevice: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = handleSubmit((data: unknown) =>
    // TODO: Mock handler
    // eslint-disable-next-line no-console
    console.log('Submit!', data)
  );

  return (
    <div className={styles.takeDevice}>
      <UiSection className={styles.takeDevice__section}>
        <h2>Добавить устройство</h2>
        <form action="/" onSubmit={formSubmitHandler}>
          <UiInput
            ref={register({ required: true })}
            className={styles.formRegistration__formInput}
            type="text"
            name="name"
            placeholder="Имя"
          />
          <UiButton type="submit" label="Принять" />
        </form>
      </UiSection>
    </div>
  );
};

export { TakeDevice };
