import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './UiLink.scss';

interface Props extends LinkProps {
  label?: string;
}

const UiLink: React.FC<Props> = (props) => {
  const { label, children } = props;

  const content = label ? <span>{label}</span> : children;

  return (
    <Link {...props} className={styles.uiLink}>
      {content}
    </Link>
  );
};

export { UiLink };
