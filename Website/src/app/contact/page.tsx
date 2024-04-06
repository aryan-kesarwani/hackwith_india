import React from 'react'
import styles from "./contact.module.css"
function page() {
  return (
    <div className={styles.container}>
      <div className="leading-5">
        <h6 className='text-2xl text-yellow-500'>Get in touch</h6>
        <h1 className='text-6xl font-bold'>Reach Out and Grow Your Financial Potential</h1>
        <h6 className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam?</h6>
        <input type="text" placeholder='Name' name="" id="" className={styles.inp} />
        <input type="text" name="" placeholder='email' id="" className={styles.inp} />
        <input type="text" name="" placeholder='message' id="" className={styles.inp} />
      </div>
      <div className="">
        <h2 className='text-yellow-500'>Visit Us</h2>
        <h5 className='font-bold'>Shivamrsnr990@gmail.com</h5>
        <h5 className='font-bold' >Shivamrsnr990@gmail.com</h5>
        <h5 className='font-bold'>Shivamrsnr990@gmail.com</h5>
        <div className="h-[50vh] w-[50vh] bg-white"></div>
      </div>
    </div>
  )
}

export default page
