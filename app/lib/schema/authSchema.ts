import { string, bool, object } from "yup";
import {
  defaultValidation,
  emailValidation,
  optionValidation,
  passwordValidation,
} from "../validators";

export const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,20}$/;
export const phoneNumberRegex = /^[1-9]\d{1,14}$/;

export const loginFormValidationSchema = object().shape({
  email: emailValidation(),
  password: passwordValidation(),
});
export const updatePasswordValidationSchema = object().shape({
  password: passwordValidation(),
  confirmPassword: passwordValidation(),
});

export const supportFormValidationSchema = object().shape({
  email: emailValidation(),
  name: string().required("Name is required"),
  subject: string().required("Subject is required"),
  message: string().required("Message is required"),
  reference: string().required("Reference is required"),
});

export const changePasswordFormValidationSchema = object().shape({
  currentPassword: string()
    .test(
      "old-password",
      "password must contain at least one upper case, lower case, number and special character",
      function (value?: string) {
        return passwordRegex.test(value ?? "");
      }
    )
    .required("Old Password is required"),
  newPassword: string()
    .test(
      "-newpassword",
      "password must contain at least one upper case, lower case, number and special character",
      function (value?: string) {
        return passwordRegex.test(value ?? "");
      }
    )
    .required("New Password is required"),
  confirmNewPassword: string(),
});

export const registerFormValidationSchema = object().shape({
  firstname: defaultValidation("First Name"),
  lastname: defaultValidation("Last Name"),
  email: emailValidation(),
  currencyId: optionValidation(),
  password: passwordValidation(),
  newsletter: bool(),
  phone: string()
    .test(
      "phone-number",
      "please enter a valid phone number",
      function (value?: string) {
        return phoneNumberRegex.test(value ?? "");
      }
    )
    .required("Phone number is required"),
});

// service_token: token ?? '',
// service: socialType,
// email: _user.email ?? '',
// currencyId: currencyController.text.trim(),
// firstname: firstNameController.text.trim(),
// lastname: lastNameController.text.trim(),
// newsletter: wantNewsLetter,
// phone: dialCode + phoneNumberController.text.trim()

export const socialRegisterFormValidationSchema = object().shape({
  firstname: defaultValidation("First Name"),
  lastname: defaultValidation("Last Name"),
  currencyId: optionValidation(),
  newsletter: bool(),
  phone: string()
    .test(
      "phone-number",
      "please enter a valid phone number",
      function (value?: string) {
        return phoneNumberRegex.test(value ?? "");
      }
    )
    .required("Phone number is required"),
});

export const forgotPasswordFormValidationSchema = object().shape({
  email: emailValidation(),
});

export const resetPasswordFormValidationSchema = object().shape({
  password: passwordValidation(),
  confirmPassword: string()
    .test(
      "password-match",
      "Password and Confirm Password must match",
      function (value?: string) {
        return this.parent.password === value;
      }
    )
    .required("Confirm Password is required"),
});

export const setPasswordFormValidationSchema = object().shape({
  defaultPassword: passwordValidation(),
  password: passwordValidation(),
  confirmPassword: string()
    .test(
      "password-match",
      "password must contain at least one upper case, lower case, number and special character",
      function (value?: string) {
        return this.parent.password === value;
      }
    )
    .required("Confirm Password is required"),
});
