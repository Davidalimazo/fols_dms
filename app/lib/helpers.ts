import {
 type UnknownObjectType,
 type sortOrderType,
} from "~/interfaces/layout_interface";
import moment from "moment";
import { sortOrder } from "./enums";
import { truncateText } from "./formatters";
import { ENCRYPTIONKEY } from "~/services/api/authApi";
import { decryptJson } from "./security";


export const containsAtleastOneUpperCase = (val: string) =>
  /(?=.*?[A-Z])/.test(val);

export const containsAtleastOneLowerCase = (val: string) =>
  val ? /(?=.*?[a-z])/.test(val) : false;

export const containsAtleastOneNumber = (val: string) =>
  /(?=.*[0-9])/.test(val);

export const containsAtLeastOneSpecialChar = (val: string) =>
  /(?=.*[$&+,:;=?@#|'<>.^*_()%!-])/.test(val);

export const isEven = (number: number) => (number ? number % 2 === 0 : false);

export const isOdd = (number: number) => number % 2 !== 0;

export const isNonEmptyObject = (obj: UnknownObjectType) => {
  return typeof obj === "object" && obj !== null && Object.keys(obj).length > 0;
};

// User Can select services if:
// 1. Account has been verified
// 2. has created a business

// User Can Activate business if:
// 1. Account has been verified
// 2. has created a business
// 3. has selected services
// 4. business has not been enabled

export const processTIN = (tin: string | undefined): string | undefined => {
  if (tin) {
    if (tin.startsWith("N-")) {
      return tin;
    }
    return `N-${tin}`;
  }
  return undefined;
};

// export const getAccessToken = (): IAccessToken | undefined | null => {
//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("token")) {
//       try {
//         const data: any = decryptJson({
//           encryptedText: localStorage.getItem("token") ?? "",
//           secret: ENCRYPTIONKEY,
//         });
//         return data;
//       } catch (error) {
//         return undefined;
//       }
//     }
//   }
// };

export const removeEmpty = (data: any) => {
  for (let i in data) {
    if (data[i] == "") {
      delete data[i];
    }
  }
  return data;
};

export function containsDate(input: string): boolean {
  const searchTerm = "date";

  // Check if the input string contains the word 'date' (case-insensitive)
  return input.toLowerCase().includes(searchTerm);
}

export const capitalizeFirstLetter = (str: string | undefined) => {
  if (str !== undefined) {
    const firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
  }
  return null;
};
export function formatNumberWithCommas(number: number): string {
  if (!number) {
    return "0";
  } else return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function responseMessage(statusCode: number): string {
  const errorMessages: { [key: number]: string } = {
    400: "user with provided email already exist",
    401: "Authentication is required and has failed or has not been provided.",
    403: "he request is understood, but it has been refused or access is not allowed.",
    404: "The requested resource could not be found on the server.",
    500: "An unexpected condition prevented the server from fulfilling the request.",
    200: "success",
    201: "success",
    // Add more status codes and corresponding messages as needed
  };

  // Check if the status code is in the dictionary, and return the corresponding message.
  if (statusCode in errorMessages) {
    return errorMessages[statusCode];
  } else {
    return "The server returned an unrecognized status code.";
  }
}

export const getAvatarLetter = (str: string | undefined) => {
  if (str !== undefined && str.length > 0) {
    const firstLetter = str[0].toUpperCase();
    return firstLetter;
  }
  return "";
};

export function isFutureTimestamp(timestamp: number): boolean {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
  return timestamp > currentTimestamp;
}

// export const getCustomer = (): IUserDetails | undefined | null => {
//   if (typeof window !== "undefined") {
//     if (localStorage.getItem("userDetails")) {
//       try {
//         const data: any = decryptJson({
//           encryptedText: localStorage.getItem("userDetails") ?? "",
//           secret: ENCRYPTIONKEY,
//         });
//         return data;
//       } catch (error) {
//         return undefined;
//       }
//     }
//   }
// };



export function subtractStrings({
  amount,
  discount,
}: {
  amount: string;
  discount: string;
}): number {
  // Convert the string parameters to numbers
  const num1 = parseFloat(amount);
  const num2 = parseFloat(discount);

  // Check for NaN (not a number) and handle it appropriately
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input: Please provide valid numeric strings.");
  }

  // Return the result of the subtraction
  return num1 - num2;
}


export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userDetails");

  window.location.href = "/";
};

export const getKeyByValue = (
  enumObj: any,
  value: number
): string | undefined => {
  return Object.keys(enumObj).find((key) => enumObj[key] === value);
};

export const sortArrayObjAscDesc = (
  array?: UnknownObjectType[],
  propertyToFilterBy?: string,
  order: sortOrderType = sortOrder.desc
) => {
  if (!Array.isArray(array) || !propertyToFilterBy) return [];

  if (order === "desc")
    return array.slice().sort((a, b) => {
      if (typeof b[propertyToFilterBy] === "number")
        return b[propertyToFilterBy] - a[propertyToFilterBy];
      return b[propertyToFilterBy].localeCompare(a[propertyToFilterBy]);
    });

  return array.slice().sort((a, b) => {
    if (typeof b[propertyToFilterBy] === "number")
      return a[propertyToFilterBy] - b[propertyToFilterBy];
    return a[propertyToFilterBy].localeCompare(b[propertyToFilterBy]);
  });
};

export const sortArrayObjAscDescByDate = (
  array: UnknownObjectType[],
  propertyToFilterBy: string,
  order: sortOrderType = sortOrder.asc
) => {
  if (!Array.isArray(array) || !propertyToFilterBy) return [];

  if (order === "asc") {
    return array
      .slice()
      .sort((a, b) =>
        moment(a[propertyToFilterBy]).isBefore(b[propertyToFilterBy]) ? -1 : 1
      );
  }

  return array
    .slice()
    .sort((a, b) =>
      moment(b[propertyToFilterBy]).isBefore(a[propertyToFilterBy]) ? -1 : 1
    );
};

export const getDocName = (docName?: string, length = 12) => {
  if (!docName || !docName) return "";

  const docArr = docName.split("/");
  return truncateText(docArr[docArr?.length - 1], length);
};
