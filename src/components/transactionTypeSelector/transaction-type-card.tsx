import { As, Center, Icon, Radio, chakra } from "@chakra-ui/react";

interface TransactionTypeCardProps {
  title: string;
  name: string;
  choosen: string;
  icon: As;
}

export function TransactionTypeCard({
  title,
  name,
  choosen,
  icon,
}: TransactionTypeCardProps) {

  return (
    <chakra.label
      w='100%'
      py={4}
      px={6}
      borderRadius={5}
      bg={choosen === name ? "purple.800" : "blackAlpha.700"}
      color={choosen === name ? "purple.50" : "textPrimary"}
      htmlFor={name}
      cursor='pointer'
    >
      <Center gap={2}>
        <Icon as={icon} />
        {title}
        <Radio display='none' id={name} value={name} />
      </Center>
    </chakra.label>
  );
}
