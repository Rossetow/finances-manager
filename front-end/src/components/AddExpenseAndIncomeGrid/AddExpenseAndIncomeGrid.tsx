import AddIncome from "../AddIncome/AddIncome";
import AddExpense from "../AddExpense/AddExpense";
import "../../styles/Style.css"


export default function AddExpenseAndIncomeGrid() {

    return (
        <div>
            <div className="row justify-content-between grid">
                <div className="col align-content-end justify-content-center">
                    <h1 className="col ">
                        Gastos por categoria
                    </h1>
                </div>
                <AddIncome />
                <AddExpense />
            </div>

        </div>
    )
}

