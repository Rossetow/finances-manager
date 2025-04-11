import {ExpenseModel} from "../types/Expense";
import {FinanceData} from "../types/FinanceData";

export default function GetFinanceData(expenses: ExpenseModel[], budget:number) {

    var categories:string[] = []

    console.log(expenses)

    expenses.forEach((expense: ExpenseModel) => {
        if(!categories.includes(expense.categoria)) {
            categories.push(expense.categoria)
        }
    })

    var expenseByCategory:Map<String, number> = new Map()

    expenses.forEach((expense: ExpenseModel) => {
        if(!expenseByCategory.has(expense.categoria)) {
            expenseByCategory.set(expense.categoria, expense.valor )
        } else {
            expenseByCategory.set(expense.categoria, expenseByCategory.get(expense.categoria)! + expense.valor)
        }
    })

    var financeData: FinanceData[] = []

    var totalExpense = 0

    expenseByCategory.forEach((value, key) => {
        financeData.push({
            id: financeData.length + 1,
            label: key.toString(),
            value: value,
            percentage: value / budget * 100
        })
        totalExpense += value
    })
    financeData.push({
        id: financeData.length + 1,
        label: "restante do orçamento",
        value: budget - totalExpense,
        percentage: (budget - totalExpense) / budget * 100
    })

    return financeData
}