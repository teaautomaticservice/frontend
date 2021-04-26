import React from 'react';
import classNames from 'classnames';

import styles from './UiTable.scss';
import { CellContent } from './types';
import { UiTableHead } from './head/UiTableHead';
import { UiTableBody } from './body/UiTableBody';

interface Props {
  className?: string;
  caption?: string;
  head?: CellContent[];
  body: CellContent[][];
  numberColumnKeyWithIndex?: number;
}

const UiTable: React.FC<Props> = ({
  className,
  caption,
  head,
  body,
  numberColumnKeyWithIndex,
}) => {
  return (
    <div className={classNames(styles.uiTable, className)}>
      <div className={styles.uiTable__table}>
        {caption && (
          <div className={classNames('h3', styles.uiTable__caption)}>
            {caption}
          </div>
        )}
        {Array.isArray(head) && <UiTableHead head={head} />}
        <UiTableBody
          body={body}
          numberColumnKeyWithIndex={numberColumnKeyWithIndex}
        />
      </div>
    </div>
  );
};

export { UiTable };
