import React from 'react';
import classNames from 'classnames';

import styles from './UiButton.scss';

type Appearance = 'primary' | 'soft' | 'edit';

const modifierMap: Record<Appearance, string> = {
  primary: styles.uiButton_primary,
  soft: styles.uiButton_soft,
  edit: styles.uiButton_labelOnly,
};

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: Appearance;
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

  const isEditAppearance = appearance === 'edit';

  const baseContent = label ? <span>{label}</span> : children;

  const content = isEditAppearance ? <span>Изменить</span> : baseContent;

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
