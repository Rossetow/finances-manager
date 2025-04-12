import {FinanceData} from "../../types/FinanceData";
import formatCurrency from "../../utils/FormatCurrency";
import React from "react";
import {Table} from "react-bootstrap";
import "./ExpensesByCategory.css"
import { Utensils, Bus, Film, Book, HeartPulse, FileText, ShoppingBag, Plane, Recycle, FileQuestion, DollarSign } from "lucide-react";

type DataProps = {
    data: FinanceData[];
}
export default function ExpensesByCategory({ data }: DataProps) {
    return (
        <Table striped bordered hover>
            {data.map((exp) => (


                <tr key={exp.label}>
                    <td className="d-flex align-items-center">
                        <div> {IconByCategory(exp.label)} </div>
                        <p>{exp.label}</p>
                    </td>
                    <td>
                        <p>{formatCurrency(exp.value)}</p>
                    </td>
                    <td>
                        <p>
                            {exp.percentage}%
                        </p>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export function IconByCategory(category: string) {
    switch (category.toLowerCase()) {
        case "alimentação":
            return <Utensils size={20} />;
        case "transporte":
            return <Bus size={20} />;
        case "lazer":
            return <Film size={20} />;
        case "educação":
            return <Book size={20} />;
        case "saúde":
            return <HeartPulse size={20} />;
        case "contas":
            return <FileText size={20} />;
        case "compras":
            return <ShoppingBag size={20} />;
        case "viagem":
            return <Plane size={20} />;
        case "assinaturas":
            return <Recycle size={20} />;
        case "restante do orçamento":
            return <DollarSign size={20} />;
        case "outros":
        default:
            return <FileQuestion size={20} />;
    }
}