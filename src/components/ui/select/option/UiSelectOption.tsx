import React from 'react';

import styles from './UiSelectOption.scss';

export interface Props {
  value: string;
  label: string;
}

const UiSelectOption: React.FC<Props> = ({ value, label }) => {
  return (
    <option className={styles.uiSelectOption} value={value}>
      {label}
    </option>
  );
};

export { UiSelectOption };
