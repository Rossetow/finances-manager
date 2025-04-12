import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import DateRangeFilter from "../DateRangeFilter/DateRangeFilter";

type HeaderProps = {
    onDateFilterChange: (filterKey: string) => void;
};

export default function Header({ onDateFilterChange }: HeaderProps) {


    return (
        <header className="app-header">
            <div className=" d-flex justify-content-between py-3 container-custom">
                <h1 className="logo mb-0">
                    <Link to="/" className="text-blue text-decoration-none">💸 Meu Financeiro</Link>
                </h1>
                <nav className="nav">
                    <DateRangeFilter onSelect={onDateFilterChange} />
                </nav>
            </div>
        </header>
    );
}
