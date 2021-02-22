import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';

import styles from './Devices.scss';

const Devices: React.FC = () => {
  return (
    <div className={styles.devices}>
      <UiSection>
        <div className={styles.devices__heading}>
          <h2>Устройства</h2>
        </div>
        <div>Content</div>
      </UiSection>
    </div>
  );
};

export { Devices };
