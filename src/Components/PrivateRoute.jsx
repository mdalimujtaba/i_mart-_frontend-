import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const PrivateRoute=({children})=>{
    const navigate=useNavigate()
   
    const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
    if(!isAuth){
        navigate("/login")
    }
    return children
}