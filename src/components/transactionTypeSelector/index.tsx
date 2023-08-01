import { RadioGroup, Flex } from "@chakra-ui/react";
import { TransactionTypeCard } from "./transaction-type-card";
import { Up } from "../../assets/up";
import { Down } from "../../assets/down";
import { useState } from "react";

export function TransactionTypeSelector() {
    const [choosen, setChoosen] = useState('')
    return (
      <RadioGroup onChange={e => setChoosen(e)
      } as={Flex} gap={4}>
        <TransactionTypeCard
          choosen={choosen}
          icon={Up}
          title={"Entrada"}
          name={"income"}
        />
        <TransactionTypeCard
          choosen={choosen}
          icon={Down}
          title={"Saída"}
          name={"outcome"}
        />
      </RadioGroup>
    );
}