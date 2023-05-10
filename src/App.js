import { ChakraProvider } from '@chakra-ui/react'
import BusinessCard from "./components/BusinessCard"

function App() {
  return (
    <ChakraProvider>
      <BusinessCard />
    </ChakraProvider>
  )
}

console.log(App)
export default App