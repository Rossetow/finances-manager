import formatCurrency from "../../utils/FormatCurrency";
import "./Balance.css";
import "../../styles/Style.css"

type BalanceProps = {
    balance: number;
}
export default function Balance({ balance }: BalanceProps) {
    const textColor = balance < 0 ? "text-danger" : "text-primary";

    return (
        <div className="col cards shadow-sm rounded-4">
            <h6 className="text-muted mb-2">Poupança</h6>
            <p className={`display-6 fw-bold mb-0 ${textColor}`}>
                {formatCurrency(balance)}
            </p>
        </div>
    )
}