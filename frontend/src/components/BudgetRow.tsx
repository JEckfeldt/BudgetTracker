// Snippet for single budget item (category, amount saved/progress bar, delete button)

import { Budget } from "@/types/budget";
import DeleteBudgetButton from "./DeleteBudgetButton";

export default function BudgetRow({
  budget,
}: {
  budget: Budget;
}) {
  const percentage = (budget.spent / budget.limit) * 100;

  return (
    <div className="border-b border-[#E3EDE5] pb-4">

      <div className="flex justify-between items-center">

        <div>
          <p className="font-medium text-[#1F2A24]">
            {budget.name}
          </p>

          <p className="text-sm text-[#5C6B63]">
            ${budget.spent} / ${budget.limit}
          </p>
        </div>

        <DeleteBudgetButton budgetId={budget.id} />

      </div>


      <div className="mt-3 w-full bg-[#E3EDE5] rounded-full h-2">
        <div
          className="bg-[#4CAF7A] h-2 rounded-full"
          style={{
            width: `${Math.min(percentage, 100)}%`,
          }}
        />
      </div>

    </div>
  );
}