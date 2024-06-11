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
