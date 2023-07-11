import { Flex } from "@chakra-ui/react";
import { Transactions } from "./pages/transactions";

export function App() {
  return (
    <Flex w='100%' maxWidth='1120px' margin='0 auto'>
      <Transactions />
    </Flex>
  );
}
