import {ExpenseModel} from "../types/Expense";
import {FinanceData} from "../types/FinanceData";
import {IncomeModel} from "../types/IncomeModel";
import TotalIncome from "../utils/TotalIncome";

export default function GetFinanceData(expenses: ExpenseModel[], incomes: IncomeModel[]) {
    const categories: string[] = []

    expenses.forEach((expense: ExpenseModel | null) => {
        if (!expense) return;

        if (!categories.includes(expense.categoria) && expense.categoria !== null) {
            categories.push(expense.categoria);
        }
    });

    const expenseByCategory: Map<string, number> = new Map()

    expenses.forEach((expense: ExpenseModel) => {
        if (!expense) return;

        if (!expenseByCategory.has(expense.categoria)) {
            expenseByCategory.set(expense.categoria, expense.valor)
        } else {
            expenseByCategory.set(expense.categoria, expenseByCategory.get(expense.categoria)! + expense.valor)
        }
    })

    const financeData: FinanceData[] = []
    let totalExpense = 0

    const budget: number = TotalIncome(incomes)

    expenseByCategory.forEach((value, key) => {
        financeData.push({
            id: financeData.length + 1,
            label: key.toString(),
            value: value,
            percentage: Math.round(value / budget * 100)
        })
        totalExpense += value
    })
    if (budget - totalExpense > 0) {
        financeData.push({
            id: financeData.length + 1,
            label: "restante do orçamento",
            value: budget - totalExpense,
            percentage: Math.round((budget - totalExpense) / budget * 100)
        })
    }
    return financeData
}