// Frontend specific types
import type { LedgerEntry, BudgetCategory, SavingsJar } from '@/shared/schema';

export interface LedgerEntryWithNote extends Omit<LedgerEntry, 'note'> {
  note?: string;
}

export interface ExtendedBudgetCategory extends Omit<BudgetCategory, 'type'> {
  type: "fixed" | "extra";
}

export interface SavingsJarWithDisposable extends SavingsJar {
  includeInDisposable: "true" | "false";
}