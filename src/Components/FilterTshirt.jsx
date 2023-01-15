import React from 'react'
import styles from '../Styles/FilterTshirt.module.css'

const FilterTshirt = ({onChange, name, id}) => {

  console.log(name)
  
  return (
    <div className={styles.filterBox}>
      {/* color */}
      <div>
        <h3>Color</h3>
        <div className={styles.innerBox}>
          <div>
              <input 
                 type='checkbox'
                 id={id}
                 name={name}
                 onChange={onChange}></input>
              <label>Red</label>
          </div>
          <div>
              <input 
                type='checkbox'
                id={id}
                name={name}
                onChange={onChange}></input>
              <label>Blue</label>
          </div>
          <div>
              <input 
                type='checkbox'
                id={id}
                name={name}
                onChange={onChange}></input>
              <label>Green</label>
          </div>
        </div>
       
      </div>

      {/* gender */}
      <div>
        <h3>Gender</h3>
        <div className={styles.innerBox}>
            <div>
                <input type='checkbox'></input>
                <label>Men</label>
            </div>
            <div>
                <input type='checkbox'></input>
                <label>Women</label>
            </div>
        </div>
      </div>

      {/* Price */}
      <div>
        <h3>Price</h3>
        <div className={styles.innerBox}>
          <div>
              <input type='checkbox'></input>
              <label>0-Rs250</label>
          </div>
          <div>
              <input type='checkbox'></input>
              <label>Rs 251-450</label>
          </div>
          <div>
              <input type='checkbox'></input>
              <label>Rs 450</label>
          </div>
        </div>
      </div>

       {/* Type */}
       <div>
        <h3>Type</h3>
        <div className={styles.innerBox}>
          <div>
              <input type='checkbox'></input>
              <label>Polo</label>
          </div>
          <div>
              <input type='checkbox'></input>
              <label>Hoodie</label>
          </div>
          <div>
              <input type='checkbox'></input>
              <label>Basic</label>
          </div>
        </div>
       </div>

    </div>
  )
}

export default FilterTshirt
