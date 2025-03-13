import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import moment from "moment";



export function formatNumberWithCommas(number: number): string {
  if (!number) {
    return "0";
  } else return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDateAndRender(data: any): string {
  if (!data) return "";
  if (moment(data, moment.ISO_8601, true).isValid()) {
    return moment(data).format("DD MMM YYYY");
  } else {
    return data;
  }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const actionRoutes = {
  '/followup': 'MANAGE FOLLOW UP',
  '/generate-report': 'GENERATE REPORT',
  '/members': 'MANAGE MEMBERS',
};
export const breadCrumbsObj = {
  followup: 'MANAGE FOLLOW UP',
  'generate-report': 'GENERATE REPORT',
  members: 'MANAGE MEMBERS',
};
