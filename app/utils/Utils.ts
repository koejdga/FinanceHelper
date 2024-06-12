export const convertNumberToMoney = (amountOfMoney: number) => {
  return (
    "₴ " +
    amountOfMoney
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  );
};

export const convertNumberToMonthName = (num: number) => {
  if (num < 0 || num > 11) {
    console.log("ERROR: wrong number to convert to month name");
    return "";
  }

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[num];
};

export const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
