import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContexType {
    transactions: Transaction [];
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContexType)

export function TransactionsProvider({children}: TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]) 

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => {

            setTransactions(data)
        })
    }, [])
    return(
        <TransactionContext.Provider value={{transactions}}>{children}</TransactionContext.Provider>  
    )
}