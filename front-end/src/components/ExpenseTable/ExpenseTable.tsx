import React from "react";
import {ExpenseModel} from "../../types/Expense";
import formatCurrency from "../../utils/FormatCurrency";
import Table from 'react-bootstrap/Table';

interface ExpensesProps {
    expenses: ExpenseModel[];
}

const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("pt-BR").format(date);

export default function ExpenseTable({expenses}: ExpensesProps) {

    return (
        <div>
            <section>
                <h3 className="text-2xl font-bold mb-4">Despesas</h3>
                <p>Minhas últimas movimentações</p>
            </section>
            <Table striped bordered hover size="sm">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-3">Título</th>
                    <th className="p-3">Descrição</th>
                    <th className="p-3">Categoria</th>
                    <th className="p-3">Data</th>
                    <th className="p-3">Valor</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((exp) => {
                    const timestamp = exp.data;
                    const date = new Date(timestamp);

                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    const formattedDate = `${day}/${month}/${year}`;

                    return (
                        <tr key={exp.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{exp.titulo}</td>
                            <td className="p-3">{exp.descricao}</td>
                            <td className="p-3">{exp.categoria}</td>
                            <td className="p-3">{formattedDate}</td>
                            <td className="p-3 font-semibold text-green-600">
                                {formatCurrency(exp.valor)}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>

    )
}