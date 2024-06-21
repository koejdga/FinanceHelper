export interface Account {
  id: string;
  name: string;
  balance: number;
}

export interface Transaction {
  id: string;
  fullDate: Date;
  category: string;
  amount: number;
  account: string;
  type: string;
  note: string;
}

export interface Category {
  id: string;
  categoryName: string;
  currentExpense?: number;
  limit?: number;
  percentageSpent?: number;
}

export interface MonthSummary {
  expenseTotal: number;
  incomeTotal: number;
  month: number;
}

export interface Currency {
  cc: string;
  rate: number;
  txt: string;
}

export enum ReportFormats {
  PDF = "PDF",
  CSV = "CSV",
  XLSX = "XLSX",
}
