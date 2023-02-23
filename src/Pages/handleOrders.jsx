import { Box, Button, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AdminOrdercard } from "../Components/adminOrdercard";

export const HandleOrders = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/order/`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box
        borderRadius={"15px"}
        border={"1px solid lightblue"}
        height={["auto"]}
        m={["30px"]}
      >
        <Box m={["20px"]} display={["flex"]} justifyContent={["space-between"]}>
          <Text fontSize={"25px"} fontWeight={["500"]}>
            Orders
          </Text>
        </Box>
        <Box m={["20px"]} h={["auto"]}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Date</Th>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((item, index) => (
                    <AdminOrdercard
                      key={item.id}
                      {...item}
                      serialNumber={index + 1}
                    />
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
