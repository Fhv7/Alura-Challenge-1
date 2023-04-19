import { Button, Heading, SimpleGrid, Textarea, VStack, Text } from '@chakra-ui/react';

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
            <Heading as="h1" size="2xl" mb={12}>
                  Encriptador de Texto
                </Heading>
                <VStack>
                <Textarea 
                    value={props.input}
                    placeholder="Ingresa el texto aquí!" 
                    variant="unstyled" 
                    resize="none"
                    fontSize="3xl"
                    height={{xl: "58vh", md:"45vh" ,base: "40vh"}}
                    onChange={props.onChange}
                />
                <Text color="#BCBCBC" pb={4}>
                    Solo letras minusculas y sin tildes
                </Text>
                <SimpleGrid columns={{md: 2, base: 1}} spacing={{md: 14, base: 6}}>
                    <Button w={60} onClick={props.onEncrypt} colorScheme="blue" size="lg">Encriptar</Button>
                    <Button w={60} onClick={props.onDecrypt} colorScheme="blue" size="lg">Desencriptar</Button>
                </SimpleGrid>
            </VStack>
        </div>
    )
}

export default InputComponent