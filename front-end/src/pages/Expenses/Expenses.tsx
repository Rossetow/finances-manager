import { useState } from "react";
import { ExpenseModel } from "../../types/Expense";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import mock = jest.mock;



export default function Expenses() {
    const mockExpenses: ExpenseModel[] = [
        {
            id: "1",
            titulo: "Compra no mercado",
            descricao: "Itens da semana",
            valor: 150.75,
            data: new Date("2025-04-08"),
            categoria: "Alimentação",
        },
        {
            id: "2",
            titulo: "Uber para o trabalho",
            descricao: "Corrida de manhã",
            valor: 35,
            data: new Date("2025-04-07"),
            categoria: "Transporte",
        },
    ];
    return (
        <div className="max-w-4xl mx-auto mt-8 px-4">
            <h2 className="text-2xl font-bold mb-4">Minhas Despesas</h2>

            {mockExpenses.length === 0 ? (
                <p className="text-gray-500">Nenhuma despesa registrada ainda.</p>
            ) : (
                < ExpenseTable expenses={mockExpenses} />
            )}

            <button
                className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                onClick={() => alert("Abrir modal de nova despesa")}
            >
                + Nova Despesa
            </button>
        </div>
    );
}
