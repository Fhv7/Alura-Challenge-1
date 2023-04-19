import { VStack, Card, Text, Box, Button, useToast } from "@chakra-ui/react";

interface props {
    value: string
}

function OutputComponent(props: props) {
    const toast = useToast()
    return (
        <div>
            <Card minH={{xl: "80vh", base: "10vh"}} textAlign="center" variant="elevated" maxW="80vw" px={10}>
                {props.value != "" ? 
                <Box py="2rem">
                    <Text fontSize="3xl">{props.value}</Text> 
                    <Button 
                        mt="2rem" 
                        w="100%"
                        onClick={async () => 
                                {
                                    await navigator.clipboard
                                    .writeText(props.value)

                                    toast({
                                        title: 'Texto Copiado',
                                        status: 'success',
                                        variant: 'subtle',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                }   
                            }
                    >
                        Copiar
                    </Button>
                </Box>
                :
                    <VStack my="auto" py="2rem">
                    <Text fontSize="3xl">
                        Ningún Mensaje fue encontrado.
                    </Text>
                    <Text color="#BCBCBC">
                        Ingresa el texto que desees encriptar o desencriptar
                    </Text>
                </VStack>}
            </Card>
        </div>
    )
}

export default OutputComponent