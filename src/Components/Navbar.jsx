import React from 'react'
import {Box, Image} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import ProductButton from './Productbutton';
import { SigninPopover } from './SigninPopover';
import { MobileNavbar } from './navbar_for_Mobile';
import { Search } from './searchFeatures';


const Navbar = () => {
  const {isAuth}=useSelector((state)=>state.AuthReducer)
  const navigate=useNavigate()
  const handleClick=()=>{
    if(isAuth){
      navigate("/cart")
    }
    else{
      navigate("/")
    }
  }
  return (
    <>
    <Box position={['sticky']} zIndex={['1030']}  top={0} right={0} left={0} width={['100%']} height={['130px']} bg={['rgb(0,63,127)']}>
      <Box  borderBottom={['0.5px solid grey']} w={['100%']} h={['65%']} display={['none','flex','flex',"flex"]}>
        <Box   h={['100%']} width={["30%","20%","30%",'50%']} >
          <Link to={"##"}>
          <Image  src='https://i.postimg.cc/HkHSdshq/i-mart-removebg-preview.png' ml={["","","",'10px']}  mt={['0px']} height={['100%']} w={["","","50%",'40%']} alt='logo'/>
          </Link>
          
        </Box>
        <Box   h={['100%']} width={["70%","80%","70%",'50%']} display={['flex']}  alignItems={['center']} justifyContent={['space-around']}>
          
          <ProductButton/>
          <SigninPopover/>
          <Box onClick={handleClick} cursor='pointer' w={['7%']} h={['50%']}display={['flex']}  alignItems={['center']}> 
          
              <Image src='https://i.postimg.cc/BnwcxWds/baseline-shopping-cart-white-24dp.png'm={'0px'} h={['fit-content']}w={['fit-content']}/>
         
          </Box>
        </Box>
      </Box>
    <MobileNavbar/>
      <Box w={['100%']} h={['30%']} display={['flex']} alignItems={['center']}>
      <Search/>
      </Box>
    </Box>
    </>
    )
}

export default Navbar