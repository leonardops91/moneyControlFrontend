import {
  As,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";

interface CardProps {
  title: string;
  icon: As;
  value: string;
  color?: string;
}

export function Card({ title, icon, value, color = "secondary" }: CardProps) {
  return (
    <Button
      as={Center}
      gap={3}
      flexDirection='column'
      bg={color}
      w={352}
      h='fit-content'
      p={6}
      borderRadius={6}
      color='textPrimary'
      transition='all .2s'
      _hover={{filter: 'brightness(1.1)'}}
      _active={{filter: 'brightness(0.9)'}}
      cursor='pointer'
    >
      <Flex w='100%' justify='space-between'>
        <Text>{title}</Text>
        <Icon as={icon} />
      </Flex>
      <Heading w='100%' color='purple.50' fontSize='3xl'>
        R${value}
      </Heading>
    </Button>
  );
}
