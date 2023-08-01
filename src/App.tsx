import { Flex } from "@chakra-ui/react";
import { Transactions } from "./pages/transactions";

export function App() {
  return (
    <Flex w='90%' maxWidth='1232px' margin='0 auto'>
      <Transactions />
    </Flex>
  );
}
