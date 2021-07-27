import { createStore } from 'effector';

import { Notebook } from '~/types/models/equipment';
import { CustomStore, CustomStoreMethod } from '~/types/store';
import { createError } from '~/helpers/errorHandling';

const devicesStore = createStore<Notebook[]>([]);
// new Array<Notebook>(25)
//   .fill({
//     id: '1',
//     mark: 'MSI',
//     model: 'GT60',
//     subtype: Subtype.Taked,
//     isNotLiquid: false,
//     client: clientIvan,
//     costOfBuying: 2000,
//     costOfRepairing: 1500.5,
//     notes: [],
//     requiredDetails: [],
//     salePrice: 6000,
//   })
//   .map((data, index) => ({ ...data, id: `${index}` }))

const fetchDevices: CustomStoreMethod<Notebook[]> = {
  name: 'fetchDevices',
  handler: async (endpoint) => {
    if (typeof endpoint === 'string') {
      const response = await fetch(endpoint);
      return response.json();
    }

    return createError('Endpoint is not a string.');
  },
  reducer: (_, payload) => {
    if (Array.isArray(payload)) {
      return [...payload];
    }
    return [payload];
  },
};

const methods = {
  fetchDevices,
}

export const customStore: CustomStore<Notebook[], typeof methods> = {
  store: devicesStore,
  methods,
};
