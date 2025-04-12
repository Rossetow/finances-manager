import {IncomeModel} from "../types/IncomeModel";

export default function TotalIncome(incomes: IncomeModel[] | null | undefined): number {
    if (!incomes || incomes.length === 0) return 0;

    return incomes
        .filter((income): income is IncomeModel => income !== null && income !== undefined)
        .reduce((sum, income) => sum + income.valor, 0);
}
