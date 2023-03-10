import { Box, SimpleGrid } from "@chakra-ui/react"
import FilterComp from "../Components/FilterComp"
import { Footer } from "../Components/footer"
import Navbar from "../Components/Navbar"
import ProductList from "../Components/ProductList"

export const ProductPage=()=>{
    return (
        <>
        <Navbar/>
        <Box display={["","",'flex']}  >
            <Box bgColor={'lightgrey'} w={['100%','','30%','30%']}  display={['flex']} justifyContent={['center']}>

                <FilterComp/>
            </Box>
            <Box >

                <ProductList/>
            </Box>
           
        </Box>
        <Footer/>
        </>
    )
}