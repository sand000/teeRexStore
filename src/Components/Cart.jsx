import React from 'react';
import styles from '../Styles/Cart.module.css'

const Cart = () => {
  return (
    <div>
     <h2>Shopping Cart</h2> 
      
      <div className={styles.container}>
         <div>Image
          {/* <img src='' alt=''>Image</img> */}
         </div>
         <div>
          name
         </div>
         <div>qty</div>
         <div>
          <button>Delete</button>
         </div>
      </div>
    </div>
  )
}

export default Cart
