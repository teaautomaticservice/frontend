import React from 'react';

import styles from './UiTable.scss';
import { UiTableRow } from './row/UiTableRow';

interface Props {
  label?: string;
  heading?: string[];
}

type Composition = {
  Row: typeof UiTableRow;
};

const UiTable: React.FC<Props> & Composition = ({
  label,
  heading,
  children,
}) => {
  const isHeadingView = Array.isArray(heading);

  const headingEls = heading?.map((phrase) => (
    <th key={phrase}>
      <h4>{phrase}</h4>
    </th>
  ));

  return (
    <div className={styles.uiTable}>
      <table>
        {label && (
          <caption>
            <h4>{label}</h4>
          </caption>
        )}
        {isHeadingView && (
          <thead className={styles.uiTable__heading}>
            <tr>{headingEls}</tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

UiTable.Row = UiTableRow;

export { UiTable };
