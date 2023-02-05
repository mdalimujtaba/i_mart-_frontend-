import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
export const SignupPage = () => {
  let [firstname,setFirstname]=useState("")
  let [lastname,setLastname]=useState('')
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [cpassword,setCpassword]=useState("")

  const navigate=useNavigate()

  const handleSubmit=()=>{
    let payload={firstname,lastname,email,password,cpassword}
    axios.post("https://powerful-erin-gazelle.cyclic.app/user/signup",payload)
    .then((res)=>{
      if(res.data.msg==="Signup Successfull"){
        alert("Congrats! You have successfully created your account")
        navigate("/login")
      }
      else{
        alert("Create again")

      }
    })
    firstname=""
    lastname=""
    email=""
    password=""
    cpassword=""

    
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
          Sign Up
        </Heading>
        <Text
          color="grey"
          mb={["20px"]}
          fontSize={["", "", "15px", "20px"]}
          borderBottom="1px solid grey"
        >
          Please fill in this form to create an account!
        </Text>
        <Box w={["80%"]} ml={["10%"]}>
          <Box
            display={["flex"]}
            justifyContent={["space-between"]}
            mb={["20px"]}
          >
            <Input
              type={"text"}
              placeholder="First name"
              w={["46%"]}
              h={["45px"]}
              fontSize={"20px"}
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            ></Input>
            <Input
              type={"text"}
              placeholder="Last name"
              w={["46%"]}
              h={["45px"]}
              fontSize={"20px"}
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
            ></Input>
          </Box>
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
          <Input
            type={"password"}
            placeholder="Confirm Password"
            mb={["20px"]}
            h={["45px"]}
            fontSize={"20px"}
            value={cpassword}
              onChange={(e)=>setCpassword(e.target.value)}
          ></Input>
          <Button
            fontSize={"25px"}
            colorScheme="blue"
            h={["45px"]}
            mb={["20px"]}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Text color={"blue"} mb={["30px"]}>
            Already have an account?
            <span>
              <Link to={"/login"}>Login!</Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
