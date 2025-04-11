import formatCurrency from "../../Utils/FormatCurrency";
import "./Balance.css";
import "../../styles/Style.css"

type BalanceProps = {
    balance: number;
}
export default function Balance({ balance }: BalanceProps) {

    return (
        <div className="col cards shadow-sm rounded-4">
            <h6 className="text-muted mb-2">Poupança</h6>
            <p className="display-6 fw-bold text-primary mb-0">
                {formatCurrency(balance)}
            </p>
        </div>
    )
}