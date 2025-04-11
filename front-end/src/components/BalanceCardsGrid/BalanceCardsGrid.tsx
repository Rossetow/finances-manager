import Income from "../Income/Income";
import TotalIncome from "../../Utils/TotalIncome";
import Expenses from "../Expense/Expenses";
import TotalExpenses from "../../Utils/TotalExpenses";
import Balance from "../Balance/Balance";
import Budget from "../../Utils/Budget";
import "../../styles/Style.css"

export default function BalanceCardsGrid() {
    return (
        <div>
            <div className="row justify-content-between grid">
                    <Balance balance={Budget()} />
                    <Income income={TotalIncome()} />
                    <Expenses expenses={TotalExpenses()} />
            </div>
        </div>
    )
}