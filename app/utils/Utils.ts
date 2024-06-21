import currencySigns from "@/app/assets/currency_signs.json";
import axios from "axios";
import RNFS from "react-native-fs";
import { Currency } from "./Interfaces";

export const updateCurrencies = async (): Promise<Currency[]> => {
  const path = `${RNFS.DocumentDirectoryPath}/all_currencies.json`;
  try {
    const content = await RNFS.readFile(path, "utf8");
    const currencies = JSON.parse(content);

    if (!isToday(currencies.exchangedate)) {
      const newCurrencies = await getCurrencies();
      await RNFS.writeFile(path, JSON.stringify(newCurrencies), "utf8");
      return newCurrencies.currecies;
    } else {
      return currencies.currencies;
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      const newCurrencies = await getCurrencies();
      await RNFS.writeFile(path, JSON.stringify(newCurrencies), "utf8");
      return newCurrencies.currecies;
    } else return [];
  }
};

const isToday = (dateString: string) => {
  const [day, month, year] = dateString.split(".");
  const today = new Date();

  return (
    today.getDate() === parseInt(day) &&
    today.getMonth() === parseInt(month) &&
    today.getFullYear() === parseInt(year)
  );
};

const getCurrencies = async () => {
  const res = await axios.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );

  const currencies = res.data.map(
    (c: { cc: string; rate: number; txt: string }) => ({
      cc: c.cc,
      rate: c.rate,
      txt: c.txt,
    })
  );
  currencies.push({ cc: "UAH", rate: 1, txt: "Українська гривня" });

  const fileContent = {
    exchangedate: res.data[0].exchangedate,
    currecies: currencies,
  };

  return fileContent;
};

export const convertNumberToMoney = (
  amountOfMoneyInUAH: number,
  currency: string,
  currencies: Currency[]
) => {
  const rate = currencies.find(
    (c) => c.cc.toUpperCase() === currency.toUpperCase()
  ).rate;

  if (!currencySigns[currency]) {
    console.log("WARNING: no currency sign for this currency was found");
  }

  return `${currencySigns[currency] || ""} ${(amountOfMoneyInUAH / rate)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
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

export const convertNumberToWeekDay = (num: number, short: boolean = true) => {
  if (num < 0 || num > 7) {
    console.log("ERROR: wrong number to convert to week day");
    return "";
  }

  var weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return weekDays[num].slice(0, short ? 3 : weekDays[num].length);
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
