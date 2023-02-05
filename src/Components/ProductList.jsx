import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import getProduct from "../Redux/ProductData/action";
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";


function ProductList(){
    const product=useSelector((store=>store.AppReducer.products))
    const dispatch=useDispatch()
    const location =useLocation()
   
    const [searchParams]=useSearchParams()
    useEffect(()=>{
        //if I don't have any product in redux, then make the API call
        if(location || product.length===0){
                const sortBy=searchParams.get('sort')
                const getProductParams={
                    params:{
                        category:searchParams.getAll('category'),
                        _sort:sortBy&&'price',
                        _order:sortBy
                    }
                }
            dispatch(getProduct(getProductParams))
        }
    },[dispatch,location.search])
    return(
        <SimpleGrid border='1px solid black' columns={[1,2,3]} spacing={['20px']}>
            
            {product.length>0 && product.map(singleProduct=>{
                return (<Link key={singleProduct._id} to={`/singleProduct/${singleProduct._id}`}><ProductCard productData={singleProduct} /></Link>)
            })}
        </SimpleGrid>
    )

}

export default ProductList