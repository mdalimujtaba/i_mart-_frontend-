import { Box, Button, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { RiProductHuntLine } from "react-icons/ri";
import { HandleProduct, HandleProducts } from "./handleProducts";
import { HandleCustomers } from "./handleCustomers";
import { HandleOrders } from "./handleOrders";
import { useState } from "react";
import { EditProduct } from "../Components/editProduct";
import { MobileNavbarForAdmin } from "../Components/adminNavbarformobilescreen";

export const AdminPanel=()=>{
    const navigate=useNavigate()
    const [product,setProduct]=useState(true)
    const [order,setOrder]=useState(false)
    const [customer,setCustomer]=useState(false)
    const [edit,setEdit]=useState(false)
    const [product_id,setId]=useState('')

    const handleClick=()=>{
        localStorage.clear()
          navigate("/")
    }
    const handleProduct=()=>{
        setProduct(true)
        setOrder(false)
        setCustomer(false)
        setEdit(false)

        // <HandleProducts/>
    }
    const handleCustomer=()=>{
        setCustomer(true)
        setProduct(false)
        setOrder(false)
        setEdit(false)

        // <HandleCustomers/>
    }
    const handleOrder=()=>{
        setOrder(true)
        setProduct(false)
        setCustomer(false)
        setEdit(false)
        // <HandleOrders/>
    }
    const handleUpdate=({id,getData,editProduct,setEditproduct})=>{
        editProduct==false?setEdit(true):setEdit(false)
        setOrder(false)
        setProduct(false)
        setCustomer(false)
        setEdit(true)
        setId(id)
        
    }
    console.log(edit)
    return(
        <>
        <Box  w={['100%']} display={['flex']}>
            <Box  w={['20%']} h={['600px']} position={['sticky']} zIndex={['1030']}  top={0} bottom={0} left={0} display={['none','none','block','block']} >
                <Box  h={['80px']} display={['flex']} alignItems={['center']}justifyContent={['center']}>
                    <Button mr={['10px']} fontSize={['25px']} colorScheme={'blue'} fontStyle={['italic']}>i</Button>
                    <Text fontSize={['25px']}fontWeight={['500']} fontStyle={['italic']}>i-mart</Text>
                </Box>
                <Box borderBottom={['1px solid lightblue']} mt={['50px']} pb={['20px']}>
                   
                        <Button onClick={handleProduct}  bg={'none'} width={['','','100%','200px']} mt={['10px']} >Products</Button>
                    
                    
                        <Button onClick={handleOrder}  bg={'none'} width={['','','100%','200px']} mt={['10px']} >Orders</Button>
                    
                   
                        <Button onClick={handleCustomer}  bg={'none'} width={['','','100%','200px']} mt={['10px']} >Customers</Button>
                    

                </Box>
            </Box>
            <Box borderLeft={'1px solid lightblue'}  w={['100%','100%','80%','80%']} h={['auto']} >
                <Box display={['none','none','flex','flex']} position={['sticky']} bg={'white'} zIndex={['10']}  top={0} right={0} left={0} borderBottom={'1px solid lightblue'} h={['80px']} alignItems={['center']}justifyContent={['right']}>
                    <Button onClick={handleClick} fontSize={['20px']} colorScheme={'blue'} mr={'30px'}>Sign out</Button>
                </Box>
                    <MobileNavbarForAdmin handleProduct={handleProduct} handleOrder={handleOrder} handleCustomer={handleCustomer} handleClick={handleClick} />
                
                <Box >
                {product &&<HandleProducts handleEdit={handleUpdate}/>}
                    {customer && <HandleCustomers/>}
                    {order && <HandleOrders/>}
                    {edit && <EditProduct id={product_id}/>}
                </Box>
            </Box>
        </Box>
        
        </>
    )
}