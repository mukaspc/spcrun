export const transformDate = (date: string | Date | undefined): string => {
  if (typeof date === 'undefined') return '';

  let newDate = '';
  const dateObject = new Date(date);

  newDate = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
  return newDate;
};
