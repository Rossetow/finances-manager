import {useState} from "react";
import {CalendarDays} from "lucide-react";
import "./DateRangeFilter.css";

const options = [
    {label: "Esse mês", value: "this_month"},
    {label: "Mês passadp", value: "last_month"},
    {label: "Esse ano", value: "this_year"},
    {label: "Últimos 12 meses", value: "last_12_months"},
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
