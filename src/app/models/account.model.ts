export interface AccountData {
  birthday: string;
  code: string;
  codeConfirm: string;
  document: string;
  documentType: string;
  email: string;
  emailConfirm: string;
  expeditionDate: string;
  gender: string;
}

export interface Phone {
  value: string;
  verified: boolean;
}

export interface Account {
  phone: Phone | undefined;
  data: AccountData | undefined;
  acceptTermsAndConditions: boolean | undefined;
}

