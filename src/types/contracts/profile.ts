export type User = {
  name: string;
  surname: string;
  mainPhoneNumber: string;
};

export interface RequestUserAuthorization extends User {}

export interface ResponseUserAuthorization {
  token: string;
}
