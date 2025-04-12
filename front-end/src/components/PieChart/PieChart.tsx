import {PieChart} from '@mui/x-charts/PieChart';
import {FinanceData} from "../../types/FinanceData";
import React from "react";

type DataProps = {
    data: FinanceData[];
}

export default function PieChartComponent({data}: DataProps) {
    const colors = [
        "#6366F1", // Indigo (gastos principais)
        "#60A5FA", // Azul claro
        "#34D399", // Verde menta
        "#FBBF24", // Amarelo suave
        "#F87171", // Vermelho salmão
        "#A78BFA", // Roxo lavanda
        "#F472B6", // Rosa claro
        "#10B981", // Verde médio
        "#FCD34D", // Amarelo pastel
        "#93C5FD", // Azul bebê
    ];

    return (
        <div>
            <PieChart
                colors={colors}
                series={[
                    {
                        innerRadius: 50,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -45,
                        outerRadius: 150,

                        data,

                        highlightScope: {fade: 'global', highlight: 'item'},
                        faded: {innerRadius: 30, additionalRadius: -30, color: 'gray'},
                    },
                ]}

                width={550}
                height={400}
                margin={{top: 10, bottom: 10, left: 10, right: 250}}

                slotProps={{
                    legend: {
                        direction: 'column',
                        position: {
                            vertical: 'middle',
                            horizontal: 'right',
                        },
                        itemMarkWidth: 20,
                        itemMarkHeight: 2,
                        markGap: 5,
                        itemGap: 10,
                    }


                }}

            />
        </div>
    )
}