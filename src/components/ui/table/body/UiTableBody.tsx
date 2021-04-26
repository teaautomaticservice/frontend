import React from 'react';

import styles from './UiTableBody.scss';
import { CellContent } from '../types';
import { UiTableRow } from '../row/UiTableRow';

interface Props {
  className?: string;
  body: CellContent[][];
  columnKeyWithIndex?: number;
}

const UiTableBody: React.FC<Props> = ({ body, columnKeyWithIndex }) => {
  const rowsEls = body.map((cellsContent, index) => {
    if (
      columnKeyWithIndex &&
      typeof cellsContent[columnKeyWithIndex] !== 'string'
    ) {
      throw new Error('Column key with index must be string.');
    }

    const key = columnKeyWithIndex
      ? (cellsContent[columnKeyWithIndex] as string)
      : index;

    return <UiTableRow key={key} cellsContent={cellsContent} />;
  });

  return <div className={styles.uiTableBody}>{rowsEls}</div>;
};

export { UiTableBody };
