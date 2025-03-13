export const MINIMUM_PASSWORD_LENGTH = 6;

export const authKey = "bWVyY2hhbnQubWFuYWdlbWVudC53ZWI6c2VjcmV0";

export const queryKeys = {
  verifyEmail: "verifyEmail",
  getAllServices: "getAllServices",
  getCustomer: "getCustomer",
  getPaymentMethodApi: "getPaymentMethodApi",
  getData: (type: string) => `getData-${type}`,
};

export const defaultTableTake = 10;

export const maxFileUploadSize = 3;

export const termsAndConditionsUrl = "https://www.etranzact.com/#/terms";

export const privacyPolicyUrl = "https://www.etranzact.com/#/";

export const etzServiceAgreementUrl = "https://www.etranzact.com/#/terms";

export const customerSupportEmail = "coc@etranzact.com";
