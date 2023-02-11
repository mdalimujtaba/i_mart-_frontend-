import { Box, Button, FormControl, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"

export const PaymentPage=()=>{
    const [data, setData] = useState([]);
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")
    const [state,setState]=useState("")
    const [country,setCountry]=useState("")
    const [pincode,setPincode]=useState(null)
    const [number,setNumber]=useState(null)
    const toast=useToast()
    const navigate=useNavigate()

    
   
    const token = JSON.parse(localStorage.getItem("token"));
    const CartItem = () => {
        axios
        .get(`https://powerful-erin-gazelle.cyclic.app/cart/`, { headers: { Authorization: token } })
        .then((res) => {
            // console.log(res)
            setData(res.data.data);
        });
    };
    useEffect(() => {
        CartItem();
    }, []);
    const handleClick=()=>{
        if(firstname==""||lastname==""||email==""||address==""||state==""||country==""||pincode==null||number==null){
            toast({title:"fill all field",position:"top"})
        }
        else{
            let payload={firstname,lastname,email,address,state,country,pincode,number}
            toast({title:"Order placed successfully" ,position:"top"})
            navigate("/")
        }
    }
      let total = 0;
  let totalItem = 0;
  let delivery = 0;
  let finalTotal = 0;
  data.map((item) => {
    total = total + item.productID.price * item.quantity;
    totalItem = totalItem + item.quantity;
  });
  let sgst = Math.floor((9 * total) / 100);
  let cgst = Math.floor((9 * total) / 100);
  if (totalItem == 0) {
    delivery = 0;
    finalTotal = 0;
  } else {
    delivery = 70;
    finalTotal = total + delivery + sgst + cgst;
  }
    return (
        <>
        <Navbar/>
        <Box  width={['94%','','90%','90%']} ml={['3%','','5%','5%']} display={['','','flex','flex']} justifyContent={['','','space-between','space-between']}>
            <Box  w={['100%','','50%','50%']}>
                <Text fontSize={['25px']} fontWeight={['500']} mb={['30px']} mt={['30px']}> Billing Details</Text>
                <Box>
                    <Input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} required placeholder="First Name"  outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} required placeholder="Last Name" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Enter  Email" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} required placeholder="Enter  Address" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} required placeholder="Enter State" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} required placeholder="Enter Country" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="number" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} required placeholder="Enter Pincode" outlineColor={'blackAlpha.800'} mb={['30px']}/>
                    <Input type="tel" value={number} onChange={(e)=>{setNumber(e.target.value)}} required placeholder="Enter  Contact No." outlineColor={'blackAlpha.800'} mb={['30px']}/>
                </Box>
                    
                


            </Box>
            <Box  w={['100%','','40%','40%']} >
                <Box bgColor={'lightcyan'} padding={['30px']}>

                <Text fontSize={['25px']} fontWeight={['500']} mb={['30px']} > Your Order Details</Text>
                {data && data.map((item)=>{
                    return (<Box borderBottom={'1px solid grey'} paddingBlock={['10px']} fontWeight={['500']} display={['flex']} justifyContent={['space-between']} width={['100%']}> 
                        <Text textAlign={['start']}>{item.productID.title}</Text>
                        <Text textAlign={['end']}>&#x20B9;{item.productID.price}</Text>
                         </Box>)
                })}
                <Box
                  
                  borderBottom={"1px solid grey"}
                  paddingBlock={['10px']}
                  display={["flex"]}
                  justifyContent={["space-between"]}
                  >
                  <Text fontSize={["20px"]} fontWeight={"600"}>
                    SubTotal:
                  </Text>
                  <Text fontSize={["20px"]} fontWeight={"600"}>
                    &#x20B9;{finalTotal}
                  </Text>
                </Box>
                    <Button onClick={handleClick} colorScheme={'blue'} paddingInline={['40px']} mt={['30px']}>Place Order</Button>
                    </Box>
            </Box>

        </Box>
        
        </>
    )
}