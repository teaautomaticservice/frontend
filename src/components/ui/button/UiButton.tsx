import React from 'react';
import classNames from 'classnames';

import styles from './UiButton.scss';

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
}

const UiButton: React.FC<Props> = (props) => {
  const { label, className, type = 'button', children } = props;

  const content = label ? <span>{label}</span> : children;

  return (
    <button
      {...props}
      type={type}
      className={classNames(styles.uiButton, className)}
    >
      {content}
    </button>
  );
};

export { UiButton };
