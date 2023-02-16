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


export const login=({payload,toast,isAuth,navigate})=>(dispatch)=>{
    dispatch(GetLoginRequest())
    axios.post(`${process.env.REACT_APP_URL}/user/login`,payload)
    .then((res)=>{
        if(res.data.msg=="Login Successfull"){
            toast({title:"Login Successfull" , position:"top"})
            localStorage.setItem("token",JSON.stringify(res.data.token))
          dispatch(GetLoginSuccess(res.data.firstname))
          navigate("/")
    }
    else{
        toast({title:"Enter Correct Credential" , position:"top"})
    }
    
    })
    .catch((err)=>{
        // console.log(err)
        dispatch(GetLoginError())
    })
}