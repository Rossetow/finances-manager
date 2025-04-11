import {FinanceData} from "../../types/FinanceData";
import formatCurrency from "../../Utils/FormatCurrency";
import React from "react";
import ImageByCategory from "../../Utils/ImageByCategory";

type DataProps = {
    data: FinanceData[];
}
export default function ExpensesByCategory({ data }: DataProps) {
    return (
        <ul>
            {data.map((exp) => (

                <li>
                    <div>
                        <img src={ImageByCategory(exp)} height={30} width={30}/>
                        <p>{exp.label}</p>
                    </div>
                    <div>
                        <p>{exp.value}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
