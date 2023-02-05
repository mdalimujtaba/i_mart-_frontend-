import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login} from "../Redux/AuthData/action";
export const LoginPage = () => {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const toast=useToast()
  const {isAuth,firstname}=useSelector((state)=>state.AuthReducer)
  if(isAuth){
    navigate("/")

  }
 
  const handleclick=()=>{
    let payload={email,password}
    if(payload){
      dispatch(login(payload))
    }
    
  

  }
  return (
    <Box
      bg={"blackAlpha.800"}
      width={["100%"]}
      height={["", "auto", "700px", "700px"]}
      position={["relative"]}
    >
      <Box
        position={"absolute"}
        bg={"white"}
        width={["", "100%", "38%", "28%"]}
        h={["auto"]}
        ml={["", "", "31%", "36%"]}
        mt={["8%"]}
        color="gray"
      >
        <Heading color={"black"} mb={["25px"]} pt={["30px"]}>
          Login
        </Heading>
        <Text
          color="grey"
          mb={["20px"]}
          fontSize={["", "", "15px", "20px"]}
          borderBottom="1px solid grey"
        >
          Please fill in this form to Login!
        </Text>
        <Box w={["80%"]} ml={["10%"]}>
          <Input
            type={"email"}
            placeholder="Email"
            mb={["20px"]}
            h={["45px"]}
            fontSize={"20px"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          ></Input>
          <Input
            type={"password"}
            placeholder="Password"
            mb={["20px"]}
            h={["45px"]}
            fontSize={"20px"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          ></Input>
          <Button
            fontSize={"25px"}
            colorScheme="blue"
            h={["45px"]}
            mb={["30px"]}
            onClick={handleclick}
          >
            Log In
          </Button>
          <Link to="/resetpassword">
            <Text color={"blue"} mb={["30px"]}>
              Reset Your Password
            </Text>
          </Link>
          <Text color={"blue"} mb={["30px"]}>
            Don't have an account?
            <span>
              <Link to={"/signup"}>Create it!</Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
