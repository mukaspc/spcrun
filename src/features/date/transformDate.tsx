export const transformDate = (date: string | Date | undefined): string => {
  if (typeof date === 'undefined') return '';

  const dateObject = new Date(date);
  const result = dateObject.toLocaleDateString('en-GB');

  return result;
};
