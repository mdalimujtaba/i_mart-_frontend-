import { Box, Button, Heading, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const AdminLogin = () => {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  const navigate=useNavigate()
  
  const toast=useToast()

  const handleclick=()=>{
    let payload={email,password}
    if(payload){
      axios.post(`${process.env.REACT_APP_URL}/admin/login`,payload)
      .then((res)=>{
        console.log(res)
        if(res.data.msg=="Login Successfull"){
            toast({title:"Login Successfull", position:'top'})
            localStorage.setItem("adminToken",JSON.stringify(res.data.token))
            navigate("/adminpanel")
        }else{
            toast({title:"Enter Correct Credentials", position:'top'})
        }
      })
      .catch((err)=>{
        console.log(err)
      })
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
          For Admin Only
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
          
          
        </Box>
      </Box>
    </Box>
  );
};
