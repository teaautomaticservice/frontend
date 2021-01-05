import React from 'react';
import classNames from 'classnames';

import styles from './UiButton.scss';

type UiButtonAppearance = 'primary' | 'soft';

const modifierMap: Record<UiButtonAppearance, string> = {
  primary: styles.uiButton_primary,
  soft: styles.uiButton_soft,
};

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: UiButtonAppearance;
  label?: string;
}

const UiButton: React.FC<Props> = (props) => {
  const {
    appearance = 'primary',
    label,
    className,
    type = 'button',
    children,
  } = props;

  const content = label ? <span>{label}</span> : children;

  return (
    <button
      {...props}
      type={type}
      className={classNames(
        styles.uiButton,
        modifierMap[appearance],
        className
      )}
    >
      {content}
    </button>
  );
};

export { UiButton };
