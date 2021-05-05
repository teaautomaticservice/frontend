import React from 'react';

import { Header } from '~/components/core/header/Header';
import { Footer } from '~/components/core/footer/Footer';
// import { Modal } from '~/components/core/modal/Modal';

import styles from './LayoutsMain.scss';

const LayoutsMain: React.FC = ({ children }) => {
  return (
    <div className={styles.layoutsMain}>
      <Header />
      <div className={styles.layoutsMain__content}>{children}</div>
      <Footer />
      {/* <Modal /> */}
    </div>
  );
};

export { LayoutsMain };
