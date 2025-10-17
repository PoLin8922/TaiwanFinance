// Frontend specific types
import type { 
  LedgerEntry, 
  BudgetCategory, 
  SavingsJar, 
  BudgetItem,
  Budget,
  SavingsJarCategory,
  SavingsJarDeposit
} from '@/shared/schema';

export interface LedgerEntryWithNote extends Omit<LedgerEntry, 'note'> {
  note?: string;
}

export interface ExtendedBudgetCategory extends Omit<BudgetCategory, 'type'> {
  type: "fixed" | "extra";
  color: string;
}

export interface ExtendedBudgetItem extends BudgetItem {
  type: "fixed_income" | "fixed_expense" | "extra_income";
  isAutoCalculated: "true" | "false";
}

export interface ExtendedBudget extends Budget {
  fixedIncome: string;
  fixedExpense: string;
  extraIncome: string;
}

export interface ExtendedSavingsJar extends SavingsJar {
  includeInDisposable: "true" | "false";
  currentAmount: string;
}

export interface ExtendedSavingsJarCategory extends SavingsJarCategory {
  percentage: number;
  color: string;
}

export interface ExtendedSavingsJarDeposit extends SavingsJarDeposit {
  depositDate: string;
  accountId?: string;
  note?: string;
}

export interface ChartDataInput {
  [key: string]: string | number;
}

export interface CategoryData {
  name: string;
  amount: number;
  color: string;
  [key: string]: string | number;
}