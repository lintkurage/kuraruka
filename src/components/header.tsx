import React, { ReactNode } from "react";
import Link from "next/link";
import Navi from "./navi";
import styles from "../styles/navi.module.css"

interface NaviProp{
    children?: ReactNode;
}

export default function Header({children}:NaviProp){
    return(
        <>
            <header className={styles.header}>
            <Link href="/">
            <img src="/kurarukaicon.svg" alt="navi icon" className={styles.image}/>
            </Link>
                <Navi/>
            </header>
        </>
    )
}