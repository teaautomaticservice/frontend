import React from 'react';
import classNames from 'classnames';

import styles from './UiSectionContainer.scss';

interface Props {
  className?: string;
  label?: string;
}

const UiSectionContainer: React.FC<Props> = ({
  className,
  label,
  children,
}) => (
  <div className={classNames(styles.uiSectionContainer, className)}>
    {label && <h4 className={styles.uiSectionContainer__label}>{label}</h4>}
    {children}
  </div>
);

export { UiSectionContainer };
