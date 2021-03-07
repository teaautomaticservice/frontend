import {
  Notebook,
  Subtype,
  Person,
  ClientType,
} from '~/types/models/equipment';

const notebook: Notebook = {
  mark: 'MSI',
  model: 'GT60',
  subtype: Subtype.Taked,
  isNotLiquid: false,
};

const clientIvan: Person = {
  id: '1',
  type: ClientType.Person,
  name: 'Иван',
  surname: 'Иванов',
  phone: '79112113141',
  address: 'г Санкт-Петербург',
  isRegularCustomer: false,
  notes: [],
};

const takedNotebookList: Notebook[] = [
  {
    id: '1',
    mark: 'MSI',
    model: 'GT60',
    subtype: Subtype.Taked,
    isNotLiquid: false,
    client: clientIvan,
    costOfBuying: 2000,
    costOfRepairing: 1500.5,
    notes: [],
    requiredDetails: [],
    salePrice: 6000,
  },
  {
    id: '2',
    mark: 'MSI',
    model: 'GT60',
    subtype: Subtype.Taked,
    isNotLiquid: false,
    client: clientIvan,
    costOfBuying: 2000,
    costOfRepairing: 1500.5,
    notes: [],
    requiredDetails: [],
    salePrice: 6000,
  },
  {
    id: '3',
    mark: 'MSI',
    model: 'GT60',
    subtype: Subtype.Taked,
    isNotLiquid: false,
    client: clientIvan,
    costOfBuying: 2000,
    costOfRepairing: 1500.5,
    notes: [],
    requiredDetails: [],
    salePrice: 6000,
  },
];

export { notebook, takedNotebookList };
