import { Button, Image, Td, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { ProductDetailModal } from "./orderedProductdetailModal";

export const AdminOrdercard = ({serialNumber,date,_id,finalTotal,product,userID,contact,address}) => {
  let data=[]
  for(let i=0;i<product.length;i++){
    data.push(product[i].productID)
  }
  return (
    <>
      <Tr>
        <Td>{serialNumber}</Td>
        <Td>{date}</Td>
        <Td><ProductDetailModal product={data} contact={contact} address={address} id={_id}/></Td>
        <Td>{userID.firstname}</Td>
        <Td>&#x20B9; {finalTotal}</Td>
      </Tr>
    </>
  );
};
