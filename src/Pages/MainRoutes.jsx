import {Route, Routes} from "react-router-dom"
import { PrivateRoute } from "../Components/PrivateRoute"
import {HomePage} from "./HomePage"
import { LoginPage } from "./Login"
import { ProductPage } from "./Productpage"
import { ResetPasswordPage } from "./ResetPassPage"
import { SignupPage } from "./Signup"
import { SinglePage } from "./SingleProductPage"
export const MainRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product" element={<PrivateRoute><ProductPage/></PrivateRoute>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/resetpassword" element={<ResetPasswordPage/>}/>
            <Route path="/singleProduct/:id"  element={<PrivateRoute><SinglePage/></PrivateRoute>}/>
        </Routes>
    )
}