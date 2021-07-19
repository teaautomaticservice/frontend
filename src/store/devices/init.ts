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

export { devicesStore };
