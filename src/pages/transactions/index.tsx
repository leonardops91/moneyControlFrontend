import { Box, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Up } from "../../assets/up";
import { Down } from "../../assets/down";
import { Cifrao } from "../../assets/cifrao";
import { SearchBox } from "../../components/search-box";
import { TransactionCard } from "../../components/transaction-card";
import { TransactionModal } from "../../components/transaction-modal";
import { TransactionType, useTransactions } from "../../contexts/transactionContext";
import { useState } from "react";
import { Summary, formatValue } from "./summary";

export function Transactions() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [transactionsToDisplay, setTransactionsToDisplay] = useState<TransactionType[]>()


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
              price={formatValue(Number(transaction.price))}
              type={transaction.type}
              date={transaction.createdAt}
              category={transaction.category}
            />
          );
        })}
      </Stack>
      <TransactionModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
