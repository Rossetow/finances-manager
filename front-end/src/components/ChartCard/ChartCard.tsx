import PieChartComponent from "../PieChart/PieChart";
import {FinanceData} from "../../types/FinanceData";
import ExpensesByCategory from "../ExpensesByCategory/ExpensesByCategory";

type DataProps = {
    data: FinanceData[];
}

export default function ChartCard({ data }: DataProps) {
    return (
        <div>
            <header>
                <h1>Gastos por categoria</h1>
            </header>
            <div>
                <PieChartComponent data={data} />
            </div>
            <article>
                <ExpensesByCategory data={data} />
            </article>
        </div>
    )
}