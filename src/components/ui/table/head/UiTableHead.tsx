import React from 'react';
import classNames from 'classnames';

import styles from './UiTableHead.scss';
import { CellContent } from '../types';

interface Props {
  className?: string;
  head: CellContent[];
}

const UiTableHead: React.FC<Props> = ({ className, head }) => {
  const headingEls = head.map((content) => {
    if (typeof content === 'string') {
      return (
        <div key={content} className={styles.uiTableHead__th}>
          <h4>{content}</h4>
        </div>
      );
    }

    return <div className={styles.uiTableHead__th}>{content}</div>;
  });

  return (
    <div className={classNames(styles.uiTableHead, className)}>
      <div className={styles.uiTableHead__tr}>{headingEls}</div>
    </div>
  );
};

export { UiTableHead };
