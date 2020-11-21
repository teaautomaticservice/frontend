import React from 'react';

import { PagesUi } from '~/components/pages/ui/PagesUi';

import styles from './App.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <PagesUi />
    </div>
  );
};

export { App };
