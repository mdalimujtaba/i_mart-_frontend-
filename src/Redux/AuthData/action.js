import { useToast } from "@chakra-ui/react"
import axios from "axios"
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actiontypes"

export const GetLoginRequest=()=>{
    return {type:LOGIN_REQUEST}
}
export const GetLoginSuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const GetLoginError=()=>{
    return {type:LOGIN_ERROR}
}

export const GetLogoutRequest=()=>{
    return {type:LOGOUT_REQUEST}
}
export const GetLogoutSuccess=()=>{
    
    return {type:LOGOUT_SUCCESS}
}
export const GetLogoutError=()=>{
    return {type:LOGOUT_ERROR}
}


export const login=(payload)=>(dispatch)=>{
    
    dispatch(GetLoginRequest())
    axios.post("http://localhost:8080/user/login",payload)
    .then((res)=>{
        // console.log(res)
      dispatch(GetLoginSuccess(res.data.firstname))
      if(res.data.msg=="Login Successfull"){
        alert("Login Successful")
    }
    
    })
    .catch((err)=>{
        // console.log(err)
        dispatch(GetLoginError())
    })
}