import { ReactNode, useState } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Image,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ProductButton from "./Productbutton";
import { SigninPopover } from "./SigninPopover";

export const MobileNavbarForAdmin = ({handleProduct,handleOrder,handleCustomer,handleClick}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
       
        w={["100%"]}
        
        display={["flex", "flex", "none", "none"]}
       
        position={['sticky']} 
        bg={'white'} zIndex={['10']} 
         top={0} right={0} left={0} 
         borderBottom={'1px solid lightblue'} h={['80px']} 
         
        
      >
        <Box display={['flex']} justifyContent={["space-between"]} alignItems={["center"]} width={['80%']} ml={['10%']}>
            <Box   h={['80px']} display={['flex']} alignItems={['center']}justifyContent={['center']}>
                        <Button mr={['10px']} fontSize={['25px']} colorScheme={'blue'} fontStyle={['italic']}>i</Button>
                        <Text fontSize={['25px']}fontWeight={['500']} fontStyle={['italic']}>i-mart</Text>
                    </Box>
                    
            <Box >
            <Button onClick={onOpen}>
                <HamburgerIcon size="100px" />
            </Button>
            </Box>
        </Box>
        <Box >
          <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
            
            <DrawerContent  height='200px' w={"100%"} mt={"80px"} bg={"white"}>
              <DrawerBody
                w={{ sm: "94%", md: "84%" }}
                ml={{ sm: "3%", md: "8%" }}
              >
                
                <Box>

                   <Button onClick={handleProduct}  bg={'none'} width={['','','100%','200px']} mt={['10px']} >Products</Button>
                </Box>
                <Box>

                   <Button onClick={handleOrder}  bg={'none'} width={['','','100%','200px']} mt={['10px']} >Orders</Button>
                </Box>
                <Box>

                   <Button  onClick={handleCustomer} bg={'none'} width={['','','100%','200px']} mt={['10px']} >Customers</Button>
                </Box>
                <Box>

                    <Button onClick={handleClick}  colorScheme={'blue'} >Sign out</Button>
                </Box>
                
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
     
    </>
  );
};
