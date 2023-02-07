import { Box, SimpleGrid } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { CartCard } from "../Components/cartCard"
import Navbar from "../Components/Navbar"

export const CartPage=()=>{
    const [data,setData]=useState([])
   
    const CartItem=()=>{
        const token=JSON.parse(localStorage.getItem("token"))
        axios.get(`http://localhost:8080/cart/`,{headers:{"Authorization":token}})
        .then((res)=>{
            console.log(res)
            setData(res.data.data)
            
        })
    }
    useEffect(()=>{
        CartItem()
    },[])
    
    return(
        <>
        <Navbar/>
        <Box border={'1px solid black'} w={'90%'} ml={['5%']} display={['flex']}>
            {/* <Box border={'1px solid red'} w={['60%']} h={['250px']} display={['flex']}>
                <Box border={'1px solid red'} w={['40%']}></Box>
                <Box border={'1px solid red'} w={['60%']}></Box>
            </Box> */}
            <Box border={'5px solid black'} height={['auto']} >
                {data && data.map((item)=>{
                  return  <CartCard product={item.productID} id={item._id}/>
                })}
            </Box>
            <Box border={'1px solid blue'} w={['40%']}></Box>

        </Box>
        </>
    )
}