export enum Subtype {
  Concernment = 'Concernment',
  Taked = 'Taked',
  Diagnostic = 'Diagnostic',
  ForParts = 'ForParts',
  Decommissioned = 'Decommissioned',
  Purchase = 'Purchase',
  WaitingParts = 'WaitingParts',
  Repairing = 'Repairing',
  Ready = 'Ready',
  Sale = 'Sale',
  SoldOut = 'SoldOut',
}

export type Detail = {
  id: string;
  name: string;
  coast: string;
  orderDate: Date | null;
  deliveryDate: Date | null;
};

export type Client = {
  id: string;
  name: string;
  surname: string;
  phone: string;
};

export type Organization = {
  id: string;
  name: string;
  phone: string;
};

export type Notebook = {
  id: number;
  subtype: Subtype;
  isNotLiquid: boolean;
  mark: string;
  model: string;
  storageLocation: string | null;
  costOfBuying: number | null;
  requiredDetails: Detail[] | null;
  costOfRepairing: number | null;
  salePrice: number | null;
  client: Client | Organization;
};
