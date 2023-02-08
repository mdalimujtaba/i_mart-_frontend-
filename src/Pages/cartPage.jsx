import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CartCard } from "../Components/cartCard";
import Navbar from "../Components/Navbar";

export const CartPage = () => {
  const [data, setData] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const CartItem = () => {
    axios
      .get(`http://localhost:8080/cart/`, { headers: { Authorization: token } })
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
      .delete(`http://localhost:8080/cart/delete/${id}`, {
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
        "http://localhost:8080/cart/update",
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
        "http://localhost:8080/cart/update",
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
  let delivery = 70;
  data.map((item) => {
    total = total + item.productID.price * item.quantity;
    totalItem = totalItem + item.quantity;
  });
  let sgst = Math.floor((9 * total) / 100);
  let cgst = Math.floor((9 * total) / 100);
  let finalTotal = total + delivery + sgst + cgst;

  return (
    <>
      <Navbar />
      <Box>
        <Box w={"90%"} ml={["5%"]}>
          <Text fontWeight={[500]} fontSize={["25px", "25px", "30px", "30px"]}>
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
    </>
  );
};
