import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './UiTextarea.scss';

interface Props {
  name: string;
  className?: string;
  height?: string;
  placeholder?: string;
}

const UiTextarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, name, children, placeholder, height }, ref) => {
    return (
      <div className={classNames(styles.uiTextarea, className)}>
        <textarea
          ref={ref}
          name={name}
          placeholder={placeholder}
          style={{ height }}
          className={styles.uiTextarea__textarea}
        >
          {children}
        </textarea>
      </div>
    );
  }
);

export { UiTextarea };
