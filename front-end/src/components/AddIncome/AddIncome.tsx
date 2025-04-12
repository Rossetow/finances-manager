import {PlusCircle} from "lucide-react";
import "../../styles/Style.css";
import {useState} from "react";
import AddIncomeModal from "../AddIncomeModal/AddIncomeModal";
import {IncomeModel} from "../../types/IncomeModel";
import PostIncome from "../../services/PostIncome";

export default function AddExpense() {
    const [showModal, setShowModal] = useState(false);

    const handleSave = async (income: IncomeModel) => {
        console.log("Nova receita:", income);
        await PostIncome(income)
    };
    return (
        <div onClick={() => setShowModal(true)}
             className="col cards add-card d-flex flex-row align-items-center shadow-sm rounded-4">
            <div className="icon-box d-flex justify-content-center align-items-center add-income me-4">
                <PlusCircle size={20} color="green"/>
            </div>
            <div>
                <h6 className="mb-1 text-dark fw-semibold">Adicionar recebimento</h6>
                <p className="mb-0 text-muted small">Crie um recebimento manualmente</p>
            </div>
            <div onClick={e => e.stopPropagation()}>
                <AddIncomeModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onSave={handleSave}
                />
            </div>

        </div>
    );
}