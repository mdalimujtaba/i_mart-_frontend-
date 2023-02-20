import { Box, Text } from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react'
import axios from "axios"
import { useState } from "react"
export const EditProduct=({id,getData})=>{
  
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [category,setCategory]=useState("")
    const [type,setType]=useState("")
    const [price,setPrice]=useState("")
    const [available,setAvailable]=useState(true)
    const [rating,setRating]=useState('')
    const [desc,setDesc]=useState([])
    const toast=useToast()

    
    return(
        <>
        <Box borderRadius={'15px'} border={'1px solid lightblue'}  height={['auto']}m={['30px']}>
            <Box  m={['20px']} display={['flex']} justifyContent={['space-between']}>
                <Text fontSize={'25px'} fontWeight={['500']}>Edit Product</Text>

            </Box>
            <Box  m={['20px']}>

              <FormLabel>Image URL</FormLabel>
                <Input value={image} onChange={(e)=>setImage(e.target.value)}  placeholder='Enter Image Url' />
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='Enter Title' />
                <FormLabel>Category</FormLabel>
                <Input value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder='Men or Women' />
                <FormLabel>Type</FormLabel>
                <Input value={type} onChange={(e)=>setType(e.target.value)}  placeholder='Enter shirt or jeans case sensitive' />
                <FormLabel>Price</FormLabel>
                <Input value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder='Enter Price' />
                <FormLabel>Available</FormLabel>
                <Input value={available} onChange={(e)=>setAvailable(e.target.value)}  placeholder=' Enter true or false' />
                <FormLabel>Rating</FormLabel>
                <Input value={rating} onChange={(e)=>setRating(e.target.value)}  placeholder='Enter Rating in numerals' />
                <FormLabel>Description</FormLabel>
                <Input value={desc} onChange={(e)=>setDesc(e.target.value)}  placeholder='Enter Description' />
                
            </Box>
           
  
           
         
       
        </Box>
        
        </>
    )
}