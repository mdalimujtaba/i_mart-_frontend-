import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react"

export const Footer=()=>{
    return(
        <>
            <Box bg={'lightgrey'} width={['100%']} height={['auto','','400px']} mt={['20px']}>

                <SimpleGrid  columns={[1,1,3]} h={['100%']} width={['90%']} ml={['5%']}>
                    <Box  h={['70%']} mt={['15%']} textAlign={['center']}>
                        <Heading  mb={'20px'}>Who We Are</Heading>
                        <Link fontSize={'20px'} color="blue">
                            <Text>About Company</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Our History</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Creator</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Review </Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Events</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Brands</Text>
                        </Link>
                    </Box>
                    <Box  h={['70%']} mt={['15%']}  textAlign={['center']}>
                    <Heading  mb={'20px'}>Services & Program</Heading>
                        <Link fontSize={'20px'} color="blue">
                            <Text>VIP Rewards</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Students</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Policies</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Warranties</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Legal</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Terms</Text>
                        </Link>
                    </Box>
                    <Box  h={['70%']} mt={['15%']}  textAlign={['center']}>
                         <Heading mb={'20px'}>How Can We Help?</Heading>
                        <Link fontSize={'20px'} color="blue">
                            <Text>customer Services</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Shipping & Delivery</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Return Policy</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Track your order</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>International order</Text>
                        </Link>
                        <Link fontSize={'20px'} color="blue">
                            <Text>Contact us</Text>
                        </Link>
                    </Box>

                </SimpleGrid>
            </Box>
        
        </>
    )
}