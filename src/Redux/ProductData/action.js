import axios from 'axios'
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from './actionTypes'
const getproductLoading=()=>{
    return {type:GET_PRODUCT_LOADING}
}
const getproductSuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}
const getproductError=()=>{
    return {type:GET_PRODUCT_ERROR}
}


function getProduct(params){
    return function (dispatch){
        dispatch(getproductLoading())
        return axios.get("https://powerful-erin-gazelle.cyclic.app/product/",params)
        .then((r)=>{
            dispatch(getproductSuccess(r.data.data))
        })
        .catch((e)=>{
            dispatch(getproductError())
        })
    }
}
export default getProduct