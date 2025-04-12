import {useState} from "react";
import {CalendarDays} from "lucide-react"; // ou outro ícone de calendário
import "./DateRangeFilter.css"; // estilização separada

const options = [
    {label: "This month", value: "this_month"},
    {label: "Last month", value: "last_month"},
    {label: "This year", value: "this_year"},
    {label: "Last 12 months", value: "last_12_months"},
];

type DateRangeFilterProps = {
    onSelect: (filterKey: string) => void;
};

export default function DateRangeFilter({onSelect}: DateRangeFilterProps) {
    const [selected, setSelected] = useState("this_month");

    const handleClick = (value: string) => {
        setSelected(value);
        onSelect(value);
    };

    return (
        <div className="d-flex gap-2 align-items-center">
            <div className="btn-group">
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        className={`btn btn-outline-secondary ${
                            selected === opt.value ? "active" : ""
                        }`}
                        onClick={() => handleClick(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
            <button className="btn btn-outline-secondary d-flex align-items-center">
                <CalendarDays size={16} className="me-2"/>
                Select period
            </button>
        </div>
    );
}
