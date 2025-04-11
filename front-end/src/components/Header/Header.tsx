import { Link, useLocation } from "react-router-dom";

const navItems = [
    { label: "Início", path: "/" },
    { label: "Despesas", path: "/expenses" },
    { label: "Resumo", path: "/summary" },
];

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-indigo-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/">💸 Meu Financeiro</Link>
                </h1>
                <nav className="flex space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:underline ${
                                location.pathname === item.path ? "font-semibold underline" : ""
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
