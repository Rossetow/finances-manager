import ExpenseTable from "../ExpenseTable/ExpenseTable";
import {ExpenseModel} from "../../types/Expense";
import { useContext} from "react";
import {ExpenseContext} from "../../context/ExpenseContext";

type ExpenseProps = {
    expenses: ExpenseModel[]
}
export default function ExpenseTableComponent({ expenses }: ExpenseProps) {
    return(
        <div className="max-w-4xl mx-auto mt-8 px-4">
            <h2 className="text-2xl font-bold mb-4">Minhas Despesas</h2>

            {expenses.length === 0 ? (
                <p className="text-gray-500">Nenhuma despesa registrada ainda.</p>
            ) : (
                < ExpenseTable expenses={expenses} />
            )}
        </div>
    )
}