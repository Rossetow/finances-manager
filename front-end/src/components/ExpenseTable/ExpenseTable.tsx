import React, {useState} from "react";
import {ExpenseModel} from "../../types/Expense";
import formatCurrency from "../../Utils/FormatCurrency";
import Table from 'react-bootstrap/Table';

interface ExpensesProps {
    expenses: ExpenseModel[];
}



const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("pt-BR").format(date);

export default function ExpenseTable({ expenses }: ExpensesProps) {

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <div>
                <h3 className="text-2xl font-bold mb-4">Despesas</h3>
                <p>Minhas últimas movimentações</p>
            </div>
            <tr className="bg-gray-100 text-left">
                <th className="p-3">Título</th>
                <th className="p-3">Descrição</th>
                <th className="p-3">Categoria</th>
                <th className="p-3">Data</th>
                <th className="p-3">Valor</th>
            </tr>
            </thead>
            <tbody>
            {expenses.map((exp) => (
                <tr key={exp.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{exp.titulo}</td>
                    <td className="p-3">{exp.descricao}</td>
                    <td className="p-3">{exp.categoria}</td>
                    <td className="p-3">{exp.data.replaceAll("-", "/")}</td>
                    <td className="p-3 font-semibold text-green-600">
                        {formatCurrency(exp.valor)}
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>

    )
}