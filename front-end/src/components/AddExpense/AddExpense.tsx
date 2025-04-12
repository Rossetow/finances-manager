import {MinusCircle} from "lucide-react";
import "../../styles/Style.css";
import AddExpenseModal from "../AddExpenseModal/AddExpenseModal";
import {ExpenseModel} from "../../types/Expense";
import {useState} from "react";
import PostExpense from "../../services/PostExpense";

export default function AddExpense() {

    const [showModal, setShowModal] = useState(false);

    const handleSave = async (expense: ExpenseModel) => {
        await PostExpense(expense)
        console.log("Nova despesa:", expense);
    };
    return (
        <div onClick={() => setShowModal(true)}
             className="cur col cards add-card d-flex flex-row align-items-center shadow-sm rounded-4">
            <div className="icon-box d-flex justify-content-center align-items-center add-expense me-4">
                <MinusCircle size={20} color="red"/>
            </div>
            <div>
                <h6 className="mb-1 text-dark fw-semibold">Adicionar gastos</h6>
                <p className="mb-0 text-muted small">Crie um gasto manualmente</p>
            </div>

            <div onClick={e => e.stopPropagation()}>
                <AddExpenseModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                />
            </div>

        </div>
    )
}
