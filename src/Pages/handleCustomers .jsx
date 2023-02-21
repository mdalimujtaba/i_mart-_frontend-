import { Box, Text } from "@chakra-ui/react";
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
import { AdminCustomercard } from "../Components/customerCard";

export const HandleCustomers = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/user/`)
      .then((res) => {
        // console.log(res)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/user/delete/${id}`)
      .then((res) => {
        getData();
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
            Customers
          </Text>
        </Box>
        <Box m={["20px"]} h={["auto"]}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th> First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((item) => (
                    <AdminCustomercard
                      key={item.id}
                      {...item}
                      handleDelete={handleDelete}
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
