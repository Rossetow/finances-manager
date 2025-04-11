import {createContext, ReactNode, useState} from "react";
import { ExpenseModel } from "../types/Expense";

type ExpenseContextProps = {
    expenses: ExpenseModel[];
    setExpenses: (exp: ExpenseModel[]) => void; // agora recebe um array
};

type ExpenseProviderProps = {
    children: ReactNode;
};

export const ExpenseContext = createContext<ExpenseContextProps>(
    {} as ExpenseContextProps
);

export const ExpenseContextProvider = ({ children }: ExpenseProviderProps) => {

    const [expenses, setExpensesState] = useState<ExpenseModel[]>([]);

    const setExpenses = (exp: ExpenseModel[]) => {
        setExpensesState(exp);
    };

    return (
        <ExpenseContext.Provider value={{expenses, setExpenses}}>
            {children}
        </ExpenseContext.Provider>
    )
}