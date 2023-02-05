import { Box, Button, Image, ListItem, OrderedList, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"

export const  SinglePage=()=>{
    const [data,setData]=useState({})
    const params=useParams()
    
    useEffect(()=>{
        axios.get(`https://powerful-erin-gazelle.cyclic.app/product/${params.id}`)
        .then((res)=>{
            // console.log(res)
            setData(res.data.data)
        })
    },[params.id])
    console.log('data',data)
    let bag=""
    
    for(let i=0;i<data.rating;i++){
        bag=bag+"\u2B50";
    }
   
   


    return(
        <>
        <Navbar/>
        <SimpleGrid  h={['600px']} width={'90%'} ml={['5%']}  columns={[1,2]} spacing={['20px']}>
            <Box borderRight={'1px solid grey'}  bg={'lightgrey'}  h={['100%']} >
                <Image src={data.image} h={'600px'} w={'100%'}></Image>
            </Box>
            <Box  h={['100%']}textAlign={'left'}>
                <Text fontSize={['25px']} fontWeight={['500']}  mt={['20px']}>{data.title}</Text>
                <Text  mt={['15px']}>{bag}</Text>
                <Text fontSize={['20px']} fontWeight={['400']}  mt={['15px']}>Price : &#x20B9;{data.price}</Text>
                <Button colorScheme={"blue"} mt="20px">ADD TO CART</Button>
                <Box  width={['80%']}>
                    <Text fontSize={['25px']} fontWeight={['500']}  mt={['20px']}>Product Details :</Text>
                    <UnorderedList>
                        <ListItem>Material: Cotton</ListItem>
                        <ListItem>Pattern: Solid</ListItem>
                        <ListItem>Collar: Regular</ListItem>
                        <ListItem>Long sleeve shirt with single chest pocket</ListItem>
                        <ListItem>Pair it with formal trousers and formal shoes for office or occasion wear</ListItem>
                        <ListItem>Fabric: Cotton Lycra</ListItem>
                        <ListItem>Style: Jeans ;Pattern: Solid</ListItem>
                        <ListItem>Rise: Mid Rise ;Closure: Button ;Length: Full length</ListItem>
                        <ListItem>Age Range Description: Adult; Leg Style: Tapered</ListItem>
                    </UnorderedList>
                </Box>
            </Box>

        </SimpleGrid>
       
        </>
    )
}