import Income from "../Income/Income";
import TotalIncome from "../../utils/TotalIncome";
import Expenses from "../Expense/Expenses";
import TotalExpenses from "../../utils/TotalExpenses";
import Balance from "../Balance/Balance";
import "../../styles/Style.css"
import {ExpenseModel} from "../../types/Expense";
import {IncomeModel} from "../../types/IncomeModel";
import GetBalance from "../../utils/Balance";

type BalanceCardsProps = {
    expenses: ExpenseModel[];
    incomes: IncomeModel[];
}

export default function BalanceCardsGrid({expenses, incomes}: BalanceCardsProps) {
    return (
        <div>
            <div className="row justify-content-between grid">
                <Balance balance={GetBalance(incomes, expenses)}/>
                <Income income={TotalIncome(incomes)}/>
                <Expenses expenses={TotalExpenses(expenses)}/>
            </div>
        </div>
    )
}