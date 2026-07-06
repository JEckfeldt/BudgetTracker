"use client";

export default function DeleteBudgetButton({
  budgetId,
}: {
  budgetId: number;
}) {
  const handleDelete = () => {
    console.log("Delete budget:", budgetId);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
    >
      Remove
    </button>
  );
}