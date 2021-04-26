import {
  Client,
  Person,
  ClientType,
  Organization,
} from '~/types/models/equipment';

const monetaryFormat = (number: number): string => {
  return `${number.toFixed(2)} р.`;
};

const toString = (value: null | undefined | string | number): string => {
  if (value == null) {
    return '';
  }
  return value.toString();
};

const getFullNameFromClient = (client: Client): string => {
  const { type } = client;

  if (type === ClientType.Person) {
    const { name, surname } = client as Person;
    return `${surname} ${name}`;
  }

  const {
    confidantName,
    confidantSurname,
    organizationName,
  } = client as Organization;
  return `${organizationName}: ${confidantSurname} ${confidantName}`;
};

export { monetaryFormat, toString, getFullNameFromClient };
