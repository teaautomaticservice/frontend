import React from 'react';
import classNames from 'classnames';

import styles from './ModalLayout.scss';

interface Props {
  className?: string;
}

const ModalLayout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames(styles.modalLayout, className)}>
      <div className={styles.modalLayout__content}>{children}</div>
    </div>
  );
};

export { ModalLayout };
