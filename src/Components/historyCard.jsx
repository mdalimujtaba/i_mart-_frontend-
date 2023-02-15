import { Box, Image, Text } from "@chakra-ui/react";

export const HistoryCard = ({ address, date, product }) => {
  return (
    <Box
      border={"1px solid grey"}
      borderTopRadius="10px"
      h={"auto"}
      mt={["30px"]}
    >
      <Box
        h={["80px"]}
        bg={"aquamarine"}
        borderTopRadius="10px"
        borderBottom={"1px solid grey"}
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={["space-around"]}
      >
        <Text fontSize={["12px", "", "15px", "18px"]}>
          ORDER PLACED <br />
          {date}
        </Text>
        <Box>
          <Text fontSize={["12px", "", "15px", "18px"]}>
            SHIP TO <br />
            {address}
          </Text>
        </Box>
      </Box>
      <Box>
        {product &&
          product.map((item) => {
            return (
              <Box
                borderBottom={"1px solid grey"}
                key={item.id}
                h={["200px"]}
                display={["flex"]}
              >
                <Box w={["200px"]}>
                  <Image src={item.productID.image} h={["100%"]} />
                </Box>
                <Box
                  textAlign={"center"}
                  display={["flex"]}
                  alignItems={["center"]}
                  justifyContent={["space-around"]}
                >
                  <Text fontSize={["25px"]} fontWeight={[500]}>
                    {item.productID.title}
                  </Text>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
