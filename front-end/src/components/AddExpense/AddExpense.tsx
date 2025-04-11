import {MinusCircle, PlusCircle} from "lucide-react"; // ou qualquer ícone SVG
export default function AddExpense() {
    return (
        <div className="flex items-center p-4 bg-white rounded-xl shadow border border-gray-200 w-fit hover:shadow-md cursor-pointer transition">
            <div className="bg-green-100 rounded-lg p-2 mr-4">
                <MinusCircle color={'red'} className="text-green-600 w-6 h-6" />
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-800">Add expense</h4>
                <p className="text-sm text-gray-500">Create an expense manually</p>
            </div>
        </div>
    );
}