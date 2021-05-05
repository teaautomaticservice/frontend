import React from 'react';

import styles from './UiTableBody.scss';
import { CellContent } from '../types';
import { UiTableRow } from '../row/UiTableRow';

interface Props {
  className?: string;
  body: CellContent[][];
  numberColumnKeyWithIndex?: number;
}

const UiTableBody: React.FC<Props> = ({ body, numberColumnKeyWithIndex }) => {
  const rowsEls = body.map((cellsContent, index) => {
    if (
      numberColumnKeyWithIndex &&
      typeof cellsContent[numberColumnKeyWithIndex] !== 'string'
    ) {
      throw new Error('Column key with index must be string.');
    }

    const key = numberColumnKeyWithIndex
      ? (cellsContent[numberColumnKeyWithIndex] as string)
      : index;

    return <UiTableRow key={key} cellsContent={cellsContent} />;
  });

  return <div className={styles.uiTableBody}>{rowsEls}</div>;
};

export { UiTableBody };
