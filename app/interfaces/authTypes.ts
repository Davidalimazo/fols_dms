

export interface ILoginFormPayload {
  email: string;
  password: string;
}
export interface IUpdatePasswordPayload {
  password: string;
  confirmPassword: string;
}
export interface ISocialLoginFormPayload {
  email: string;
  service_token: string;
  service: string;
  name: string;
}

export interface IRegisterFormPayload {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  currencyId: string;
  phone: string;
  newsletter?: boolean;
}

export interface ISocialRegisterFormPayload {
  email?: string;
  firstname: string;
  lastname: string;
  currencyId: string;
  phone: string;
  newsletter?: boolean;
  service_token?: boolean;
  service?: string;
}

export interface IUser {
  customerId: string;
  status: string;
  email: string;
  token: IAccessToken;
  firstname: string;
  lastname: string;
  phone: string;
  newsletter: boolean;
  balance: number;
  walletAvailable: boolean;
  currency: string;
  temporaryPassword: boolean;
}

export interface IUserDetails extends Omit<IUser, "token"> {}

export interface IChangePasswordFormPayload {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword?: string;
}
export interface IChangePasswordFormPayloadApi {
  payload: IChangePasswordFormPayload;
  userId: string;
}

export interface DefaultResponse {
  code: number;
  message: string;
  timestamp: number;
  errors?: Array<string[]>;
}
export interface ILoginResponse extends DefaultResponse {
  data: IUser;
}

export interface IAccessToken {
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
  timestamp: number;
}

export interface ICountry {
  code: string;
  name: string;
  prefix: string;
  flagUrl: string;
}
export interface ICurrency {
  name: string;
  id: string;
}

export interface ISignupResponse extends DefaultResponse {
  data: ISignupModel;
}
export interface IGetMembersResponse {
  data: IMember[];
}
export interface IGetFollowUpResponse {
  data: IFollowUp[];
}

export interface ISignupModel {
  customerId: number;
  status: string;
}

export interface ISupport {
  name: string;
  subject: string;
  email: string;
  message: string;
  reference: string;
}

export interface ISupportResponse extends DefaultResponse {
  data: { status: string };
}
export interface IUpdatePasswordResponse extends DefaultResponse {
  data: { updated: boolean };
}

export abstract class AuthStatus {
  static BARRED = "0";
  static PENDING = "1";
  static ACTIVE = "3";
  static DELETED = "4";
}

export abstract class StoreIds {
  static TOKEN = "token";
  static USERDETAILS = "userDetails";
  static SOCIALLOGIN = "socialLogin";
}

export abstract class SocialType {
  static GOOGLE = "google";
  static APPLE = "apple";
  static FACEBOOK = "facebook";
}

export interface IMember {
  id?: number;
  title?: string;
  first_name?: string;
  surname?: string;
  others?: string;
  gender?: "MALE" | "FEMALE";
  dob?: string; // ISO date string
  address_home?: string;
  nearest_busstop?: string;
  city?: string;
  state?: string;
  nationality?: string;
  state_of_origin?: string;
  lga?: string;
  phone?: string;
  phone_whatsapp?: string;
  email?: string;
  social_handle?: string;
  nin?: string;
  marital_status?: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
  occupation?: string;
  industry?: string;
  office_address?: string;
  natural_group?: string;
  volunteer_service_area?: string;
  born_again_date?: string; // ISO date string
  born_again_location?: string;
  born_again_testimony?: string; // ISO date string
  water_baptism?: boolean;
  wants_baptism_program?: boolean;
  believers_class?: boolean;
  holy_spirit_baptism?: boolean;
  workers_training?: boolean;
  worker_status?: boolean;
  ministry_primary?: string;
  highest_Qualification?: string;
  ministry_secondary?: string;
  ministry_tertiary?: string | null;
  ordination_status?: string;
  ordination_category?: string;
  ordination_certificate?: string;
  parish?: string;
  area?: string;
  zone?: string;
  province?: string;
  region?: string;
  created_at?: string; // ISO date string
  updated_at?: string; // ISO date string
}

export interface IFollowUp {
  id?: number;
  title?: string;
  first_name?: string;
  surname?: string;
  others?: string;
  gender?: "MALE" | "FEMALE";
  dob?: string; // ISO date string
  address_home?: string;
  nearest_busstop?: string;
  city?: string;
  state?: string;
  nationality?: string;
  state_of_origin?: string;
  lga?: string;
  phone?: string;
  phone_whatsapp?: string;
  email?: string;
  social_handle?: string;
  marital_status?: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
  occupation?: string;
  industry?: string;
  office_address?: string;
  natural_group?: string;
  volunteer_service_area?: string;
  born_again_date?: string; // ISO date string
  born_again_location?: string;
  born_again_testimony?: string; // ISO date string
  wants_believers_class?: boolean;
  is_new_convert?: boolean;
  wants_visitation?: boolean;
  workers_training?: boolean;
  worker_status?: boolean;
  highest_Qualification?: string;
  parish?: string;
  area?: string;
  zone?: string;
  province?: string;
  region?: string;
  created_at?: string; // ISO date string
  updated_at?: string; // ISO date string
}
