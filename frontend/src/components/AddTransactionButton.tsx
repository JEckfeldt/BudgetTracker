"use client";

import { useState } from "react";

export default function AddTransactionButton({
  onTransactionAdded,
}: {
  onTransactionAdded: () => void;
}) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/transactions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        ...formData,
        amount: Number(formData.amount),
      }),
    });

    if (response.ok) {
      setOpen(false);
      onTransactionAdded();

      setFormData({
        description: "",
        amount: "",
        type: "expense",
        category: "",
        date: "",
      });
    } else {
      console.error("Failed to create transaction");
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#4CAF7A] text-white px-4 py-2 rounded-lg"
      >
        + Add Transaction
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-3"
        >
          <input
            placeholder="Description"
            className="border rounded-lg px-3 py-2 w-full"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <input
            placeholder="Amount"
            type="number"
            className="border rounded-lg px-3 py-2 w-full"
            value={formData.amount}
            onChange={(e) =>
              setFormData({
                ...formData,
                amount: e.target.value,
              })
            }
          />

          <input
            placeholder="Category"
            className="border rounded-lg px-3 py-2 w-full"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="border rounded-lg px-3 py-2 w-full"
            value={formData.date}
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value,
              })
            }
          />

          <select
            className="border rounded-lg px-3 py-2 w-full"
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value,
              })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            type="submit"
            className="bg-[#4CAF7A] text-white px-4 py-2 rounded-lg"
          >
            Save Transaction
          </button>
        </form>
      )}
    </>
  );
}