import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/indexhero.module.css"

export default function Indexhero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.headertopmain}>
                    <div className={styles.image}>
                        <Image
                            src="/marinindex.jpg"
                            width={1200}
                            height={450}
                            alt="index1"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.profilearea}>
                <h1 className={styles.profiletext}>PROFILE</h1>
                <hr className={styles.line} />
            </div>
        </>
    );

}