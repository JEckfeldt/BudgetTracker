export type Transaction = {
  id: number;
  user_id: number;
  description: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};