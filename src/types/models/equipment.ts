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
  id?: string;
  name: string;
  coast: string;
  orderDate: Date | null;
  deliveryDate: Date | null;
};

export type Client = {
  id?: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  isRegularCustomer: boolean;
  notes: string[];
};

export type Organization = {
  id?: string;
  organizationName: string;
  organizationPhone: string;
  organizationAddress: string;
  confidantName: string;
  confidantSurname: string;
  confidantPhone: string;
  isRegularCustomer: boolean;
  notes: string[];
};

export type Notebook = {
  id?: number;
  subtype: Subtype;
  isNotLiquid: boolean;
  mark: string;
  model: string;
  notes?: string[];
  storageLocation?: string;
  costOfBuying?: string;
  requiredDetails?: Detail[];
  costOfRepairing?: string;
  salePrice?: string;
  client?: Client | Organization;
};

export enum ClientType {
  Organization = 'Organization',
  Individual = 'Individual',
}
export interface PostTakedNotebook {
  subtype: Subtype;
  isNotLiquid: boolean;
  mark: string;
  model: string;
  storageLocation: string;
  costOfBuying: string;
  clientType: ClientType;
  client: Client | Organization;
  notebookNotes: string;
  clientNotes: string;
}
