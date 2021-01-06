import React from 'react';
import classNames from 'classnames';

import styles from './UiSection.scss';

interface Props {
  className?: string;
}

const UiSection: React.FC<Props> = ({ className, children }) => (
  <div className={classNames(styles.uiSection, className)}>{children}</div>
);

export { UiSection };
