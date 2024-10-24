import React, { ReactNode } from "react";
import Image from "next/image";
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
                <Image className={styles.image}
                    src="/kurarukaicon.svg"
                    width={250}
                    height={50}
                    alt="navi icon"
                />
            </Link>
                <Navi/>
            </header>
        </>
    )
}