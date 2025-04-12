import {IncomeModel} from "../types/IncomeModel";
import {ExpenseModel} from "../types/Expense";

export default function GetBalance(incomes: IncomeModel[] = [], expenses: ExpenseModel[] = []) {
    const validIncomes = incomes.filter((income): income is IncomeModel => income !== null && income !== undefined);
    const validExpenses = expenses.filter((expense): expense is ExpenseModel => expense !== null && expense !== undefined);

    const totalIncome = validIncomes.reduce((acc, income) => acc + income.valor, 0);
    const totalExpense = validExpenses.reduce((acc, expense) => acc + expense.valor, 0);

    return totalIncome - totalExpense;
}
