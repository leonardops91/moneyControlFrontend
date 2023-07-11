import { Button, Flex, Icon, Input } from "@chakra-ui/react";
import { Lupa } from "../../assets/lupa";

export function SearchBox() {
  return (
    <Flex gap={4} mb={6}>
      <Input bg='black' border='none' placeholder='Busque uma transação' _focus={{ outlineOffset: 'unset', outlineColor: 'primary'}}/>
      <Button gap={2} variant='outline' color='primary' borderColor='primary' transition='all .2s' _hover={{bg: 'gray.700'}}>
        <Icon as={Lupa} /> Buscar
      </Button>
    </Flex>
  );
}
