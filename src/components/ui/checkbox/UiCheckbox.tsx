import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './UiCheckbox.scss';

type Appearance = 'primary' | 'soft';

const modifierMap: Record<Appearance, string> = {
  primary: styles.uiCheckbox_primary,
  soft: styles.uiCheckbox_soft,
};

interface Props {
  appearance?: Appearance;
  label?: string;
  name: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const UiCheckbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      appearance = 'primary',
      label,
      name,
      className,
      defaultChecked,
      checked,
      onChange,
    },
    ref
  ) => {
    return (
      <div
        className={classNames(
          styles.uiCheckbox,
          modifierMap[appearance],
          className
        )}
      >
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
            {label && (
              <span className={styles.uiCheckbox__description}>{label}</span>
            )}
          </div>
        </label>
      </div>
    );
  }
);

export { UiCheckbox };
