import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs';
import styles from '../Styles/SearchBar.module.css';
import MenuBar from './MenuBar';
import {getData} from './ProductsListing'

const SearchBar = ({onChange, onKeyUp}) => {

  
  return (
    <div className={styles.searchBox}>
      <div>
        <div className={styles.search}>
           <input onChange={onChange} onKeyUp={onKeyUp} type="text" placeholder='Search T-Shirts' />
        </div>
        <div className={styles.searchIcon}>
            <button><BsSearch/></button>
        </div>
        <div className={styles.MenuBar}>
          <MenuBar/>
        </div>
      </div>
        
    </div>
  )
}

export default SearchBar
