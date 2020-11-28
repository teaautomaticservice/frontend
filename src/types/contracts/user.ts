export interface RequestUserAuthorization {
  name: string;
  surname: string;
  mainPhoneNumber: number;
}

export interface ResponseUserAuthorization {
  token: string;
}
