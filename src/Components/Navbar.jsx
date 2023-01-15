import React from 'react';
import styles from '../Styles/Navbar.module.css'

import {BsFillCartDashFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigateCart  = useNavigate();
  const navigatePro = useNavigate();

  const handleCartClick = () => {
    navigateCart('/cart')
  }

  const handleProClick = () => {
    navigatePro('/')
  }


  return (
    <div className={styles.container}>
       <div className={styles.main}>
            <div onClick={handleProClick}>TeeRex Store</div>
            <div className={styles.cart}>
              <div onClick={handleProClick} className={styles.pro}>Products</div>
               <div onClick={handleCartClick}><BsFillCartDashFill/></div>
            </div>
       </div>
    </div>
  )
}

export default Navbar
