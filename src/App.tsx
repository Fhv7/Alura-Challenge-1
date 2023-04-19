import { Button, Card, Box, Text, Textarea, VStack, HStack } from '@chakra-ui/react'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

function App() {
  // TODO: Create a function and a stateful variable to handle the input from the Textarea component
  // TODO: Create a function that prints to console the encrypted or decrypted message the user input
  return (
      <Box>
        <Grid
            templateColumns={{lg: 'repeat(6, 1fr)'}}
            gap={12}
            mx={{md: 32, sm: 14}}
            my={16}
            >
            {/* Heading, Input and Buttons */}
            <GridItem 
              colSpan={{xl: 4, base: 6}} 
              me={{xl: 48}}
            >
              <Heading as="h1" size="2xl" mb={12}>
                  Encriptador de Texto
              </Heading>
              <VStack>
              <Textarea 
                placeholder="Ingresa el texto aquí!" 
                variant="unstyled" 
                resize="none"
                fontSize="3xl"
                height="58vh"
                />
                <HStack>
                <Button colorScheme="blue" size="lg">Encriptar</Button>
                <Button colorScheme="blue" size="lg">Desencriptar</Button>
                </HStack>
              </VStack>
            </GridItem>
            {/* Encryption / Decryption result */}
            <GridItem colSpan={{xl: 2, base: 6}}>
              <Card minH="80vh" variant="elevated">
                <VStack m="auto">
                  <Text fontSize="3xl">
                    Ningún Mensaje fue encontrado
                  </Text>
                  <Text color="#BCBCBC">
                    Ingresa el texto que desees encriptar o desencriptar
                  </Text>
                </VStack>
              </Card>
            </GridItem>
        </Grid>
      </Box>
    )
}

export default App
