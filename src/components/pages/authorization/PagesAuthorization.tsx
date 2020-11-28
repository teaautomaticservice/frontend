import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';

import styles from './PagesAuthorization.scss';

const PagesAuthorization: React.FC = () => {
  return (
    <LayoutsMain>
      <div className={styles.pagesAuthorization}>Authorizations</div>
    </LayoutsMain>
  );
};

export { PagesAuthorization };
