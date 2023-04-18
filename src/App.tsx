import { Button, Card, Box, Text, Textarea, Center, VStack } from '@chakra-ui/react'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

function App() {
  // TODO: Create a function and a stateful variable to handle the input from the Textarea component
  // TODO: Create a function that prints to console the encrypted or decrypted message the user input
  return (
      <Box mx={32} my={16}>
        <Grid
            templateRows='auto 1fr auto'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            >
            {/* Heading */}
            <GridItem colSpan={4}>
              <Heading as="h1" size="2xl">Encriptador de Texto</Heading>
            </GridItem>
            {/* Encryption / Decryption result */}
            <GridItem rowSpan={3} colSpan={2}>
              <Card minH="80vh" variant="elevated">
                <VStack m="auto">
                  <Text>
                    Ningún Mensaje fue encontrado
                  </Text>
                  <Text color="#CCCCCC">
                    Ingresa el texto que desees encriptar o desencriptar
                  </Text>
                </VStack>
              </Card>
            </GridItem>
            {/* Text Input */}
            <GridItem colSpan={4} ms={10} me={32} my={10} >
              <Textarea 
                placeholder="Ingresa el texto aqui!" 
                variant="unstyled" 
                resize="none"
                fontSize="3xl"
                height="58vh"
                />
            </GridItem>
            {/* Encrypt Button */}
            <GridItem colSpan={2} textAlign="center">
              <Button colorScheme="blue" size="lg">Encriptar</Button>
            </GridItem>
            {/* Decrypt Button */}
            <GridItem colSpan={2} >
              <Button colorScheme="blue" size="lg">Desencriptar</Button>
            </GridItem>

        </Grid>
      </Box>
    )
}

export default App
