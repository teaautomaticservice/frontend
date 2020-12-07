import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { RouterHref } from '~/router/config';

import styles from './UiLink.scss';

interface Props extends LinkProps {
  label?: string;
  to: RouterHref | string;
}

const UiLink: React.FC<Props> = (props) => {
  const { label, children } = props;

  const content = label ? (
    <span className="font-caption">{label}</span>
  ) : (
    children
  );

  return (
    <Link {...props} className={styles.uiLink}>
      {content}
    </Link>
  );
};

export { UiLink };
