import { Flex } from "@chakra-ui/react";
import { Cifrao } from "../../assets/cifrao";
import { Down } from "../../assets/down";
import { Up } from "../../assets/up";
import { TransactionType, useTransactions } from "../../contexts/transactionContext";
import { Card } from "../../components/card";
import { Dispatch, SetStateAction } from "react";
import { priceFormatter } from "../../utils/formatter";

interface SummaryProps {
    setTransactionsToDisplay: Dispatch<SetStateAction<TransactionType[] | undefined>>;
}

export function Summary({setTransactionsToDisplay}: SummaryProps) {
    const { transactions } = useTransactions()

    const incomes = transactions
      .filter((transaction) => transaction.type === "income")
  
    const incomesSum = incomes.reduce((acc, transactions) => Number(acc) + Number(transactions.price), 0);
    const outcomes = transactions
      .filter((transactions) => transactions.type === "outcome")
  
    const outcomesSum =   outcomes.reduce((acc, transactions) => Number(acc) + Number(transactions.price), 0);
    const total = incomesSum - outcomesSum;


    return (
        <Flex
        gap={8}
        pb={16}
        w='100%'
        // minW='fit-content'
        align='center'
        direction={"row"}
      >
        <Card onClick={ () => setTransactionsToDisplay(incomes)} title={"Entradas"} icon={Up} value={priceFormatter.format(incomesSum)} />
        <Card onClick={ () => setTransactionsToDisplay(outcomes)} title={"Saídas"} icon={Down} value={priceFormatter.format(outcomesSum)} />
        <Card onClick={ () => setTransactionsToDisplay(transactions)} title={"Total"} icon={Cifrao} value={priceFormatter.format(total)} color='success' />
      </Flex>
    )
}