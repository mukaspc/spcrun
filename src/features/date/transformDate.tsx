export const transformDate = (date: string | Date): string => {
  let newDate = '';
  const dateObject = new Date(date);

  newDate = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
  return newDate;
};
