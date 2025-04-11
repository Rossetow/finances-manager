import axios from "axios";
import {ExpenseModel} from "../types/Expense";

const API_URL = "http://localhost:8181/expenses";

export default async function GetExpenses(): Promise<ExpenseModel[]> {
    const response = await axios.get(API_URL);
    return response.data;
}