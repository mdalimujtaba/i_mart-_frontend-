import { Box, SimpleGrid } from "@chakra-ui/react"
import FilterComp from "../Components/FilterComp"
import Navbar from "../Components/Navbar"
import ProductList from "../Components/ProductList"

export const ProductPage=()=>{
    return (
        <>
        <Navbar/>
        <Box display={["","",'flex']} border="1px solid black" >
            <Box border={'1px solid blue'} w={['30%']} display={['flex']} justifyContent={['center']}>

                <FilterComp/>
            </Box>
            <Box margin="auto">

                <ProductList/>
            </Box>
           
        </Box>
        
        </>
    )
}