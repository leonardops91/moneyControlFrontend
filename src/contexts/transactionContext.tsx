import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { TransactionCategory } from "../components/transaction-card";

export type TransactionType = {
    id: string,
    description: string,
    type: "income" | "outcome",
    category: TransactionCategory,
    price: number,
    createdAt: Date
  }

interface TransactionContextType {
  transactions: TransactionType[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then((response) => response.json())
      .then((json) => setTransactions(json));
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}


export const useTransactions = () => useContext(TransactionContext)