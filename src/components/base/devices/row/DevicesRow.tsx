import React from 'react';

import { Notebook } from '~/types/models/equipment';
import { UiTable } from '~/components/ui/table/UiTable';

import styles from './DevicesRow.scss';

interface Props extends Notebook {}

const DevicesRow: React.FC<Props> = ({
  id,
  subtype,
  isNotLiquid,
  mark,
  model,
  // notes,
  storageLocation,
  costOfBuying,
  requiredDetails,
  costOfRepairing,
  salePrice,
  // client,
}) => {
  // return (
  //   <div className={styles.devicesRow}>
  //     {/* <button> */}
  //     <UiTable.Row>
  //       <td>{id}</td>
  //       <td>one</td>
  //       <td>one</td>
  //       <td>one</td>
  //     </UiTable.Row>
  //     {/* </button> */}
  //   </div>
  // );

  const isNotLiquidView = isNotLiquid !== undefined;
  const test = isNotLiquid ? 'Да' : 'Нет';

  return (
    <UiTable.Row className={styles.devicesRow}>
      {/* <button> */}
      <td>{id}</td>
      <td>{subtype}</td>
      <td>{isNotLiquidView && test}</td>
      <td>{mark}</td>
      <td>{model}</td>
      <td>{mark}</td>
      <td>{storageLocation}</td>
      <td>{costOfBuying}</td>
      <td>{requiredDetails}</td>
      <td>{costOfRepairing}</td>
      <td>{salePrice}</td>
      <td>{mark}</td>
      {/* </button> */}
    </UiTable.Row>
  );
};

export { DevicesRow };
