import type { BudgetCategory, SavingsJarCategory } from "@/shared/schema";

export interface ExtendedSavingsJarCategory extends SavingsJarCategory {
  percentage: number;
}

export interface ExtendedBudgetCategory extends Omit<BudgetCategory, 'type'> {
  type: "fixed" | "extra";
}