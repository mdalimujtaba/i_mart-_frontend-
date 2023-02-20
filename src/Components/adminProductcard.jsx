import { Button, Image, Td, Tr } from "@chakra-ui/react"
import { AdminProductpopover } from "./adminProductpopover"


export const AdminProductcard=({_id,title,image,available,handleDelete,handleUpdate})=>{
   
    return(
        <>
            <Tr>
                <Td><Image src={image} w={['20px']} h={['20px']}/></Td>
                <Td>{title}</Td>
                <Td >400</Td>
                <Td>{available?'Published':"Unpublished"}</Td>
                <Td cursor={'pointer'}><AdminProductpopover handleDelete={handleDelete} handleUpdate={handleUpdate} id={_id}/></Td>
            </Tr>
        </>
    )
}