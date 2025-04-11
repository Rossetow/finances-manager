import { Link } from "react-router-dom";
import PieChartComponent from "../../components/PieChart/PieChart";
import {FinanceData} from "../../types/FinanceData";
import ChartCard from "../../components/ChartCard/ChartCard";
import {ExpenseModel} from "../../types/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import ExpenseTableComponent from "../../components/ExpenseTableComponent/ExpenseTableComponent";
import Income from "../../components/Income/Income";
import TotalIncome from "../../Utils/TotalIncome";
import Expenses from "../../components/Expense/Expenses";
import TotalExpenses from "../../Utils/TotalExpenses";
import Budget from "../../Utils/Budget";
import Balance from "../../components/Balance/Balance";
import AddIncome from "../../components/AddIncome/AddIncome";
import AddExpense from "../../components/AddExpense/AddExpense";

export default function Home() {
    const financeMockData: FinanceData[] = [
        { id: 1, label: "Alimentação", value: 850.75 },
        { id: 2, label: "Transporte", value: 320.4 },
        { id: 3, label: "Lazer", value: 210.9 },
        { id: 4, label: "Educação", value: 500.0 },
        { id: 5, label: "Saúde", value: 145.5 },
        { id: 6, label: "Outros", value: 90.0 },
        { id: 7, label: "Restante do orçamento", value: 2882.45}
    ];

    const mockExpenses: ExpenseModel[] = [
        {
            id: "1",
            titulo: "Compra no mercado",
            descricao: "Itens da semana",
            valor: 150.75,
            data: new Date("2025-04-08"),
            categoria: "Alimentação",
        },
        {
            id: "2",
            titulo: "Uber para o trabalho",
            descricao: "Corrida de manhã",
            valor: 35,
            data: new Date("2025-04-07"),
            categoria: "Transporte",
        },
    ];
    return (
        <div className="max-w-4xl mx-auto mt-8 px-4">
            <div>
                <div>
                    <div>
                        <Income income={TotalIncome()} />
                        <AddIncome />
                    </div>
                    <div>
                        <Expenses expenses={TotalExpenses()} />
                        <AddExpense />
                    </div>
                </div>
                <Balance balance={Budget()} />
            </div>
            <div>
                <ExpenseTableComponent expenses={mockExpenses} />
                <ChartCard data={financeMockData} />
            </div>
        </div>
    );
}
