import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './UiCheckbox.scss';

interface Props {
  label: string;
  name: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UiCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ label, name, className, defaultChecked, checked, onChange }, ref) => {
    return (
      <div className={classNames(styles.uiCheckbox, className)}>
        <label className={styles.uiCheckbox__label}>
          <input
            ref={ref}
            className={styles.uiCheckbox__input}
            type="checkbox"
            name={name}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
          />
          <div className={styles.uiCheckbox__wrapper}>
            <span className={styles.uiCheckbox__icon} />
            <span className={styles.uiCheckbox__description}>{label}</span>
          </div>
        </label>
      </div>
    );
  }
);

export { UiCheckbox };
