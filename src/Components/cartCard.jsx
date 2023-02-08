import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

export const CartCard = ({
  productID,
  handleDelete,
  _id,
  quantity,
  handleDecrease,
  handleIncrease,
}) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let bag = "";
  let n = productID.rating;
  for (let i = 0; i < n; i++) {
    bag = bag + "\u2B50";
  }
  return (
    <>
      <Box
        h={["auto", "auto", "auto", "250px"]}
        display={["flex", "flex", "flex", "flex"]}
        justifyContent={["center"]}
        width={["100%"]}
        mt={["10px"]}
      >
        <Box border={"1px solid grey"} w={["100px", "250px", "250px", "250px"]}>
          <Image src={productID.image} h={["100%"]} w={["100%"]}></Image>
        </Box>
        <Box
          border={"1px solid grey"}
          textAlign={["right"]}
          pr={["10px"]}
          w={["100%", "100%", "500px", "500px"]}
        >
          <Text
            fontSize={["18px", "18px", "22px", "22px"]}
            fontWeight={["500"]}
          >
            {productID.title}
          </Text>
          <Text mt={["15px"]}>{bag}</Text>
          <Text
            fontSize={["18px", "18px", "20px", "20px"]}
            fontWeight={["400"]}
            mt={["15px"]}
          >
            Price : &#x20B9;{productID.price}
          </Text>
          <Box mt={["15px"]}>
            <Button
              onClick={() => handleDecrease(_id, "dec")}
              disabled={quantity == 1}
              fontSize={["20px"]}
              colorScheme={"cyan"}
            >
              -
            </Button>
            <Button fontSize={["20px"]}>{quantity}</Button>
            <Button
              onClick={() => handleIncrease(_id, "inc")}
              fontSize={["20px"]}
              colorScheme={"cyan"}
            >
              +
            </Button>
          </Box>
          <Button
            onClick={() => handleDelete(_id)}
            colorScheme={"blue"}
            mt={["15px"]}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </>
  );
};
