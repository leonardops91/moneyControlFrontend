import { Box, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { SearchBox } from "../../components/search-box";
import { TransactionCard } from "../../components/transaction-card";
import { TransactionModal } from "../../components/transaction-modal";
import { TransactionType, useTransactions } from "../../contexts/transactionContext";
import { useEffect, useState } from "react";
import { Summary } from "./summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { transactions } = useTransactions()

  const [transactionsToDisplay, setTransactionsToDisplay] = useState<TransactionType[]>()

  useEffect(() => {
    setTransactionsToDisplay(transactions)
  }, [transactions])
  return (
    <Flex direction={"column"} margin='auto' width='90%'>
      <Header openModal={onOpen} />
      <Box
        overflow='auto'
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Summary setTransactionsToDisplay={setTransactionsToDisplay}/>
      </Box>
      <SearchBox />
      <Stack spacing={2}>
        {transactionsToDisplay?.map((transaction) => {
          return (
            <TransactionCard
              title={transaction.description}
              price={priceFormatter.format(transaction.price)}
              type={transaction.type}
              date={dateFormatter.format(new Date(transaction.createdAt))}
              category={transaction.category}
            />
          );
        })}
      </Stack>
      <TransactionModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
