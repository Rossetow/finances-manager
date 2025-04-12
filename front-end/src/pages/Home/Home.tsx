
import {FinanceData} from "../../types/FinanceData";
import ChartCard from "../../components/ChartCard/ChartCard";
import {ExpenseModel} from "../../types/Expense";
import ExpenseTableComponent from "../../components/ExpenseTableComponent/ExpenseTableComponent";
import "./Home.css";
import "../../styles/Style.css";
import BalanceCardsGrid from "../../components/BalanceCardsGrid/BalanceCardsGrid";
import AddExpenseAndIncomeGrid from "../../components/AddExpenseAndIncomeGrid/AddExpenseAndIncomeGrid";
import {useEffect, useState} from "react";
import GetExpenses from "../../services/GetExpenses";
import GetFinanceData from "../../services/GetFinanceData";
import {IncomeModel} from "../../types/IncomeModel";
import GetIncomes from "../../services/GetIncomes";
import Header from "../../components/Header/Header";
import FilterExpensesByDate from "../../utils/FilterExpensesByDate";
import FilterIncomesByDate from "../../utils/FilterIncomesByDate";

export default function Home() {

    const [dateFilter, setDateFilter] = useState<number>(30); // em dias

    const [financeData, setFinanceData] = useState<FinanceData[]>([])

    const [allIncomes, setAllIncomes] = useState<IncomeModel[]>([]);
    const [filteredIncomes, setFilteredIncomes] = useState<IncomeModel[]>([]);

    const [allExpenses, setAllExpenses] = useState<ExpenseModel[]>([]);
    const [filteredExpenses, setFilteredExpenses] = useState<ExpenseModel[]>([]);

    const [incomes, setIncomes] = useState<IncomeModel[]>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        initData()
    }, []);

    async function initData() {
        const [initExpenses, initIncomes] = await Promise.all([
            GetExpenses(),
            GetIncomes()
        ]);

        setAllExpenses(initExpenses);
        var filteredExpensesInit = FilterExpensesByDate(initExpenses, dateFilter);

        setFilteredExpenses(filteredExpensesInit);

        setAllIncomes(initIncomes);

        var filteredIncomesInit = FilterIncomesByDate(initIncomes, dateFilter);
        setFilteredIncomes(filteredIncomesInit);

        setIncomes(initIncomes);

        initGraph(filteredExpenses, filteredIncomes);
    }

    function initGraph(initExpenses: ExpenseModel[], initIncomes: IncomeModel[]) {
        const initFinanceData = GetFinanceData(initExpenses, initIncomes)
        setFinanceData(initFinanceData)
    }

    const dateRangeToDays: Record<string, number> = {
        this_month: 30,
        last_month: 60,
        this_year: 365,
        last_12_months: 365,
        custom: 0
    };

    const handleDateFilterChange = (filterKey: string) => {
        const days = dateRangeToDays[filterKey] || 0;

        const filteredExpenses = FilterExpensesByDate(allExpenses, days);
        setFilteredExpenses(filteredExpenses);

        const filteredIncomes = FilterIncomesByDate(allIncomes, days);
        setFilteredIncomes(filteredIncomes);
    };

    return (
        <div>
            <Header onDateFilterChange={handleDateFilterChange} />

            <div className="container">
                <div className="row mt-5">
                    <BalanceCardsGrid expenses={filteredExpenses} incomes={filteredIncomes}/>
                </div>
                <div className="row mt-5" >
                    <AddExpenseAndIncomeGrid />
                </div>
                <div className="row grid mt-5">
                    <div className="col">
                        <ChartCard expenses={filteredExpenses} incomes={filteredIncomes} />
                    </div>
                    <div className="col">
                        <ExpenseTableComponent expenses={filteredExpenses} />
                    </div>
                </div>

            </div>
        </div>
    );
}
