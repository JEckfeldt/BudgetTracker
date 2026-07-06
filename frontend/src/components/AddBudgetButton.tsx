"use client";

export default function AddBudgetButton() {
  const handleClick = () => {
    // Later:
    // Open modal
    // Submit form
    // Call API
    console.log("Add budget clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#4CAF7A] text-white px-4 py-2 rounded-lg hover:bg-[#3f9468] transition"
    >
      + Add Budget
    </button>
  );
}