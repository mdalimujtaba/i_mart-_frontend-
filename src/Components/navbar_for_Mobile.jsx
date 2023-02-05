import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  background,
  Text,
  RadioGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Radio,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ProductButton from "./Productbutton";
import { SigninPopover } from "./SigninPopover";

export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderBottom={["0.5px solid grey"]}
        w={["100%"]}
        h={["65%"]}
        display={["flex", "none", "none", "none"]}
        justifyContent={["space-around"]}
        alignItems={["center"]}
        
      >
        <Box
          h={["100%"]}
          width={["30%", "30%", "20%", "50%"]}
        >
          <Image
            src="https://i.postimg.cc/HkHSdshq/i-mart-removebg-preview.png"
            ml={["", "", "", "10px"]}
            height={["100%"]}
            w={["", "", "50%", "40%"]}
            alt="logo"
          />
        </Box>
        <Box
          w={["7%"]}
          h={["50%"]}
          display={"flex"}
          alignItems="center"
        >
          <Link to="##">
            <Image
              src="https://i.postimg.cc/BnwcxWds/baseline-shopping-cart-white-24dp.png"
              m={"0px"}
              h={["fit-content"]}
              w={["fit-content"]}
            />
          </Link>
        </Box>
        <Box>
          <Button onClick={onOpen}>
            <HamburgerIcon size="100px" />
          </Button>
        </Box>
        <Box color={"rgb(0,63,127)"}>
          <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
            <DrawerFooter />
            <DrawerContent  height='200px' w={"100%"} mt={"80px"} bg={"rgb(0,63,127)"}>
              <DrawerBody
                w={{ sm: "94%", md: "84%" }}
                ml={{ sm: "3%", md: "8%" }}
              >
                <Box  pt={"20px"} pb={"20px"} display="flex" justifyContent={'center'}>
                    <SigninPopover />
                </Box>
                <Box  pt={"20px"} pb={"20px"} display="flex" justifyContent={'center'}>
                  <ProductButton />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
     
    </>
  );
};
