import { Box, Button, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const AdminPanel=()=>{
    const navigate=useNavigate()
    const handleClick=()=>{
        localStorage.clear()
          navigate("/")
    }
    return(
        <>
        <Box border={'1px solid black'} w={['100%']} display={['flex']}>
            <Box borderRight={'1px solid grey'} w={['20%']} h={['600px']}>
                <Box border={'1px solid black'} h={['80px']} display={['flex']} alignItems={['center']}justifyContent={['center']}>
                    <Button mr={['10px']} fontSize={['25px']} colorScheme={'blue'} fontStyle={['italic']}>i</Button>
                    <Text fontSize={['25px']}fontWeight={['500']} fontStyle={['italic']}>i-mart</Text>
                </Box>
                <Box></Box>
            </Box>
            <Box  w={['80%']} h={['600px']}>
                <Box border={'1px solid black'} h={['80px']}display={['flex']} alignItems={['center']}justifyContent={['right']}>
                    <Button onClick={handleClick} fontSize={['20px']} colorScheme={'blue'} mr={'30px'}>Sign out</Button>
                </Box>
            </Box>
        </Box>
        
        </>
    )
}