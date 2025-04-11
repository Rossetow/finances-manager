import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Expenses from "./pages/Expenses/Expenses";
import './styles/Custom.scss'
import {ExpenseContextProvider} from "./context/ExpenseContext";


function App() {
    return (
        <ExpenseContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/expenses" element={<Expenses />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ExpenseContextProvider>
    );
}

export default App;
