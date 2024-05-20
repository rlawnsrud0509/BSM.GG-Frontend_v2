export const getFormattedClassNumber = (number: number) => {
  return number >= 10 ? "" + number : "0" + number;
};
