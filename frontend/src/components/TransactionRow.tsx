import { Transaction } from "@/types/transaction";

export default function TransactionRow({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <div className="flex justify-between items-center border-b border-[#E3EDE5] pb-4">

      <div>
        <p className="font-medium text-[#1F2A24]">
          {transaction.name}
        </p>

        <p className="text-sm text-[#5C6B63]">
          {transaction.category} • {transaction.date}
        </p>
      </div>


      <p
        className={`font-semibold ${
          transaction.type === "income"
            ? "text-[#4CAF7A]"
            : "text-red-500"
        }`}
      >
        {transaction.type === "income" ? "+" : "-"}
        ${Math.abs(transaction.amount)}
      </p>

    </div>
  );
}