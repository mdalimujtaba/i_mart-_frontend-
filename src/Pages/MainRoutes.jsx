import {Route, Routes} from "react-router-dom"
import { PrivateRoute } from "../Components/PrivateRoute"
import { AdminLogin } from "./adminLogin"
import { AdminPanel } from "./adminPanel"
import { CartPage } from "./cartPage"
import { HistoryPage } from "./HistoryPage"
import {HomePage} from "./HomePage"
import { LoginPage } from "./Login"
import { PaymentPage } from "./PaymentPage"
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
            <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
            <Route path="/payment" element={<PrivateRoute><PaymentPage/></PrivateRoute>}/>
            <Route path="/history" element={<PrivateRoute><HistoryPage/></PrivateRoute>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/adminpanel" element={<AdminPanel/>}/>
        </Routes>
    )
}