import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import { Input } from "../input";
import { TransactionTypeToggle } from "../transactionTypeToggle";

interface TransactionCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: TransactionCardProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent px='48px' pb={10} w='535px' bg='secondary'>
        <ModalHeader p='0' my={8} color='textSecondary'>
          Nova Transação
        </ModalHeader>
        <ModalCloseButton color='textSecondary' />
        <ModalBody p='0'>
          <FormControl as={Stack} spacing={4}>
            <Input placeholder='Descrição' />
            <Input placeholder='Preço' />
            <Input placeholder='Categoria' />
            <TransactionTypeToggle />
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
