import formatCurrency from "../../utils/FormatCurrency";
import "../../styles/Style.css"

type ExpensesProps = {
    expenses: number;
}
export default function Expenses({expenses}: ExpensesProps) {

    return (
        <div className="col cards shadow-sm rounded-4">
            <h6 className="text-muted mb-2">Gastos</h6>

            <p className="display-6 fw-bold text-dark text-primary mb-0">
                {formatCurrency(expenses)}
            </p>
        </div>
    )
}