import { Flex, Text } from "@chakra-ui/react";

export type TransactionCategory =
  | "Venda"
  | "Alimentação"
  | "Casa"
  | "Salário"
  | "Estudo"
  | "Compras";

interface TransactionProps {
  title: string;
  price: string;
  category: TransactionCategory;
  date: string;
  type: 'income' | 'outcome'
}

export function TransactionCard({ title, price, category, date, type }: TransactionProps) {
  return (
    <Flex w='100%' bg='secondary' px={8} py={5} borderRadius={5}>
      <Text flex={4}>{title}</Text>
      <Text color={type === 'income' ? 'textSuccess' : 'textDanger'} w={200}>R$ {price}</Text>
      <Text w={200}>{category}</Text>
      <Text >{date}</Text>
    </Flex>
  );
}
