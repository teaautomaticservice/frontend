import React from 'react';
import classNames from 'classnames';

import styles from './UiTableRow.scss';

type CellContent = string | number;

interface Props {
  className?: string;
  cellsContent?: CellContent[];
}

const UiTableRow: React.FC<Props> = ({ children, className, cellsContent }) => {
  if (children == null && cellsContent == null) {
    throw new Error('Cells content undefined');
  }

  const cellsEls =
    children ||
    (cellsContent as CellContent[]).map((content) => (
      <td key={content} className={styles.uiTableRow__cell}>
        {content}
      </td>
    ));

  return (
    <tr className={classNames(styles.uiTableRow, className)}>{cellsEls}</tr>
  );
};

export { UiTableRow };
