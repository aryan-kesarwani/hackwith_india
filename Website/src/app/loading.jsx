import React from 'react'
import styles from "./loading.module.css"
function loading() {
  return (
     <div class={styles.lds_roller}>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    
  )
}

export default loading
