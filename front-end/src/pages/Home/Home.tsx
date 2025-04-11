
import {FinanceData} from "../../types/FinanceData";
import ChartCard from "../../components/ChartCard/ChartCard";
import {ExpenseModel} from "../../types/Expense";
import ExpenseTableComponent from "../../components/ExpenseTableComponent/ExpenseTableComponent";
import "./Home.css";
import "../../styles/Style.css";
import BalanceCardsGrid from "../../components/BalanceCardsGrid/BalanceCardsGrid";
import AddExpenseAndIncomeGrid from "../../components/AddExpenseAndIncomeGrid/AddExpenseAndIncomeGrid";
import {useContext, useEffect, useState} from "react";
import AddExpenseModal from "../../components/AddExpenseModal/AddExpenseModal";

import { ExpenseContext } from "../../context/ExpenseContext";
import GetExpenses from "../../services/GetExpenses";
import GetFinanceData from "../../services/GetFinanceData";

export default function Home() {
    const financeMockData: FinanceData[] = [
        { id: 1, label: "Alimentação", value: 850.75, percentage: 40.16 },
        { id: 2, label: "Transporte", value: 320.4, percentage: 15.13 },
        { id: 3, label: "Lazer", value: 210.9, percentage: 9.96 },
        { id: 4, label: "Educação", value: 500.0, percentage: 23.61 },
        { id: 5, label: "Saúde", value: 145.5, percentage: 6.87 },
        { id: 6, label: "Outros", value: 90.0, percentage: 4.25 },
        { id: 7, label: "Restante do orçamento", value: 2882.45}
    ];


    const { expenses, setExpenses } = useContext(ExpenseContext)

    useEffect(() => {
        initData()
    }, []);

    async function initData (){
        const initExpenses = await GetExpenses()
        setExpenses(initExpenses)
        initGraph(initExpenses)
    }
    const [financeData, setFinanceData] = useState<FinanceData[]>([]);

    const budget = 5000;

    function initGraph(initExpenses: ExpenseModel[]) {
        const initFinanceData = GetFinanceData(initExpenses, budget)
        setFinanceData(initFinanceData)
    }

    const [showModal, setShowModal] = useState(false);

    const handleSave = (expense: ExpenseModel) => {
        console.log("Despesa salva:", expense);
    };

    return (
        <div className="container">
            <AddExpenseModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSave}
            />
            <div className="row mt-5">
                <BalanceCardsGrid />
            </div>
            <div className="row mt-5" >
                    <AddExpenseAndIncomeGrid />
            </div>
            <div className="row grid mt-5">
                <div className="col">
                    <ChartCard data={financeData} />
                </div>
                <div className="col">
                        <ExpenseTableComponent expensesProps={expenses} />
                </div>
            </div>

        </div>
    );
}
