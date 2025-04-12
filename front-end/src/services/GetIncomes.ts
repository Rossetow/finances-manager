import axios from "axios";
import {IncomeModel} from "../types/IncomeModel";

const API_URL = "http://localhost:8181/incomes";

export default async function GetIncomes(): Promise<IncomeModel[]> {
    const response = await axios.get(API_URL);
    return response.data;
}