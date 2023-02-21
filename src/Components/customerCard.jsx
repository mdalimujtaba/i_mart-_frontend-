import { Button, Image, Td, Tr } from "@chakra-ui/react";

export const AdminCustomercard = ({
  _id,
  firstname,
  lastname,
  email,
  handleDelete,
}) => {
  return (
    <>
      <Tr>
        <Td>{firstname}</Td>
        <Td>{lastname}</Td>
        <Td>{email}</Td>
        <Td>
          <Button onClick={() => handleDelete(_id)} colorScheme={"blue"}>
            Remove
          </Button>
        </Td>
      </Tr>
    </>
  );
};
