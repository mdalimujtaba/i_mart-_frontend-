
import { ReactNode } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {  ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function ProductButton(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
         <Menu isOpen={isOpen} >
              <MenuButton
              
              varient='ghost'
                
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                fontWeight={500}
                backgroundColor="rgb(0,63,127)"
                _hover={{ color: "white" ,backgroundColor:"rgb(0,63,127)"}}
                border={'none'}
                p={0}
                color= "white"
                fontSize={'20px'}
              >
                Products
                {<ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                    <Link to={"/product"}>

                    <Text ml={6}>Jeans</Text>
                    </Link>
                    
                  </Box>
                </MenuItem>
                <MenuItem
                  _hover={{
                    borderRadius: "7px",
                    color: "white",
                    bg:"blue"
                  }}
                >
                  <Box alignItems={"center"}>
                    <Link to={"/product"}>
                    <Text ml={6}>Shirts</Text>
                    </Link>
                  </Box>
                </MenuItem>
                
               
              </MenuList>
            </Menu>
        </>
    )
}