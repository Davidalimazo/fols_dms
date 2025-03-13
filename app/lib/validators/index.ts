import { string } from 'yup';

import { isValidPhoneNumber } from 'react-phone-number-input';
import {
  containsAtLeastOneSpecialChar,
  containsAtleastOneLowerCase,
  containsAtleastOneNumber,
  containsAtleastOneUpperCase,
} from '../helpers';
import { MINIMUM_PASSWORD_LENGTH } from '../constants';


const urlRegex =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const phoneRegExp = /^(\+?234)?(\d{2})\s?\d{3}\s?\d{4}$/;

export const defaultValidation = (name: string) => string().required(`${name} is required`);

export const phoneValidation = (phoneNumber: string) =>
  string()
    .matches(/^(\+?234)?(\d{3})\s?\d{3}\s?\d{4}$/, 'Enter valid phone number')
    .required(`${phoneNumber} is required`);

export const optionValidation = (msg?: string) => string().required(msg || 'Select an option');

export const urlValidation = (path: string, required = true) =>
  required
    ? string().matches(urlRegex, 'Enter valid url!').required(`${path} is required`)
    : string().test({
        test: function (value: any) {
          if (!value) return true;
          return !urlRegex?.test(value)
            ? this.createError({
                message: 'Invalid Url',
                path,
              })
            : true;
        },
      });

export const emailValidation = () =>
  string().email('Invalid email address').required('Email address is required');

export const passwordValidation = (path = 'password') =>
  string()
    .required('Password is required')
    .min(
      MINIMUM_PASSWORD_LENGTH,
      `Password must not be less than ${MINIMUM_PASSWORD_LENGTH} characters`
    )
    .test({
      test: function (value: any) {
        return !containsAtLeastOneSpecialChar(value)
          ? this.createError({
              message: 'Password must contain at least one special character',
              path,
            })
          : true;
      },
    })
    .test({
      test: function (value: any) {
        return !containsAtleastOneUpperCase(value)
          ? this.createError({
              message: 'Password must contain at least upper case letter',
              path,
            })
          : true;
      },
    })
    .test({
      test: function (value: any) {
        return !containsAtleastOneLowerCase(value)
          ? this.createError({
              message: 'Password must contain at least lower case letter',
              path,
            })
          : true;
      },
    })
    .test({
      test: function (value: any) {
        return !containsAtleastOneNumber(value)
          ? this.createError({
              message: 'Password must contain at least one number',
              path,
            })
          : true;
      },
    });

export const bvnValidation = () =>
  string()
    .required('BVN is required')
    .min(11, 'Must be 11 digits')
    .max(11, 'Must be 11 digits');

export const phoneNumberValidation = () =>
  string()
    .test('phone-number-validate', 'Enter a valid phone number', function (value?: string) {
      if (!value) return false;

      return isValidPhoneNumber(value);
    })
    .required('Phone Number is required');
