import formatCurrency from "../../Utils/FormatCurrency";

type BalanceProps = {
    balance: number;
}
export default function Balance({ balance }: BalanceProps) {

    return (
        <div>
            <h3 className="text-sm text-gray-400 mb-4">
                Poupança
            </h3>
            <p className="text-xl font-bold mb-4">{formatCurrency(balance)}</p>
        </div>
    )
}