"use client";

import { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";
import AddTransactionButton from "./AddTransactionButton";
import { Transaction } from "@/types/transaction";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    const response = await fetch("/api/transactions/", {
      credentials: "include",
    });

    if (response.ok) {
      const data: Transaction[] = await response.json();
      setTransactions(data);
    } else {
      console.error("Failed to fetch transactions");
    }
  }
  useEffect(() => {

    fetchTransactions();
  }, []);

  return (
    <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Transactions
        </h2>

        <AddTransactionButton onTransactionAdded={fetchTransactions} />
      </div>

      <div className="space-y-4">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
            />
          ))
        ) : (
          <p className="text-[#5C6B63]">
            No transactions yet
          </p>
        )}
      </div>

    </div>
  );
}