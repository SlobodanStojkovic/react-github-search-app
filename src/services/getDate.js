export const getDate = (date) => {
  let result = new Date(date);
  let day = result.getDate();
  let month = result.getMonth() + 1;
  let year = result.getFullYear();
  result = `${day}.${month}.${year}`;
  return result;
};
