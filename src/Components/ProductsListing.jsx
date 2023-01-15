import React from 'react'
import FilterTshirt from './FilterTshirt'
import styles from '../Styles/ProductsListing.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
  

 export let getData = async() =>{
  let data = await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
  data = await data.json();
  return data;
 }


const ProductsListing = () => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(()=>{
     getData()
       .then((res)=>{
        setData(res)
       })
  },[])

  const handleChange = (e) => {
    if(e.target.checked){
      setSelected([...selected, e.target.color]);
    }else{
      setSelected(selected.filter((s)=> s !== e.target.color));
    }
  }

  const handleSearchText = () =>{
     let text = data.filter((e)=>{
         let s = searchText.split(" ");
         if(e.color === s[0] && e.type === s[1] || 
            e.color.toLowerCase() === s[0] && e.type.toLowerCase() === s[1] || 
            e.color.toUpperCase() === s[0] && e.type.toUpperCase() === s[1]){
            return e;
         }else{
          return false;
         }
     })
     return text.length? text:data 
  }

 console.log(selected)

  return (
    <div>
       <SearchBar  onChange={(e)=>setsearchText(e.target.value)} onKeyUp={(e)=>handleSearchText(e)}/>
       <div className={styles.productBox}>
          <div className={styles.filter}>
            <FilterTshirt onChange={(e)=>handleChange()} name={selected.color} id={selected.id}/>
          </div>
          <div className={styles.product}>
             {handleSearchText().map((e)=>{
               return(
                <div>
                  <ProductCard  imageURL={e.imageURL} name={e.name} type={e.type} price={e.price}/>
                </div>
               )
             })}
          </div>
       </div>
    </div>
  )
}

export default ProductsListing
