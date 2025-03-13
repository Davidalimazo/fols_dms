import { ICountry } from "./authTypes";

export interface IVPhoneNumberFormPayload {
  phoneNumber?: string | null | undefined;
}
export interface IBillIdFormPayload {
  billId: string;
}
export interface ICountryFormPayload {
  country: string;
}
export interface ICategoryFormPayload {
  categoryId: string;
}

export interface PaymentWalletBalance {
  amount: string;
  currencyId: string;
}
export interface IVOperatorFormPayload {
  operatorId: string;
  categoryId?: string;
  type?: string;
  currency?: string;
}

export interface IProductCategoryPayload {
  countryId: string;
  type: string;
  categoryId?: string;
}

export interface ICreateOrderPayload {
  currencyId: string;
  amount: string;
  beneficiary: string;
  couponCode?: string;
  operatorId: string;
  paymentMethod?: number;
  productId?: number;
}

export interface IPaymentInfo {
  currency: string;
  method: string;
  provider: string;
  amount: string;
  fee: string;
  total: string;
  status: string;
  redirectUrl: string;
}

export interface PaymentMethodAPIResponse {
  code: number;
  message: string;
  timestamp: number;
  data: {
    paymentMethods: PaymentMethod[];
  };
}

export interface PaymentMethod {
  id: number;
  name: string;
  logoURL: string;
  balance?: PaymentWalletBalance;
}

export interface IProductCategory {
  name: string;
  parentCategory: string;
  id: string;
}

export interface IVProductFormPayload {
  product: string;
}
export interface IVCouponFormPayload {
  couponCode: string;
}

export interface IValidatePhoneNumberResponse {
  code: number;
  data: Msisdn;
  message: string;
  timestamp: number;
  errors?: Array<string[]>;
}

export interface Msisdn {
  original: string;
  normalized: string;
  isValid: boolean;
  isFormallyValid: boolean;
  country: PhoneNumberCountry;
  operator: MobileOperator;
}
export interface IOperator {
  id: string;
  name: string;
  brandId: string;
  currencyId: string;
  countryId: string;
}

export interface IProduct {
  id: string;
  name: string;
  type: string;
  category: string;
}

interface IPinData {
  pin: string;
  serial: string;
  instructions: string;
}

export interface MobileOperator {
  alt: MobileOperatorDetails[];
  id: string;
  name: string;
  brandId: string;
  logoUrl: string;
  fullprefix: string;
  prefix: string;
  number: string;
  prefixnumber: string;
  confidence: number;
}

export interface HistoryPaymentInfo {
  currency: string;
  method: string;
  provider: string;
  amount: string;
  fee: string;
  total: string;
  paymentReference?: string;
  payerId?: string;
  status: string;
}

export interface ICreateOrderData {
  orderId: string;
  beneficiary: string;
  currencyId: string;
  amountOperator: string;
  amountOriginal: string;
  couponCode?: string; // Optional property
  amount: string;
  date: string;
  product: IProduct;
  operator: IOperator;
  paymentInfo: IPaymentInfo;
  status: string;
  statusText: string;
  pinData?: IPinData; // Optional property
}

export interface IOrderHistory {
  orderId: string;
  beneficiary: string;
  currencyId: string;
  amountOperator: string;
  amountOriginal: string;
  couponCode?: string; // Optional property
  amount: string;
  date: string;
  product: IProduct;
  operator: IOperator;
  paymentInfo: HistoryPaymentInfo;
  status: string;
  statusText: string;
  pinData?: IPinData; // Optional property
}

export interface ICurrency {
  id: string;
  name: string;
}

export interface PhoneNumberCountry {
  alt: string[];
  id: string;
  name: string;
  prefix: string;
  hasLeadingZero: string;
  msisdnLength: MsisdnLength;
  currency: ICurrency;
}

export interface IOperator {
  id: string;
  name: string;
  brandId: string;
  currencyId: string;
  countryId: string;
  logoUrl: string;
}

export interface MobileOperatorDetails {
  id: string;
  name: string;
  brandId: string;
  logoUrl: string;
  fullprefix: string;
  prefix: string;
  number: string;
  prefixnumber: string;
  confidence: number;
  productTypes: string;
}

export interface MsisdnLength {
  min: string;
  max: string;
}

export interface MobileProducts {
  priceType: string;
  id: number;
  name: string;
  type: string;
  typeId: string;
  amount: string;
  currency: string;
  displayAmount: string;
  operatorCurrency: string;
  operatorAmount: string;
  isDiscount: boolean;
  discountAmount: string;
}

export interface IMobileProductsResponse {
  code: number;
  data: MobileProducts;
  message: string;
  timestamp: number;
  errors?: Array<string[]>;
}

export interface ICreateOrderDataResponse {
  code: number;
  data: ICreateOrderData;
  message: string;
  timestamp: number;
}

export interface IProductCategoryResponse {
  code: number;
  data: IProductCategory[];
  message: string;
  timestamp: number;
}

export interface IOperatorResponse {
  code: number;
  data: IOperator[];
  message: string;
  timestamp: number;
}
