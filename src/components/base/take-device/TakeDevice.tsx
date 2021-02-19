import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiSelect } from '~/components/ui/select/UiSelect';
import { Props as UiSelectProps } from '~/components/ui/select/option/UiSelectOption';
import { UiInput } from '~/components/ui/input/UiInput';
import { UiButton } from '~/components/ui/button/UiButton';
import { UiRadio, TabItem, onRadioChange } from '~/components/ui/radio/UiRadio';
import { UiCheckbox } from '~/components/ui/checkbox/UiCheckbox';
import { UiTextarea } from '~/components/ui/textarea/UiTextarea';

import {
  PostTakedNotebook,
  Subtype,
  ClientType,
} from '~/types/models/equipment';

import styles from './TakeDevice.scss';

const subtypeRadioItems: TabItem<Subtype>[] = [
  {
    label: 'Выкуп',
    value: Subtype.Taked,
    defaultChecked: true,
  },
  {
    label: 'Интерес',
    value: Subtype.Concernment,
  },
];

const clientTypeRadioItems: TabItem<ClientType>[] = [
  {
    label: 'Физ. лицо',
    value: ClientType.Individual,
    defaultChecked: true,
  },
  {
    label: 'Организация',
    value: ClientType.Organization,
  },
];

const markSelectItems: UiSelectProps[] = [
  {
    value: 'acer',
    label: 'Acer',
  },
  {
    value: 'asus',
    label: 'Asus',
  },
];

const TakeDevice: React.FC = () => {
  const defaultHeading = subtypeRadioItems.filter(
    ({ defaultChecked }) => defaultChecked === true
  )[0].label;

  const [heading, setHeading] = useState(defaultHeading);

  const onRadioChangeHandler: onRadioChange = ({ target }) => {
    const currentHeading = subtypeRadioItems.filter(
      ({ value }) => target.value === value
    )[0].label;
    setHeading(currentHeading);
  };

  const { register, handleSubmit } = useForm();

  const formSubmitHandler = handleSubmit<PostTakedNotebook>((data) =>
    // TODO: Mock handler
    // eslint-disable-next-line no-console
    console.log('Submit!', data)
  );

  const markSelectOptions = markSelectItems.map((props) => (
    <UiSelect.Option key={props.value} {...props} />
  ));

  return (
    <div className={styles.takeDevice}>
      <UiSection className={styles.takeDevice__section}>
        <form action="/" onSubmit={formSubmitHandler}>
          {heading && (
            <div className={styles.takeDevice__heading}>
              <h2>{heading}</h2>
              <UiRadio
                name="subtype"
                items={subtypeRadioItems}
                register={register}
                className={styles.takeDevice__radio}
                onChange={onRadioChangeHandler}
              />
            </div>
          )}
          <UiSection.Container label="Устройство:">
            <UiCheckbox
              ref={register()}
              className={styles.takeDevice__formItem}
              label="Не ликвид"
              name="isNotLiquid"
            />
            <UiSelect
              ref={register()}
              className={styles.takeDevice__formItem}
              name="mark"
            >
              {markSelectOptions}
            </UiSelect>
            <UiInput
              ref={register()}
              className={styles.takeDevice__formItem}
              type="text"
              name="model"
              placeholder="Модель"
            />
            <UiInput
              ref={register()}
              className={styles.takeDevice__formItem}
              type="text"
              name="costOfBuying"
              placeholder="Стоимость выкупа"
            />
            <UiTextarea
              ref={register()}
              className={styles.takeDevice__formItem}
              height="140px"
              placeholder="Комментарий к устройству"
              name="notebookNotes"
            />
          </UiSection.Container>

          <UiSection.Container label="Клиент:">
            <UiRadio
              name="clientType"
              items={clientTypeRadioItems}
              register={register}
              className={styles.takeDevice__formItem}
              // onChange={onRadioChangeHandler}
            />
            <UiCheckbox
              className={styles.takeDevice__formItem}
              label="Постоянный"
              name="isRegularClient"
            />
            <UiInput
              ref={register()}
              className={styles.takeDevice__formItem}
              type="text"
              name="name"
              placeholder="Имя"
            />
            <UiInput
              ref={register()}
              className={styles.takeDevice__formItem}
              type="text"
              name="surname"
              placeholder="Фамилия"
            />
            <UiTextarea
              ref={register()}
              className={styles.takeDevice__formItem}
              height="140px"
              placeholder="Комментарий к клиенту"
              name="clientNotes"
            />
          </UiSection.Container>
          <UiButton type="submit" label="Принять" />
        </form>
      </UiSection>
    </div>
  );
};

export { TakeDevice };
