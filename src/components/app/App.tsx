import React from 'react';

import { RouterHistory } from '~/router/history';

import styles from './App.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <RouterHistory />
    </div>
  );
};

export { App };
