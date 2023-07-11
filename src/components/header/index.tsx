import { Button, Flex, Heading } from "@chakra-ui/react";
import { Logo } from "../../assets/logo";
import { AddIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex w='100%' justify='space-between' my={10}>
      <Flex gap={1} align='baseline'>
        <AddIcon color='primary' boxSize={7}/>
        <Heading color='textSecondary'>Money Control</Heading>
      </Flex>
      <Button bg='primary' color='textSecondary' transition='all .2s' _hover={{bg: 'purple.300'}}>
        Nova Transação
      </Button>
    </Flex>
  );
}
