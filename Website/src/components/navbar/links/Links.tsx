"use client"
import Navlink from "./Navlink/Navlink";
import styles from "./links.module.css"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "graph",
        path: "/graph"

    }, {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Features",
        path: "/feature",
    },
];
const Links = () => {
    const [open, setOpen] = useState(false);


    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (

        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link => (
                    <Navlink item={link} key={link.title} />
                )))}
                {session ? (
                    <>
                        {
                            isAdmin &&
                            (
                                <Navlink item={{ title: "Admin", path: "/admin" }} />
                            )
                        }
                        <Link className={styles.logout} href="/login">Log-in</Link>
                    </>
                ) : (
                    <Navlink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            {/* <Image 
            className={styles.menuBtn}
            src="" 
            alt=""
            width={30} 
            height={30} 
            onClick={() => setOpen((prev) => !prev)} /> */}


            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => (
                            <Navlink item={link} key={link.title} />
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Links;