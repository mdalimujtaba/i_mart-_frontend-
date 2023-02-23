import { Button, Image, Td, Tr } from "@chakra-ui/react";

export const AdminOrdercard = ({serialNumber,date,_id,finalTotal,product,userID,contact,address}) => {
  return (
    <>
      <Tr>
        <Td>{serialNumber}</Td>
        <Td>{date}</Td>
        <Td>{_id}</Td>
        <Td>{userID.firstname}</Td>
        <Td>&#x20B9; {finalTotal}</Td>
      </Tr>
    </>
  );
};
