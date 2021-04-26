import { Notebook } from '~/types/models/equipment';
import {
  monetaryFormat,
  getFullNameFromClient,
  toString,
} from '~/helpers/format';

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
}: Notebook): string[] => {
  const isNotLiquidView = isNotLiquid != null;
  const isNotLiquidPhrase = isNotLiquid ? 'Да' : 'Нет';

  return [
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
  ];
};

export { getRowContent };
