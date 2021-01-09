import React from 'react';
import classNames from 'classnames';
import { UseFormMethods, RegisterOptions } from 'react-hook-form';

import styles from './UiRadio.scss';

export type TabItem<Value = string> = {
  label: string;
  value: Value;
  checked?: boolean;
  defaultChecked?: boolean;
};

export type onRadioChange = React.ChangeEventHandler<HTMLInputElement>;

interface Props {
  className?: string;
  name: string;
  items: TabItem[];
  register: UseFormMethods['register'];
  registerOptions?: RegisterOptions;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UiRadio: React.FC<Props> = ({
  className,
  name,
  items,
  register,
  registerOptions,
  onChange,
}) => {
  const itemsEls = items.map(({ label, value, checked, defaultChecked }) => (
    <label key={value} className={styles.uiRadio__label}>
      <input
        ref={register(registerOptions)}
        className={styles.uiRadio__input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <div className={styles.uiRadio__wrapper}>
        <span>{label}</span>
      </div>
    </label>
  ));

  return (
    <div className={classNames(styles.uiRadio, className)}>{itemsEls}</div>
  );
};

export { UiRadio };
