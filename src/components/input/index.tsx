import {Input as InputBase} from '@chakra-ui/react'
interface InputProps {
    placeholder: string
}
export function Input({placeholder}: InputProps) {
    return (
        <InputBase bg='black' border='none'  _focus={{ outlineOffset: 'unset', outlineColor: 'primary'}}placeholder={placeholder} />
    )
}