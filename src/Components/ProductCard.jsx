import { Box, Button, Image } from "@chakra-ui/react";

function ProductCard({ productData }) {
  return (
    <Box border={"1px solid grey"}>
      <Box >
        <Image
          src={productData.image}
          width={['200px']}
          h={['200px']}
        />
      </Box>
      <Box>{productData.title}</Box>
      
      <Box>&#x20B9;{productData.price}</Box>
      <Button colorScheme={'blue'}>ADD TO CART</Button>
    </Box>
  );
}
export default ProductCard;
