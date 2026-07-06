"use client";

import { useState } from "react";

export default function AddTransactionButton() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#4CAF7A] text-white px-4 py-2 rounded-lg"
      >
        + Add Transaction
      </button>


      {open && (
        <div>
          Transaction form goes here
        </div>
      )}
    </>
  );
}