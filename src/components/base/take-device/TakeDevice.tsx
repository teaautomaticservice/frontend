import React from 'react';
import { useForm } from 'react-hook-form';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';
import { UiTabs, TabItem } from '~/components/ui/tabs/UiTabs';

import { PostTakedNotebook, Subtype } from '~/types/models/equipment';

import styles from './TakeDevice.scss';

const tabsItem: TabItem[] = [
  {
    label: 'Устройство',
    value: Subtype.Taked,
    defaultChecked: true,
  },
  {
    label: 'Интерес',
    value: Subtype.Concernment,
  },
];

const TakeDevice: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const formSubmitHandler = handleSubmit<PostTakedNotebook>((data) =>
    // TODO: Mock handler
    // eslint-disable-next-line no-console
    console.log('Submit!', data)
  );

  return (
    <div className={styles.takeDevice}>
      <UiSection className={styles.takeDevice__section}>
        <form action="/" onSubmit={formSubmitHandler}>
          <div className={styles.takeDevice__heading}>
            <h2>Добавить устройство</h2>
            <UiTabs
              name="subtype"
              items={tabsItem}
              register={register}
              className={styles.takeDevice__tabs}
            />
          </div>
          <UiSection.Container label="Устройство:">
            <UiInput
              ref={register({ required: true })}
              className={styles.formRegistration__formInput}
              type="text"
              name="model"
              placeholder="Модель"
            />
          </UiSection.Container>

          <UiSection.Container label="Клиент:">
            <UiInput
              ref={register({ required: true })}
              className={styles.formRegistration__formInput}
              type="text"
              name="name"
              placeholder="Имя"
            />
          </UiSection.Container>
          <UiButton type="submit" label="Принять" />
        </form>
      </UiSection>
    </div>
  );
};

export { TakeDevice };
