import React, { useState } from "react";
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
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
export const ProductDetailModal = ({ product, contact, address, id }) => {
    // console.log(product)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Text
        onClick={onOpen}
        _hover={{
          color: "blue",
          borderBottom: "1px solid blue",
          width: "fit-content",
        }}
      >
        {id}
      </Text>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ordered Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {product.map((item) => {
              return (
                <Box border={'1px solid lightgrey'} key={item._id} display={['flex']} alignItems={['center']}>
                  <Image src={item.image} width={['150px']} h={['150px']}/>
                  <Text as="b">{item.title}</Text>
                </Box>
              );
            })}
            <Box >
                <Text as="b">Address: </Text>
                <Text>{address}</Text>
            </Box>
            <Box >
                <Text as="b">Contact No. : </Text>
                <Text>{contact}</Text>
            </Box>
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  );
};
