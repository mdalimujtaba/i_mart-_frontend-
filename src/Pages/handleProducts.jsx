import { Box, Button, Text } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import axios from 'axios'
import { useEffect, useState } from "react"
import { AddProduct } from "../Components/addproductModal"
import { AdminProductcard } from "../Components/adminProductcard"

export const HandleProducts=({handleEdit})=>{
    let [data,setData]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios.get(`${process.env.REACT_APP_URL}/product`)
        .then((res)=>{
            
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleUpdate=({id,setEditproduct,editProduct})=>{
        handleEdit({id,getData,editProduct,setEditproduct})


        // console.log(id,editProduct)


    }
    const handleDelete=(id)=>{
        axios
      .delete(`${process.env.REACT_APP_URL}/product/delete/${id}`)
      .then((res) => {
        console.log(res)
        getData()
      })
      .catch((err) => {
        console.log(err);
      });
        // console.log(id)
    }

    return(
        <>
        <Box borderRadius={'15px'} border={'1px solid lightblue'}  height={['auto']}m={['30px']}>
            <Box  m={['20px']} display={['flex']} justifyContent={['space-between']}>
                <Text fontSize={'25px'} fontWeight={['500']}>Products</Text>
                {/* <Button  colorScheme={'blue'}>ADD PRODUCT</Button> */}
                <AddProduct/>
            </Box>
            <Box  m={['20px']} h={['auto']}>
            <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Title</Th>
        <Th >Inventory</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
        {data && data.map((item)=><AdminProductcard key={item.id} {...item} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)}
    </Tbody>
   
  </Table>
</TableContainer>
            </Box>
        </Box>
        
        </>
    )
}
