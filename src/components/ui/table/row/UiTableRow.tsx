import React from 'react';
import classNames from 'classnames';

import styles from './UiTableRow.scss';
import { CellContent } from '../types';

interface Props {
  className?: string;
  cellsContent?: CellContent[];
}

const UiTableRow: React.FC<Props> = ({ children, className, cellsContent }) => {
  if (children == null && !Array.isArray(cellsContent)) {
    throw new Error('Cells content undefined.');
  }

  const cellsEls =
    children ||
    cellsContent?.map((content, index) => (
      // Since the order of the elements will not change, a unique key is not required.
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={styles.uiTableRow__td}>
        {content}
      </div>
    ));

  return (
    <div className={classNames(styles.uiTableRow, className)}>{cellsEls}</div>
  );
};

export { UiTableRow };
