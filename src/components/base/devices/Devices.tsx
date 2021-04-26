import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiTable } from '~/components/ui/table/UiTable';
import { takedNotebookList } from '~/mock/equipment';

import styles from './Devices.scss';
import { getRowContent } from './helpers';

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

const Devices: React.FC = () => {
  const devicesRowsContent = takedNotebookList.map((item) =>
    getRowContent(item)
  );

  return (
    <div className={styles.devices}>
      <UiSection className={styles.devices__section}>
        <div className={styles.devices__heading}>
          <h2>Устройства</h2>
        </div>
        <UiTable
          caption="Принятые"
          head={tableHeading}
          body={devicesRowsContent}
          numberColumnKeyWithIndex={0}
        />
      </UiSection>
    </div>
  );
};

export { Devices };
