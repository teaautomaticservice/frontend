import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiTable } from '~/components/ui/table/UiTable';
import { takedNotebookList } from '~/mock/equipment';

import styles from './Devices.scss';
import { DevicesRow } from './row/DevicesRow';

const tableHeading = [
  'ID',
  'Подтип',
  'Не ликивид',
  'Марка',
  'Модель',
  'Заметки',
  'Место хранения',
  'Стоимость выкупа',
  'Требуемые детали',
  'Стоимость восстановления',
  'Цена',
  'Клиент',
];

// export type Notebook = {
//   id?: string;
//   subtype: Subtype;
//   isNotLiquid: boolean;
//   mark: string;
//   model: string;
//   notes?: string[];
//   storageLocation?: string;
//   costOfBuying?: number;
//   requiredDetails?: Detail[];
//   costOfRepairing?: number;
//   salePrice?: number;
//   client?: Client | Organization;
// };

const Devices: React.FC = () => {
  const devicesRowsEls = takedNotebookList.map((item) => (
    <DevicesRow key={item.mark} {...item} />
  ));

  return (
    <div className={styles.devices}>
      <UiSection className={styles.devices__section}>
        <div className={styles.devices__heading}>
          <h2>Устройства</h2>
        </div>
        <UiTable label="Принятые" heading={tableHeading}>
          {devicesRowsEls}
        </UiTable>
      </UiSection>
    </div>
  );
};

export { Devices };
