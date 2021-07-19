import React from 'react';

import { UiSection } from '~/components/ui/section/UiSection';
import { UiTable } from '~/components/ui/table/UiTable';
// import { takedNotebookList } from '~/mock/equipment';
import { UiCheckbox } from '~/components/ui/checkbox/UiCheckbox';

import styles from './Devices.scss';
import { getRowContent } from './helpers';
import { useCustomStore } from '~/hooks/useCustomStore';
import { devicesStore } from '~/store/index';
import { UiButton } from '~/components/ui/button/UiButton';

const tableHeading = [
  <UiCheckbox appearance="soft" name="selectAll" />,
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
  '',
];

const Devices: React.FC = () => {
  const { currentStore: notebooks, clearStore } = useCustomStore(devicesStore);

  const devicesRowsContent = Array.isArray(notebooks)
    ? notebooks.map((item) => getRowContent(item))
    : [getRowContent(notebooks)];

  const clearState = () => {
    clearStore();
  };

  return (
    <div className={styles.devices}>
      <UiSection className={styles.devices__section}>
        <div className={styles.devices__heading}>
          <h2>Устройства</h2>
          <UiButton
            onClick={clearState}
            label="Очистить таблицу"
            className={styles.devices__clearButton}
          />
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
