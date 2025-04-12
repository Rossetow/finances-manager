import PieChartComponent from "../PieChart/PieChart";
import {FinanceData} from "../../types/FinanceData";
import ExpensesByCategory from "../ExpensesByCategory/ExpensesByCategory";
import GetFinanceData from "../../services/GetFinanceData";
import {ExpenseModel} from "../../types/Expense";
import {IncomeModel} from "../../types/IncomeModel";

type BalanceCardsProps = {
    expenses: ExpenseModel[];
    incomes: IncomeModel[];
}

export default function ChartCard({ expenses, incomes}: BalanceCardsProps) {
    return (
        <div>
            <div>
                <PieChartComponent data={GetFinanceData(expenses, incomes)} />
            </div>
            <article>
                <ExpensesByCategory data={GetFinanceData(expenses, incomes)} />
            </article>
        </div>
    )
}