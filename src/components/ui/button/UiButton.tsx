import React from 'react';
import classNames from 'classnames';

import styles from './UiButton.scss';

export enum ButtonType {
  Submit = 'submit',
  Reset = 'reset',
  Button = 'button',
}

interface Props {
  label?: string;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UiButton: React.FC<Props> = ({
  label,
  className,
  type = ButtonType.Button,
  children,
  disabled,
  onClick,
}) => {
  const content = label ? <span>{label}</span> : children;

  return (
    <button
      type={type}
      className={classNames(styles.uiButton, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export { UiButton };
