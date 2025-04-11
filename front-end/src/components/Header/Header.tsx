import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navItems = [
    { label: "Início", path: "/" },
    { label: "Despesas", path: "/expenses" },
    { label: "Resumo", path: "/summary" },
];

export default function Header() {
    const location = useLocation();

    return (
        <header className="app-header">
            <div className=" d-flex justify-content-between py-3 container-custom">
                <h1 className="logo mb-0">
                    <Link to="/" className="text-white text-decoration-none">💸 Meu Financeiro</Link>
                </h1>
                <nav className="nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link px-3 ${
                                location.pathname === item.path ? "active-link" : "text-white"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
