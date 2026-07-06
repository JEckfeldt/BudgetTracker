export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">
        <p className="text-sm text-[#5C6B63]">Balance</p>
        <p className="text-3xl font-bold mt-2">$12,450</p>
      </div>

      <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">
        <p className="text-sm text-[#5C6B63]">Income</p>
        <p className="text-3xl font-bold mt-2 text-[#4CAF7A]">$5,200</p>
      </div>

      <div className="bg-white border border-[#E3EDE5] rounded-xl p-6">
        <p className="text-sm text-[#5C6B63]">Expenses</p>
        <p className="text-3xl font-bold mt-2 text-red-500">$3,100</p>
      </div>

    </div>
  );
}