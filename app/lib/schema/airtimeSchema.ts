// export const phoneNumberValidationSchema = object().shape({
//   phoneNumber: string().test(
//     "phone-number",
//     "please enter a valid phone number",
//     function (value?: string) {
//       return phoneNumberRegex.test(value ?? "");
//     }
//   ),
// });

import { string, object } from "yup";
import { optionValidation } from "../validators";

export const phoneNumberRegex =
  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const phoneNumberValidationSchema = object().shape({
  phoneNumber: string().nullable(),
});
export const productCategoryValidationSchema = object().shape({
  categoryId: optionValidation(),
});
export const countryValidationSchema = object().shape({
  country: optionValidation(),
});

export const operatorValidationSchema = object().shape({
  operatorId: optionValidation(),
});
export const couponValidationSchema = object().shape({
  couponCode: string().required("please enter a valid coupon code"),
});
export const billIdValidationSchema = object().shape({
  billId: string().required("please enter a valid bill Id"),
});

export const productValidationSchema = object().shape({
  product: optionValidation(),
});
