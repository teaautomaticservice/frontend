import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './UiInput.scss';

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const UiInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className } = props;

  return (
    <div className={classNames(styles.uiInput, className)}>
      <input {...props} ref={ref} className={styles.uiInput__input} />
    </div>
  );
});

export { UiInput };
