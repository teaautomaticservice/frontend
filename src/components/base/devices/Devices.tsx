import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiTable } from '~/components/ui/table/UiTable';

import styles from './Devices.scss';

const tableHeading = ['one', 'two', 'three'];

const Devices: React.FC = () => {
  return (
    <div className={styles.devices}>
      <UiSection className={styles.devices__section}>
        <div className={styles.devices__heading}>
          <h2>Устройства</h2>
        </div>
        <UiTable label="Принятые" heading={tableHeading} />
      </UiSection>
    </div>
  );
};

export { Devices };
