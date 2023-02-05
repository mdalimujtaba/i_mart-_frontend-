import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Footer } from "../Components/footer"
import Navbar from "../Components/Navbar"

export const HomePage=()=>{
    return (
        <>
            <Navbar />
            <Heading mt={['20px']}>Some Of Our Collections</Heading>
            <SimpleGrid  columns={[1,2,4]} spacing='40px'  h={["auto",'auto','400px']} width={['100%']} mt={['20px']}>
                <Box border='1px solid grey'   height={["400px"]}>
                    <Image  src="https://m.media-amazon.com/images/I/616xchp1ECL._UY741_.jpg" alt="pant" h={'100%'}></Image>
                </Box>
                <Box border='1px solid grey'  height={["400px"]}>
                    <Image  src="https://m.media-amazon.com/images/I/71ooPYKfzPL._SX569._SX._UX._SY._UY_.jpg" alt="shirt" h={'100%'}></Image>
                </Box>
                <Box border='1px solid grey'  height={["400px"]}>
                    <Image  src="https://m.media-amazon.com/images/I/71jbGpe67QL._SX569._SX._UX._SY._UY_.jpg" alt="pant" h={'100%'}></Image>
                </Box>
                <Box border='1px solid grey'  height={["400px"]}>
                    <Image src="https://m.media-amazon.com/images/I/91Y0gL7Kc6L._SY741._SX._UX._SY._UY_.jpg" alt="shirt" h={'100%'}></Image>
                </Box>
            </SimpleGrid>
            <Footer/>
            
            
        </>
      
    )
}