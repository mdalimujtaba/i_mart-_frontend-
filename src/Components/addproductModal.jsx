import React, { useState } from 'react'
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
import axios from 'axios'
export const AddProduct=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [category,setCategory]=useState("")
    const [type,setType]=useState("")
    const [price,setPrice]=useState("")
    const [available,setAvailable]=useState(true)
    const [rating,setRating]=useState('')
    const [desc,setDesc]=useState([])
    const toast=useToast()
    const handleClick=()=>{
      if(image==""||title=="" || category=="" || type=="" || price=="" || available=="" || rating=="" || desc==""){
        toast({title:"fill all input",position:"top"})
      }
      else{
        let payload={image,title,category,type,price,available,rating,desc}
        axios.post(`${process.env.REACT_APP_URL}/product/addproduct`,payload)
        .then((res)=>{
          // console.log(res)
          if(res.data.msg=="Product added to database"){
            toast({title:"Product added to database",position:"top"})

          }
          else{
        toast({title:"Something went wrong",position:"top"})

          }
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    }
  
    return (
      <>
        <Button onClick={onOpen} colorScheme={'blue'}>ADD PRODUCT</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
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
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleClick} colorScheme='blue' mr={3}>
                Save
              </Button>
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }