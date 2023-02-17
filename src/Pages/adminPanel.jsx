import { Box, Button, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { RiProductHuntLine } from "react-icons/ri";
import { HandleProduct, HandleProducts } from "./handleProducts";
import { HandleCustomers } from "./handleCustomers";
import { HandleOrders } from "./handleOrders";
import { useState } from "react";

export const AdminPanel=()=>{
    const navigate=useNavigate()
    const [product,setProduct]=useState(true)
    const [order,setOrder]=useState(false)
    const [customer,setCustomer]=useState(false)
    const handleClick=()=>{
        localStorage.clear()
          navigate("/")
    }
    const handleProduct=()=>{
        setProduct(true)
        setOrder(false)
        setCustomer(false)
        // <HandleProducts/>
    }
    const handleCustomer=()=>{
        setCustomer(true)
        setProduct(false)
        setOrder(false)
        // <HandleCustomers/>
    }
    const handleOrder=()=>{
        setOrder(true)
        setProduct(false)
        setCustomer(false)
        // <HandleOrders/>
    }
    return(
        <>
        <Box border={'1px solid black'} w={['100%']} display={['flex']}>
            <Box  w={['20%']} h={['600px']} position={['sticky']} zIndex={['1030']}  top={0} bottom={0} left={0}>
                <Box  h={['80px']} display={['flex']} alignItems={['center']}justifyContent={['center']}>
                    <Button mr={['10px']} fontSize={['25px']} colorScheme={'blue'} fontStyle={['italic']}>i</Button>
                    <Text fontSize={['25px']}fontWeight={['500']} fontStyle={['italic']}>i-mart</Text>
                </Box>
                <Box borderBottom={['1px solid lightblue']} mt={['50px']} pb={['20px']}>
                   
                        <Button onClick={handleProduct}  bg={'none'} width={['250px']} mt={['10px']} >Products</Button>
                    
                    
                        <Button onClick={handleOrder}  bg={'none'} width={['250px']} mt={['10px']} >Orders</Button>
                    
                   
                        <Button onClick={handleCustomer}  bg={'none'} width={['250px']} mt={['10px']} >Customers</Button>
                    

                </Box>
            </Box>
            <Box borderLeft={'1px solid lightblue'}  w={['80%']} h={['1000px']}>
                <Box borderBottom={'1px solid lightblue'} h={['80px']}display={['flex']} alignItems={['center']}justifyContent={['right']}>
                    <Button onClick={handleClick} fontSize={['20px']} colorScheme={'blue'} mr={'30px'}>Sign out</Button>
                </Box>
                <Box >
                    {product &&<HandleProducts/>}
                    {customer && <HandleCustomers/>}
                    {order && <HandleOrders/>}
                </Box>
            </Box>
        </Box>
        
        </>
    )
}