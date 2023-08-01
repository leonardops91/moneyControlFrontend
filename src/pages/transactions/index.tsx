import { Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Up } from "../../assets/up";
import { Down } from "../../assets/down";
import { Cifrao } from "../../assets/cifrao";
import { SearchBox } from "../../components/search-box";
import { TransactionCard } from "../../components/transaction-card";
import { TransactionModal } from "../../components/transaction-modal";

export function Transactions() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex direction={"column"} margin='auto' width='90%'>
      <Header openModal={onOpen} />
      <Flex gap={8} pb={16} align='center' direction={['column', 'row']}>
        <Card title={"Entradas"} icon={Up} value={"17400"} />
        <Card title={"Saídas"} icon={Down} value={"1259"} />
        <Card title={"Total"} icon={Cifrao} value={"16141"} color='success' />
      </Flex>
      <SearchBox />
      <Stack spacing={2}>
        <TransactionCard
          title={"Desenvolvimento de site"}
          price={12000}
          type='income'
          category='Venda'
          date={"13/14/2022"}
        />
        <TransactionCard
          title={"Hamburguer"}
          price={12000}
          type='outcome'
          category='Alimentação'
          date={"13/14/2022"}
        />
        <TransactionCard
          title={"Aluguel de apartamento"}
          price={1200}
          type='outcome'
          category='Casa'
          date={"13/14/2022"}
        />
      </Stack>
      <TransactionModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
