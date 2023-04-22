import { VStack, Card, Text, Box, Button, useToast, Image, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface props {
    outputValue: string,
    setOutputValue: Dispatch<SetStateAction<string>>,
    setInputValue: Dispatch<SetStateAction<string>>
}

function OutputComponent(props: props) {
    const toast = useToast()
    return (
        <div>
            <Card 
                minH={{xl: "80vh"}} 
                textAlign="center" 
                variant="elevated" 
                maxW={{xl: "25vw", base: "80vw"}} 
                px={10} 
                borderRadius={30}
                py="2rem"
            >
                {props.outputValue != "" ? 
                <>
                    <Box height={{xl: "60vh", md:"45vh" ,base: "40vh"}} overflow="auto">    
                        <Text fontSize="3xl">{props.outputValue}</Text> 
                    </Box>
                        <Button 
                            mt="2rem" 
                            w="100%"
                            onClick={async () => 
                                    {
                                        await navigator.clipboard
                                        .writeText(props.outputValue)

                                        toast({
                                            title: 'Texto Copiado.',
                                            status: 'success',
                                            variant: 'subtle',
                                            duration: 2000,
                                            isClosable: true,
                                        })
                                    }   
                                }
                            colorScheme="purple" 
                            borderRadius={30} 
                        >
                            Copiar
                        </Button>
                        <Button 
                            mt="1.5rem" 
                            w="100%"
                            onClick={async () => 
                                    {
                                        props.setOutputValue("")
                                        props.setInputValue("")
                                        toast({
                                            title: 'Se limpiaron los campos. ',
                                            status: 'success',
                                            variant: 'subtle',
                                            duration: 2000,
                                            isClosable: true,
                                        })
                                    }   
                                }
                            colorScheme="purple" 
                            borderRadius={30} 
                            variant="outline"
                        >
                            Limpiar Campos
                        </Button>
                </>
                :
                    <VStack my="auto" pt="2rem" pb="2.5rem">
                    <Image src="src/assets/nf2.jpg" alt="img" mb={10} display={{xl: "block",base: "none"}}/>
                    <Text fontSize={{xl: "3xl", base: "2xl"}} fontWeight="600">
                        Ningún Mensaje fue encontrado.
                    </Text>
                    <Text color="#A6A6A6">
                        Ingresa el texto que desees encriptar o desencriptar.
                    </Text>
                </VStack>}
            </Card>
        </div>
    )
}

export default OutputComponent