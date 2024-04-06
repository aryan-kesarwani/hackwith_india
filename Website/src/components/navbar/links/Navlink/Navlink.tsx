"use client"
import { usePathname } from "next/navigation"
import styles from "./navlink.module.css"
import Link from "next/link"
function navLink({item}: any) {

   const pathName = usePathname();
  return (
    <div>
       <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} >
        {item.title}
       </Link>
    </div>
  )
}

export default navLink
