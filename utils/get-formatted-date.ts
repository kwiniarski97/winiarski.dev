export const getFormattedDate = (date: string | number | Date) => {
  return new Date(date).toLocaleDateString();
};
