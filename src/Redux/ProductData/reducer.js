import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./actionTypes"


const initialState={
    products:[],
    isLoading:false,
    isError:false
}
export const AppReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCT_LOADING:{return {...state,isLoading:true}}
        case GET_PRODUCT_SUCCESS:{return {...state,isLoading:false,products:action.payload}}
        case GET_PRODUCT_ERROR:{return {...state,isLoading:false,isError:true}}
        default:return state
    }
}