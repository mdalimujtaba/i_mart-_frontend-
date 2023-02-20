import {
  Box,
Button,
Popover,
PopoverArrow,
PopoverBody,
PopoverCloseButton,
PopoverContent,
PopoverHeader,
PopoverTrigger,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { useState } from "react";

export const AdminProductpopover = ({handleDelete,id,handleUpdate}) => {
const [editProduct,setEditproduct]=useState(false)
return (
  <>
    <Popover isLazy>
      <PopoverTrigger>
          <HamburgerIcon/>
      </PopoverTrigger>
      <PopoverContent width={['200px']}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody  >
          
            <Box onClick={()=>{handleUpdate({id,setEditproduct,editProduct})}}  p={['10px']} _hover={{border:'3px solid black', borderRadius:'10px'}} display={['flex']}>
                <Box mr={['10px']}><EditIcon/> </Box>
                <Box>Edit</Box>
            </Box>
          
          <Box onClick={()=>{handleDelete(id)}} p={['10px']} _hover={{border:'3px solid black', borderRadius:'10px'}} display={['flex']} mt={['20px']}>
              <Box mr={['10px']}><DeleteIcon/> </Box>
              <Box>Delete</Box>
          </Box>
         
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </>
);
};
