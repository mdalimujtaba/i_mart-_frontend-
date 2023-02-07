import { Box, Button, Image, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect } from "react";


export const CartCard=(product)=>{
   
    let token=JSON.parse(localStorage.getItem('token'))
    // const handleDelete=()=>{
    //     axios.delete(`http://localhost:8080/cart/delete/${product.id}`,{headers:{'Authorization':token}})
    // }
    // useEffect(()=>{
    //     handleDelete()
    // },[])
    let bag = "";
    let n=product.product.rating
  for (let i = 0; i < n; i++) {
    bag = bag + "\u2B50";
  }
    return(
        <>
        <Box border={'4px solid white'} h={['250px']}  w={['250px']} display={['flex']}  width={['100%']}>
            <Box border={'1px solid grey'} w={['250px']}>
                <Image src={product.product.image} h={['100%']} w={['100%']}></Image>
            </Box>
            <Box border={'1px solid grey'} textAlign={['right']}  w={['500px']}>
                <Text fontSize={['22px']} fontWeight={['500']}>{product.product.title}</Text>
                <Text mt={["15px"]}>{bag}</Text>
                <Text fontSize={["20px"]} fontWeight={["400"]} mt={["15px"]}>
                    Price : &#x20B9;{product.product.price}
                </Text>
                <Button  colorScheme={'blue'}mt={["15px"]}>Delete</Button>
            </Box>
        </Box>
        
        </>
    )
}