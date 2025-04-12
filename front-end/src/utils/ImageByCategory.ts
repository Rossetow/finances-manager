import {FinanceData} from "../types/FinanceData";

export default function ImageByCategory(data: FinanceData): string {
    switch (data.label.toLowerCase()) {
        case "food":
            return "../assets/food.png";
        case "transport":
            return "../assets/transport.png";
        case "entertainment":
            return "../assets/entertainment.png";
        case "education":
            return "../assets/education.png";
        case "health":
            return "../assets/health.png";
        case "bills":
            return "../assets/bills.png";
        case "shopping":
            return "../assets/shopping.png";
        case "travel":
            return "../assets/travel.png";
        case "subscriptions":
            return "../assets/subscriptions.png";
        case "others":
            return "../assets/others.png";
        default:
            return "../assets/default.png";
    }
}