import React from 'react';

import { Notebook } from '~/types/models/equipment';
import {
  monetaryFormat,
  getFullNameFromClient,
  toString,
} from '~/helpers/format';
import { CellContent } from '~/components/ui/table/types';
import { UiButton } from '~/components/ui/button/UiButton';
import { UiCheckbox } from '~/components/ui/checkbox/UiCheckbox';

const getRowContent = ({
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
}: Notebook): CellContent[] => {
  const isNotLiquidView = isNotLiquid != null;
  const isNotLiquidPhrase = isNotLiquid ? 'Да' : 'Нет';

  return [
    <UiCheckbox name={toString(id)} />,
    toString(id),
    toString(subtype),
    isNotLiquidView ? isNotLiquidPhrase : '',
    toString(mark),
    toString(model),
    notes ? notes[0] : '',
    toString(storageLocation),
    costOfBuying ? monetaryFormat(costOfBuying) : '',
    requiredDetails?.toString() || '',
    costOfRepairing ? monetaryFormat(costOfRepairing) : '',
    salePrice ? monetaryFormat(salePrice) : '',
    client ? getFullNameFromClient(client) : '',
    <UiButton appearance="edit" label="Изменить" />,
  ];
};

export { getRowContent };
