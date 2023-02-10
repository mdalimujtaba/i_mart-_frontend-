import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

function FilterComp(){
    const [searchparams,setSearchparams]=useSearchParams()
    // check if the url had any data ,before setting the data to an empty array.

    const initaialCategory=searchparams.getAll('category')
    const initialSort=searchparams.getAll('sort')
    // console.log(initaialCategory )
    const [category,setCategory]=useState(initaialCategory||[])
    const [sort,setSort]=useState(initialSort[0]||'')

    const handleFilterCheckbox=(e)=>{
        // check if the data is present in the category,
        const newCategories=[...category]
        //if yes, then remove it (the user has un-checked the checkbox)\
        if(newCategories.includes(e.target.value)){
            //remove it
            newCategories.splice(newCategories.indexOf(e.target.value),1)
        }else{
            //else add it in the category array
            newCategories.push(e.target.value)
        }
        setCategory(newCategories)
    }
    const handleSort=(e)=>{
        setSort(e.target.value)
    }


    useEffect(()=>{
        let params={}
        params.category=category;
       sort && (params.sort=sort);
        // console.log(params)
        setSearchparams(params)
    },[category,setSearchparams,sort])
    // console.log(category)
    // console.log(sort)
    return(
        <div>
            <Text fontSize={['20px']}fontWeight={['500']}>Apply Filter</Text>
            <div> <Text fontSize={['18px']}fontWeight={['500']}>Category wise</Text>
                <div>
                    <input type="checkbox" checked={category.includes("jeans")} value={"jeans"} onChange={handleFilterCheckbox}/>
                    <label >Jeans</label>
                </div>
                <div>
                    <input type="checkbox" checked={category.includes("shirt")} value={'shirt'} onChange={handleFilterCheckbox}/>
                    <label >Shirt</label>
                </div>
                {/* <div>
                    <input type="checkbox" checked={category.includes("Science_Fiction")} value={'Science_Fiction'} onChange={handleFilterCheckbox}/>
                    <label >Science Fiction</label>
                </div>
                <div>
                    <input type="checkbox" checked={category.includes("Thriller")} value={"Thriller"} onChange={handleFilterCheckbox}/>
                    <label >Thriller</label>
                </div> */}
            </div>
            <Text fontSize={['18px']}fontWeight={['500']}>Sort By Price</Text>
            <div onChange={handleSort}>
                <input type="radio" value={'asc'} name="sortBy" defaultChecked={sort==='asc'}/>
                <label >Ascending</label>
                <br />
                <input type="radio" value={'desc'} name="sortBy" defaultChecked={sort==='desc'}/>
                <label >Descending</label>
            </div>

        </div>
    )
}
export default FilterComp