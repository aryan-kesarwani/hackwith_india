import React from 'react'
// import styles from './navbar.module.css'
import Link from 'next/link'
import Links from './links/Links'
import Image from 'next/image'

function Navbar() {
  return (
    <div className="flex items-center justify-around   h-[7vh] w-full font-bold bg-zinc-900">
        <div className="logo">
        <Link href=""><Image src="/GROP.png" alt='' height={100} width={100}/></Link>
        </div> 
        <Links/>
    </div>
  )
}

export default Navbar
