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

export enum ClientType {
  Person = 'person',
  Organization = 'organization',
}

export type Person = {
  id?: string;
  type: ClientType.Person;
  name: string;
  surname: string;
  phone: string;
  address: string;
  isRegularCustomer: boolean;
  notes: string[];
};

export type Organization = {
  id?: string;
  type: ClientType.Organization;
  organizationName: string;
  organizationPhone: string;
  organizationAddress: string;
  confidantName: string;
  confidantSurname: string;
  confidantPhone: string;
  isRegularCustomer: boolean;
  notes: string[];
};

export type Client = Person | Organization;

export type Notebook = {
  id?: string;
  subtype: Subtype;
  isNotLiquid: boolean;
  mark: string;
  model: string;
  notes?: string[];
  storageLocation?: string;
  costOfBuying?: number;
  requiredDetails?: Detail[];
  costOfRepairing?: number;
  salePrice?: number;
  client?: Client;
};
export interface PostTakedNotebook {
  subtype: Subtype;
  isNotLiquid: boolean;
  mark: string;
  model: string;
  storageLocation: string;
  costOfBuying: number;
  client: Client;
  notebookNotes: string;
  clientNotes: string;
}
