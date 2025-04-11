import formatCurrency from "../../Utils/FormatCurrency";

type IncomeProps = {
    income: number;
}
export default function Income({ income }: IncomeProps) {

    return (
        <div>
            <h4 className="text-sm text-gray-400 mb-4">
                Recebido
            </h4>
            <p className="text-xl font-bold mb-4">{formatCurrency(income)}</p>
        </div>
    )
}