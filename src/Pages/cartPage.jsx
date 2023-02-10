import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "../Components/cartCard";
import Navbar from "../Components/Navbar";

export const CartPage = () => {
  const [data, setData] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const CartItem = () => {
    axios
      .get(`https://powerful-erin-gazelle.cyclic.app/cart/`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        // console.log(res)
        setData(res.data.data);
      });
  };
  useEffect(() => {
    CartItem();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://powerful-erin-gazelle.cyclic.app/cart/delete/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
    CartItem();
  };

  const handleDecrease = (id, type) => {
    console.log(type, id);
    axios
      .patch(
        "https://powerful-erin-gazelle.cyclic.app/cart/update",
        { type: type, productID: id },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        CartItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleIncrease = (id, type) => {
    console.log(type, id);
    axios
      .patch(
        "https://powerful-erin-gazelle.cyclic.app/cart/update",
        { type: type, productID: id },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        CartItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let total = 0;
  let totalItem = 0;
  let delivery = 0;
  let finalTotal = 0;
  data.map((item) => {
    total = total + item.productID.price * item.quantity;
    totalItem = totalItem + item.quantity;
  });
  let sgst = Math.floor((9 * total) / 100);
  let cgst = Math.floor((9 * total) / 100);
  if (totalItem == 0) {
    delivery = 0;
    finalTotal = 0;
  } else {
    delivery = 70;
    finalTotal = total + delivery + sgst + cgst;
  }
  return (
    <>
      <Navbar />
      {data.length > 0 ? (
        <Box>
          <Box w={"90%"} ml={["5%"]}>
            <Text
              fontWeight={[500]}
              fontSize={["25px", "25px", "30px", "30px"]}
            >
              Shopping Cart
            </Text>
          </Box>
          <Box
            w={["90%"]}
            ml={["5%"]}
            display={["", " ", " ", "flex"]}
            justifyContent={["space-between"]}
          >
            <Box w={["", "100%", "100%", "60%"]} height={["auto"]}>
              {data &&
                data.map((item) => {
                  return (
                    <CartCard
                      key={item._id}
                      {...item}
                      handleDelete={handleDelete}
                      handleDecrease={handleDecrease}
                      handleIncrease={handleIncrease}
                    />
                  );
                })}
            </Box>
            <Box h={["auto"]} w={["", "100%", "100%", "40%"]} mt={["10px"]}>
              <Box border={"1px solid grey"}>
                <Text fontSize={["25px"]} mt={["15px"]}>
                  Shopping Summary
                </Text>
                <Box
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]}>No. of items:</Text>
                  <Text fontSize={["20px"]}>{totalItem}</Text>
                </Box>
                <Box
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]}>Total Cost:</Text>
                  <Text fontSize={["20px"]}>&#x20B9;{total}</Text>
                </Box>
                <Box
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]}>SGST:</Text>
                  <Text fontSize={["20px"]}>&#x20B9;{sgst}</Text>
                </Box>
                <Box
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]}>CGST:</Text>
                  <Text fontSize={["20px"]}>&#x20B9;{cgst}</Text>
                </Box>
                <Box
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]}>Delivery:</Text>
                  <Text fontSize={["20px"]}>&#x20B9;{delivery}</Text>
                </Box>
                <Box
                  borderTop={"1px solid black"}
                  borderBottom={"1px solid black"}
                  p={["10px"]}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                >
                  <Text fontSize={["20px"]} fontWeight={"600"}>
                    SubTotal:
                  </Text>
                  <Text fontSize={["20px"]} fontWeight={"600"}>
                    &#x20B9;{finalTotal}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Text fontWeight={[500]} fontSize={["25px", "25px", "30px", "30px"]}>
            Your Cart is Empty!
          </Text>
          <Box
            display={"flex"}
            justifyContent={["center"]}
            alignItems={"center"}
            border={"1px solid grey"}
            h={["250px", "300px", "300px", "300px"]}
            w={["90%", "80%", "80%", "80%"]}
            ml={["5%", "10%", "10%", "10%"]}
            mt={["50px"]}
          >
            <Link to={"/product"}>
              <Button colorScheme={"blue"}>Continue Shopping</Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};
