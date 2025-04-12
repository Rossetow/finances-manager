import axios from "axios";
import {IncomeModel} from "../types/IncomeModel";

const API_URL = "http://localhost:8181/incomes";

export default async function PostIncome(income: IncomeModel): Promise<IncomeModel> {
    const response = await axios.post(API_URL, income);
    return response.data;
};