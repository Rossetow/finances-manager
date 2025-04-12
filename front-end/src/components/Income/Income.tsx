import formatCurrency from "../../utils/FormatCurrency";

type IncomeProps = {
    income: number;
}
export default function Income({income}: IncomeProps) {

    return (
        <div className="col cards shadow-sm rounded-4">
            <h6 className="text-muted mb-2">Recebido</h6>

            <p className="display-6 fw-bold text-dark text-primary mb-0">
                {formatCurrency(income)}
            </p>
        </div>
    )
}
