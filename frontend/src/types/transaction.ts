export type Transaction = {
  id: number;
  name: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};