import {IncomeModel} from "../types/IncomeModel";
import {ExpenseModel} from "../types/Expense";

export default function FilterIncomesByDate(incomes: IncomeModel[], days: number) {
    if (days === 0) return incomes;
    if (incomes.length === 0) return [];

    const now = new Date();
    const cutoffDate = new Date(now);
    cutoffDate.setDate(now.getDate() - days);

    return incomes
        .filter((income): income is ExpenseModel => income !== null && income !== undefined)
        .filter(income => new Date(income.data) >= cutoffDate);
}