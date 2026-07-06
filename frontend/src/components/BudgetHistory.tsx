// List of all budgets for logged in user

import BudgetRow from "./BudgetRow";
import AddBudgetButton from "./AddBudgetButton";
import { Budget } from "@/types/budget";


export default function BudgetHistory() {

    // sample data
    const budgets: Budget[] = [
        {
        id: 1,
        name: "Food",
        limit: 500,
        spent: 320,
        },
        {
        id: 2,
        name: "Transportation",
        limit: 200,
        spent: 80,
        },
        {
        id: 3,
        name: "Entertainment",
        limit: 300,
        spent: 150,
        },
    ];


  return (
    <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Budgets
        </h2>

        <AddBudgetButton />
      </div>


      <div className="space-y-5">
        {budgets.map((budget) => (
          <BudgetRow
            key={budget.id}
            budget={budget}
          />
        ))}
      </div>

    </div>
  );
}