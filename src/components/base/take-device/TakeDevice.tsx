import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';

import styles from './TakeDevice.scss';

const TakeDevice: React.FC = () => {
  return (
    <div className={styles.takeDevice}>
      <UiSection className={styles.takeDevice__section}>
        <div>TakeDevice</div>
      </UiSection>
    </div>
  );
};

export { TakeDevice };
