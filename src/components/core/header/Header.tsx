import React from 'react';

import styles from './Header.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>Header</div>
    </div>
  );
};

export { Header };
