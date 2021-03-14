import React from 'react';

import { Notebook } from '~/types/models/equipment';
import { UiTable } from '~/components/ui/table/UiTable';
import { monetaryFormat, getFullNameFromClient } from '~/helpers/format';

interface Props extends Notebook {}

const DevicesRow: React.FC<Props> = ({
  id,
  subtype,
  isNotLiquid,
  mark,
  model,
  notes,
  storageLocation,
  costOfBuying,
  requiredDetails,
  costOfRepairing,
  salePrice,
  client,
}) => {
  const isNotLiquidView = isNotLiquid != null;
  const test = isNotLiquid ? 'Да' : 'Нет';

  const cellsContent = [
    id,
    subtype,
    isNotLiquidView ? test : undefined,
    mark,
    model,
    notes ? notes[0] : undefined,
    storageLocation,
    costOfBuying ? monetaryFormat(costOfBuying) : costOfBuying,
    requiredDetails?.toString(),
    costOfRepairing ? monetaryFormat(costOfRepairing) : costOfBuying,
    salePrice ? monetaryFormat(salePrice) : costOfBuying,
    client ? getFullNameFromClient(client) : undefined,
  ];

  // TODO: Mock handler
  // eslint-disable-next-line no-console
  const deviceSelect = () => console.log(id);

  return <UiTable.Row cellsContent={cellsContent} onSelect={deviceSelect} />;
};

export { DevicesRow };
