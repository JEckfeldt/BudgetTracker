import TransactionRow from "./TransactionRow";
import AddTransactionButton from "./AddTransactionButton";
import { Transaction } from "@/types/transaction";

export default function TransactionHistory() {
    
    // Fake Data
    const transactions: Transaction[] = [
      {
        id: 1,
        name: "Paycheck",
        category: "Income",
        amount: 5200,
        date: "July 1, 2026",
        type: "income",
      },
      {
        id: 2,
        name: "Rent",
        category: "Housing",
        amount: 1500,
        date: "July 2, 2026",
        type: "expense",
      },
    ];

  return (
    <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
            Transactions
        </h2>

        <AddTransactionButton />
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