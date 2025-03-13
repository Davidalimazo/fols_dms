import moment from 'moment';

export const capitalizeFirstLetter = (word?: string) => {
  return word ? word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1) : '';
};

export const formatArrayToSentence = (stringArr: string[]) => {
  if (!stringArr?.length) return '';

  return stringArr.join(', ').replace(/, ([^,]*)$/, ' and $1.');
};

export const formatDate = (date: string, isTime = false) => {
  if (!date) return '';
  const parsedDate = moment(date);

  if (isTime) return parsedDate.format('HH:mm A');

  return parsedDate.format('DD/MM/YYYY');
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
