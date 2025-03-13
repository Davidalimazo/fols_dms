import {type UnknownObjectType } from "~/interfaces/layout_interface";

export const ErrorHandler = async (error: any) => {
  //Network error
  if (typeof window !== "undefined" && !window.navigator.onLine) {
  }

  const originalRequest = error?.config;
  let status = error?.status;

  let message = "";
  const defaultMessage = "Something went wrong, please try again.";

  if (error?.data) {
    if (status >= 500 && status < 600) {
      return Promise.reject(error);
    }
    if (status.toString().startsWith("4")) {
      if (status === 404) {
        message = error.data.error;
        return { message, status };
      } else {
        let errorToReturn = "";
        if (typeof error === "string") {
          errorToReturn = error;
        }  else {
          errorToReturn = error?.data?.error || defaultMessage;
        }
        return Promise.reject(errorToReturn);
      }
    }
  } else {
    message = error?.error || defaultMessage;
  }
  return { message };
};

export const isHttpNotFound = (error: any) =>
  error?.status?.toString() === "404";
