import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Input } from "../input";
import { TransactionTypeSelector } from "../transactionTypeSelector";


interface TransactionCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionCardProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent px='48px' pb={10} w='535px' bg='secondary'>
        <ModalHeader p='0' my={8} color='purple.50'>
          Nova Transação
        </ModalHeader>
        <ModalCloseButton color='textSecondary' />
        <ModalBody p='0'>
          <FormControl as={Stack} spacing={4}>
            <Input placeholder='Descrição' />
            <Input placeholder='Preço' />
            <Input placeholder='Categoria' />
            <TransactionTypeSelector />
            <Button bg='purple.800' color='purple.50' fontSize='xl' py={7} _hover={{bg: 'purple.900'}}>Cadastrar</Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
