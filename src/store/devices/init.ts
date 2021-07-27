import { createStore } from 'effector';
import { Notebook } from '~/types/models/equipment';

const devicesStore = createStore<Notebook[] | Notebook>([]);
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

const fetchDevices = {
  name: 'fetchDevices',
  handler: async (endpoint: string): Promise<Notebook[] | Notebook> => {
    const response = await fetch(endpoint);
    return response.json();
  },
  reducer: (_: any, payload: Notebook[] | Notebook): Notebook[] | Notebook => {
    if (Array.isArray(payload)) {
      return [...payload];
    }
    return [payload];
  },
};

export const store = {
  store: devicesStore,
  methods: [fetchDevices],
};
