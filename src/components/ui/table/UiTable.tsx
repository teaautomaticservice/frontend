import React from 'react';

import styles from './UiTable.scss';

interface Props {
  label?: string;
  heading?: string[];
}

const UiTable: React.FC<Props> = ({ label, heading }) => {
  const isHeadingView = Array.isArray(heading);

  const headingEls = heading?.map((phrase) => (
    <th>
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
          <tr>
            <th>{headingEls}</th>
          </tr>
        )}
      </table>
    </div>
  );
};

export { UiTable };
