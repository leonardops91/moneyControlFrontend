import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { Lupa } from "../../assets/lupa";

export function SearchBox() {
  return (
    <Flex gap={4} mb={6}>
      <Input bg='blackAlpha.500' border='none' placeholder='Busque uma transação' _focus={{ outlineOffset: 'unset', outlineColor: 'primary'}}/>
      <Button gap={2} variant='outline' color='primary' borderColor='primary' transition='all .2s' _hover={{bg: 'purple.900', borderColor: 'purple.50'}} _active={{bg: 'purple.200'}}>
        <Icon as={Lupa} /> <Text display={{base: 'none', md: 'initial'}}>
          Buscar
          </Text>
      </Button>
    </Flex>
  );
}
