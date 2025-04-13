import {ExpenseModel} from "../types/Expense";

export default function TotalExpenses(expenses: ExpenseModel[]) {
    let totalExpense = 0

    expenses.forEach(expense => {
        totalExpense += expense.valor
    })
    return totalExpense
}