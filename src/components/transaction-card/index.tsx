import { Flex, Text } from "@chakra-ui/react";

type TransactionCategory =
  | "Venda"
  | "Alimentação"
  | "Casa"
  | "Salário"
  | "Estudo"
  | "Compras";

interface TransactionProps {
  title: string;
  price: number;
  category: TransactionCategory;
  date: string;
  type: 'income' | 'outcome'
}

export function TransactionCard({ title, price, category, date, type }: TransactionProps) {
  return (
    <Flex w='100%' bg='secondary' px={8} py={5} borderRadius={5}>
      <Text flex={4}>{title}</Text>
      <Text color={type === 'income' ? 'success' : 'danger'} w={200}>{price}</Text>
      <Text w={200}>{category}</Text>
      <Text >{date}</Text>
    </Flex>
  );
}
