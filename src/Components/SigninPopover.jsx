import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Box,
    Image,
    Text,
    Button,
  } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
import { GetLogoutSuccess } from "../Redux/AuthData/action";
  export const SigninPopover = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
      let {isAuth,firstname}=useSelector((state)=>state.AuthReducer)
        const handleClick=()=>{
          dispatch(GetLogoutSuccess())
          localStorage.clear()
          navigate("/")
        }
        const handleHistory=()=>{
          navigate("/history")
        }
    return (
      
      <Popover>
        <PopoverTrigger >
          <Box  w={['20%']} h={['50%']} display={['flex']} justifyContent={['center']} alignItems={['center']} cursor={'pointer'}> 
             
              <Box h={['100%']}  width={['30%']} display={'flex'} justifyContent={['center']} alignItems={['center']}>
                  <Image m={'0px'} h={['fit-content']}w={['fit-content']} src='https://i.postimg.cc/zvNj2Czk/baseline-perm-identity-white-24dp.png'/>
              </Box>
              <Box display={'flex'} justifyContent={['center']} alignItems={['center']}>
                  <Text color={'white'} textAlign={'center'}>{isAuth?firstname:"SignIn"}</Text>
              </Box>
  
          </Box>
        </PopoverTrigger>
        <PopoverContent width={['230px']} ml={['10px']} a>
          <PopoverArrow />
          <PopoverCloseButton />
          <Box>
              
          {isAuth?(<Button onClick={handleClick} _hover={{bg:"skyblue"}} bg={['skyblue']} mt={['15px']} mb={['15px']} pt={['10px']} pb={['10px']} pl={['70px']} pr={['70px']} >
                 Logout
              </Button>):(<Link to={"/login"}>
              <Button onClick={handleClick} _hover={{bg:"skyblue"}} bg={['skyblue']} mt={['15px']} mb={['15px']} pt={['10px']} pb={['10px']} pl={['70px']} pr={['70px']} >
                 Login
              </Button>
              </Link >)}
              {
                isAuth?(<Button onClick={handleHistory} _hover={{bg:"skyblue"}} bg={['skyblue']} mt={['15px']} mb={['15px']}  >
                Previous order
            </Button>):null
              }
              
              <Link to={"/signup"}><Text color={'blue'} mb={['15px']}>Create New Account</Text></Link>
              <Link to={"##"} ><Text color={'blue'} mb={['15px']}>For Admin Only</Text></Link>
  
          </Box>
          
        </PopoverContent>
      </Popover>
    );
  };