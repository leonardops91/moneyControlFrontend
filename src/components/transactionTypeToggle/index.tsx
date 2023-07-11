import { RadioGroup, Flex, Radio, Icon } from "@chakra-ui/react";
import { Up } from "../../assets/up";

export function TransactionTypeToggle() {
    return (
        <RadioGroup>
            <Flex>
                <Radio  value='1'><Icon as={Up} /></Radio>
                <Radio value='2'>SEcond</Radio>
            </Flex>
        </RadioGroup>
    )
}