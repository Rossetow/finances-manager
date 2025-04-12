import {ExpenseModel} from "../types/Expense";

export default function FilterExpensesByDate(expenses: ExpenseModel[], days: number) {
    if (days === 0) return expenses; // sem filtro
    if (expenses.length === 0) return [];

    const now = new Date();
    const cutoffDate = new Date(now);
    cutoffDate.setDate(now.getDate() - days);

    return expenses
        .filter((expense): expense is ExpenseModel => expense !== null && expense !== undefined)
        .filter(exp => new Date(exp.data) >= cutoffDate);
}