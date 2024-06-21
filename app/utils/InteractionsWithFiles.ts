import * as Sharing from "expo-sharing";
import Handlebars from "handlebars";
import Papa from "papaparse";
import { Platform } from "react-native";
import RNFS from "react-native-fs";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import Share from "react-native-share";
import XLSX from "xlsx";
import { ReportFormats } from "./Interfaces";
import { convertNumberToMonthName } from "./Utils";
import { getAllTransactions } from "./server-communication/TransactionRequests";

const REPORT_FILENAME = "transactions";

export const shareReport = async (
  format: ReportFormats,
  month: number,
  year: number
) => {
  const reportFilePath = await generateReport(format, month, year);

  if (!reportFilePath) {
    console.log("Report file path is undefined");
  }

  switch (format) {
    case ReportFormats.CSV:
      await shareCSV(reportFilePath);
      break;
    case ReportFormats.XLSX:
      await shareXLSX(reportFilePath);
      break;
    case ReportFormats.PDF:
      await sharePDF(reportFilePath);
      break;
  }
};

const generateReport = async (
  format: ReportFormats,
  month: number,
  year: number
) => {
  const transactionsInfo = await getAllTransactions(month, year);
  const transactions = transactionsInfo.transactions.map((t) => ({
    date: new Date(t.fullDate).toLocaleDateString("uk-UA"),
    category: t.category,
    amount: t.amount.toString(),
    account: t.account,
    type: t.type,
    note: t.note,
  }));

  let path: string;
  switch (format) {
    case ReportFormats.CSV:
      path = await generateCSV(transactions);
      break;
    case ReportFormats.XLSX:
      path = await generateXLSX(transactions);
      break;
    case ReportFormats.PDF:
      path = await generatePDF(
        {
          amountIncome: transactionsInfo.amountIncome,
          amountExpense: transactionsInfo.amountExpense,
          total: transactionsInfo.total,
          transactions: transactions,
        },
        month,
        year
      );
      break;
  }
  return path;
};

const generateCSV = async (transactions) => {
  const csv = Papa.unparse(transactions);
  const path = `${RNFS.DocumentDirectoryPath}/${REPORT_FILENAME}.csv`;

  try {
    await RNFS.writeFile(path, csv, "utf8");
    console.log("CSV file written to:", path);
    return path;
  } catch (error) {
    console.log("Error writing CSV file:", error);
  }
};

const shareCSV = async (filePath: string) => {
  if (!filePath) {
    console.log("no file path");
    return;
  }

  const options = {
    title: "Share CSV File",
    url: `file://${filePath}`,
    type: "text/csv",
  };

  try {
    await Share.open(options);
    console.log("File shared successfully!");
  } catch (error) {
    console.log("Error sharing file:", error);
  }
};

const generateXLSX = async (transactions) => {
  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(transactions);
  XLSX.utils.book_append_sheet(wb, ws, "Users");
  const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

  const path = `${RNFS.DocumentDirectoryPath}/${REPORT_FILENAME}.xlsx`;

  try {
    await RNFS.writeFile(path, wbout, "ascii"); // TODO: change to utf-8 maybe
    console.log("XLSX file written to:", path);
    return path;
  } catch (error) {
    console.log("Error writing XLSX file:", error);
  }
};

const shareXLSX = async (filePath: string) => {
  Sharing.shareAsync(filePath, {
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Android
    dialogTitle: "Your dialog title here", // Android and Web
    UTI: "com.microsoft.excel.xlsx", // iOS
  })
    .catch((error) => {
      console.error("Error while sharing XLSX report:", error);
    })
    .then(() => {
      console.log("Shared XLSX report successfully");
    });
};

const templateSourcePDF = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transaction Report</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { width: 80%; margin: auto; }
    h1, h2, h3 { text-align: center; }
    .summary { margin-bottom: 20px; }
    .table-container { width: 100%; border-collapse: collapse; }
    .table-container th, .table-container td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    .table-container th { background-color: #f2f2f2; }
    .separator { height: 1px; background-color: #ccc; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Transaction Report</h1>
    <h2>{{month}} {{year}}</h2>
    <div class="summary">
      <h3>Summary</h3>
      <p><strong>Income:</strong> {{amountIncome}}</p>
      <p><strong>Expense:</strong> {{amountExpense}}</p>
      <p><strong>Total:</strong> {{total}}</p>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Account</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {{#each transactions}}
          <tr>
            <td>{{this.date}}</td>
            <td>{{this.category}}</td>
            <td>{{this.amount}}</td>
            <td>{{this.account}}</td>
            <td>{{this.type}}</td>
            <td>{{this.note}}</td>
          </tr>
          {{#if isNewDay}}
          <tr>
            <td colspan="7" class="separator"></td>
          </tr>
          <tr>
            <td colspan="7">
              <strong>{{this.date}} {{this.dayOfWeek}}</strong>
              <p><strong>Total Income:</strong> {{this.dailyTotalIncome}}</p>
              <p><strong>Total Expense:</strong> {{this.dailyTotalExpense}}</p>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="separator"></td>
          </tr>
          {{/if}}
          {{/each}}
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>
`;

const generatePDF = async (transactionsInfo, month, year) => {
  try {
    const result = {
      month: convertNumberToMonthName(month),
      year: year,
      amountIncome: transactionsInfo.amountIncome,
      amountExpense: transactionsInfo.amountExpense,
      total: transactionsInfo.total,
      transactions: transactionsInfo.transactions.map(
        (t, index, transactions) => ({
          ...t,
          isNewDay:
            index === 0 ||
            new Date(t.date).getDate() !==
              new Date(transactions[index - 1].date).getDate(),
          dailyTotalIncome: transactions
            .filter(
              (tx) =>
                new Date(tx.date).getDate() === new Date(t.date).getDate() &&
                tx.type === "income"
            )
            .reduce((a, b) => a + b.amount, 0),
          dailyTotalExpense: transactions
            .filter(
              (tx) =>
                new Date(tx.date).getDate() === new Date(t.date).getDate() &&
                tx.type === "expense"
            )
            .reduce((a, b) => a + b.amount, 0),
        })
      ),
    };

    const template = Handlebars.compile(templateSourcePDF);
    const html = template(result);

    let PDFOptions = {
      html: html,
      fileName: "file",
      directory: Platform.OS === "android" ? "Downloads" : "Documents",
    };

    let file = await RNHTMLtoPDF.convert(PDFOptions);
    return file.filePath;
  } catch (error) {
    console.log("Failed to generate pdf", error.message);
  }
};

const sharePDF = async (filePath: string) => {
  const shareOptions = {
    title: "Share PDF",
    url: `file://${filePath}`,
    type: "application/pdf",
  };

  Share.open(shareOptions)
    .then((res) => {
      console.log("Shared PDF report successfully:", res);
    })
    .catch((err) => {
      if (err && err.message) {
        console.log("Error while sharing PDF report:", err.message);
      }
    });
};
