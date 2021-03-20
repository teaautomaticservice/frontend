import React, { useRef, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './Modal.scss';
import { ModalLayout } from './layout/ModalLayout';

const Modal: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      enableBodyScroll(ref.current);

      return disableBodyScroll(ref.current);
    }

    return () => undefined;
  }, []);

  return (
    <div ref={ref} className={styles.modal}>
      <div className={styles.modal__overlay}>
        <ModalLayout>
          <div>
            <h1>Modal</h1>
          </div>
        </ModalLayout>
      </div>
    </div>
  );
};

export { Modal };
