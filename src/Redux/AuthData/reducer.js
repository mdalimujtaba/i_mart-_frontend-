import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actiontypes"

const initialState={
    isAuth:false,
    firstname:"",
    isAuthLoading:false,
    isAuthError:false
}
export const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:{return {...state,isAuthLoading:true}}
        case LOGIN_SUCCESS:{return{
            ...state,
            isAuthLoading:false,
            isAuth:true,
            firstname:action.payload
        }}
        case LOGIN_ERROR:{return {...state,isAuthLoading:false,isAuthError:true}}
        case LOGOUT_REQUEST:{return {...state,isAuthLoading:true}}
        case LOGOUT_SUCCESS:{return{
            ...state,
            isAuthLoading:false,
            isAuth:false,
            firstname:""
        }}
        case LOGOUT_ERROR:{return {...state,isAuthLoading:false,isAuthError:true}}
        default:return state
    }
}