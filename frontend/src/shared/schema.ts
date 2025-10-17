import { z } from 'zod';

// Types shared between frontend and backend
export interface AssetAccount {
  id: string;
  userId: string;
  type: string;
  accountName: string;
  note?: string;
  balance: string;
  currency: string;
  exchangeRate?: string;
  includeInTotal: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertAssetAccount extends Omit<AssetAccount, 'id' | 'createdAt' | 'updatedAt'> {}

export interface Budget {
  id: string;
  userId: string;
  month: string;
  income: string;
  savings: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertBudget extends Omit<Budget, 'id' | 'createdAt' | 'updatedAt'> {}

export interface BudgetCategory {
  id: string;
  budgetId: string;
  name: string;
  amount: string;
  percentage: number;
  type: "expense" | "savings";
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertBudgetCategory extends Omit<BudgetCategory, 'id' | 'createdAt' | 'updatedAt'> {}

export interface BudgetItem {
  id: string;
  budgetId: string;
  categoryId: string;
  name: string;
  amount: string;
  isAutoCalculated?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertBudgetItem extends Omit<BudgetItem, 'id' | 'createdAt' | 'updatedAt'> {}

export interface LedgerEntry {
  id: string;
  userId: string;
  type: "income" | "expense" | "transfer";
  amount: string;
  description: string;
  date: string;
  accountId: string;
  category: string;
  toAccountId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertLedgerEntry extends Omit<LedgerEntry, 'id' | 'createdAt' | 'updatedAt'> {}

export interface SavingsJar {
  id: string;
  userId: string;
  name: string;
  targetAmount: string;
  currentAmount: string;
  category: string;
  dueDate?: string;
  note?: string;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertSavingsJar extends Omit<SavingsJar, 'id' | 'currentAmount' | 'createdAt' | 'updatedAt'> {}

export interface SavingsJarCategory {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertSavingsJarCategory extends Omit<SavingsJarCategory, 'id' | 'createdAt' | 'updatedAt'> {}

export interface SavingsJarDeposit {
  id: string;
  jarId: string;
  amount: string;
  description?: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InsertSavingsJarDeposit extends Omit<SavingsJarDeposit, 'id' | 'createdAt' | 'updatedAt'> {}

export interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profileImageUrl?: string;
  preferredCurrency: string;
  preferredLanguage: string;
  createdAt: Date;
  updatedAt: Date;
}

// Asset type for frontend display
export interface Asset {
  accountId: string;
  bank: string;
  balance: number;
  currency: string;
  exchangeRate: number;
}

export interface AssetType {
  type: string;
  assets: Asset[];
}

// Base interface for types that need color
interface ColoredItem {
  color?: string;
}

// Category type interfaces that extend ColoredItem
export interface BudgetCategory extends ColoredItem {
  id: string;
  budgetId: string;
  name: string;
  amount: string;
  percentage: number;
  type: "expense" | "savings";
  createdAt: Date;
  updatedAt: Date;
}

export interface SavingsJarCategory extends ColoredItem {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Chart data type for frontend charts
export interface ChartData {
  name: string;
  value: number;
  color: string;
}

// Schema validation
export const assetAccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  accountName: z.string().min(1),
  note: z.string().optional(),
  balance: z.string(),
  currency: z.string(),
  exchangeRate: z.string().optional(),
  includeInTotal: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});