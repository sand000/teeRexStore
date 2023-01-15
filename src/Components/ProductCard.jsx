import React from 'react'
import styles from "../Styles/ProductCard.module.css";

const ProductCard = ({imageURL, name, type, price}) => {
//  console.log(imageURL)
  return (
    <div className={styles.productCard}>
       <div>
         <img src={imageURL}></img>
       </div>
       <br></br>
       <div className={styles.name}>{name}</div>
       <br></br>
       <div className={styles.details}>
          <div> Rs.{price}</div>
          <button>Add to Cart</button>
       </div>
    </div>
  )
}

export default ProductCard
