import { z } from 'zod';

// Common types shared between frontend and backend
export interface AssetAccount {
  id: string;
  name: string;
  type: string;
  balance: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  currency: string;
  category: string;
  description?: string;
  date: string;
}

export interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: string;
}

export interface SavingsJar {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  currency: string;
  deadline?: string;
}

// Schema validation
export const assetAccountSchema = {
  id: z.string(),
  name: z.string().min(1),
  type: z.string(),
  balance: z.number(),
  currency: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
};