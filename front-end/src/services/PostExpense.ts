import {ExpenseModel} from "../types/Expense";
import axios from "axios";

const API_URL = "http://localhost:8181/expenses";

export default async function  PostExpense  (expense: ExpenseModel): Promise<ExpenseModel>  {
    const response = await axios.post(API_URL, expense);
    return response.data;
};