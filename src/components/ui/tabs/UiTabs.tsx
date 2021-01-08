import React from 'react';
import classNames from 'classnames';
import { UseFormMethods, RegisterOptions } from 'react-hook-form';

import styles from './UiTabs.scss';

export type TabItem = {
  label: string;
  value: string;
  checked?: boolean;
  defaultChecked?: boolean;
};

interface Props {
  className?: string;
  name: string;
  items: TabItem[];
  register: UseFormMethods['register'];
  registerOptions?: RegisterOptions;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UiTabs: React.FC<Props> = ({
  className,
  name,
  items,
  register,
  registerOptions,
  onChange,
}) => {
  const itemsEls = items.map(({ label, value, checked, defaultChecked }) => (
    <label key={value} className={styles.uiTabs__label}>
      <input
        ref={register(registerOptions)}
        className={styles.uiTabs__input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <div className={styles.uiTabs__wrapper}>
        <span>{label}</span>
      </div>
    </label>
  ));

  return <div className={classNames(styles.uiTabs, className)}>{itemsEls}</div>;
};

export { UiTabs };
