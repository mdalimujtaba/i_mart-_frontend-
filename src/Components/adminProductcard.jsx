import { Button, Image, Td, Tr } from "@chakra-ui/react"
import { AdminProductpopover } from "./adminProductpopover"


export const AdminProductcard=({_id,title,image,available
})=>{
    console.log(_id,title,image)
    return(
        <>
            <Tr>
                <Td><Image src={image} w={['20px']} h={['20px']}/></Td>
                <Td>{title}</Td>
                <Td >400</Td>
                <Td>{available?'Published':"Unpublished"}</Td>
                <Td cursor={'pointer'}><AdminProductpopover/></Td>
            </Tr>
        </>
    )
}