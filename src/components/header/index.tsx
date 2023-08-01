import { Button, Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Flex w='100%' align='center' justify='space-between' my={10}>
      <Flex gap={1} align='center' bg={"purple.900"} opacity={1} p={2} zIndex={10}>
        <AddIcon color='primary' boxSize={7} />
        <Heading color='white'>Money Control</Heading>
      </Flex>
      <Button
        bg='primary'
        color='textSecondary'
        transition='all .2s'
        py={7}
        _hover={{ bg: "purple.300", color: "black" }}
        onClick={openModal}
      >
        Nova Transação
      </Button>
    </Flex>
  );
}
