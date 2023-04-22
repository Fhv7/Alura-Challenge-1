import { Button, Heading, SimpleGrid, Textarea, VStack, Text} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons'

interface props {
    onChange: 
        (event: 
            React.ChangeEvent<HTMLTextAreaElement>
        ) => void
    onEncrypt: () => void,
    onDecrypt: () => void,
    input: string
}


function InputComponent (props: props) {
    return (
        <div>
            <Heading as="h1" size="2xl" mb={12} textAlign={{xl: "left", base: "center"}}>
                  Encriptador de Texto
                </Heading>
                <VStack>
                <Textarea 
                    ms={{xl: 12, base: 0}}
                    mb={{xl: 12}}
                    value={props.input}
                    placeholder="Ingresa el texto aquí." 
                    variant="unstyled"
                    resize="none"
                    fontSize="3xl"
                    height={{xl: "55vh", md:"45vh" ,base: "40vh"}}
                    onChange={props.onChange}
                />
                <SimpleGrid columns={{lg: 2, base: 1}} spacing={{xl: 20, lg: 14, base: 6}}>
                    <Button w={60} onClick={props.onEncrypt} colorScheme="purple" size="lg" borderRadius={30} py={7}>Encriptar</Button>
                    <Button w={60} onClick={props.onDecrypt} colorScheme="purple" size="lg" borderRadius={30} py={7} variant="outline">Desencriptar</Button>
                </SimpleGrid>
                <Text color="#A6A6A6" pt={6}>
                    <WarningIcon me={2}/>
                    Solo letras minúsculas y sin tildes.
                </Text>
            </VStack>
        </div>
    )
}

export default InputComponent