import formatCurrency from "../../Utils/FormatCurrency";

type ExpensesProps = {
    expenses: number;
}
export default function Expenses({ expenses }: ExpensesProps) {

    return (
        <div>
            <h4 className="text-sm text-gray-400 mb-4">
                Gastos
            </h4>
            <p className="text-xl font-bold mb-4">{formatCurrency(expenses)}</p>
        </div>
    )
}