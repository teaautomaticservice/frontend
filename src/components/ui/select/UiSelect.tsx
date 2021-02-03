import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './UiSelect.scss';

interface Props {
  name: string;
  className?: string;
}

const UiSelect = forwardRef<HTMLSelectElement, Props>(
  ({ className, name }, ref) => {
    return (
      <div className={classNames(styles.uiSelect, className)}>
        <select ref={ref} name={name}>
          <option value="test" />
        </select>
      </div>
    );
  }
);

export { UiSelect };
