import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const ResetPasswordPage = () => {
  const toast=useToast()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleclick=()=>{
    let payload={email,password}
    axios.patch("http://localhost:8080/user/update",payload)
    .then((res)=>{
      if(res.data.msg=="Password Updated Successfully"){
    toast({position:"top",title:"Password Updated Successfully"})
        navigate("/login")
      }
    })
    .catch((err)=>{
      toast({position:"top",title:"Something went wrong"})
    })
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
          Reset Password
        </Heading>
        <Text
          color="grey"
          mb={["20px"]}
          fontSize={["", "", "15px", "20px"]}
          borderBottom="1px solid grey"
        >
          Please fill in this form
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
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
