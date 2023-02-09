import { Box, Button, Image,Text } from "@chakra-ui/react";

function ProductCard({ productData }) {
  let bag = "";
  let n=productData.rating
  for (let i = 0; i < n; i++) {
    bag = bag + "\u2B50";
  }
  return (
    <Box border={"1px solid grey"} bgColor={'lightgrey'} width={['90%','','','300px']} ml={['5%','','','']} mb={['20px']} h={['350px']}>
      <Box h={['70%']}>
        <Image
          src={productData.image}
          width={['100%']}
          h={['100%']}
        />
      </Box>
      <Box h={['30%']}>

        <Box textAlign={'left'} ml={['10px']} fontWeight={['500']}>{productData.title}</Box>
        <Text textAlign={'left'} ml={['10px']}>{bag}</Text>
        <Box textAlign={'left'} ml={['10px']} fontWeight={['500']}>&#x20B9;{productData.price}</Box>
      </Box>
    </Box>
  );
}
export default ProductCard;
