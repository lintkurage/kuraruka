import React from "react";
import Link from "next/link";
import styles from "../styles/navi.module.css"

export default function Navi() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link href="/" className={styles.link}>
                            <p className={styles.text}>Home</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/about" className={styles.link}>
                            <p className={styles.text}>About</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/blog" className={styles.link}>
                            <p className={styles.text}>Blog</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/contact" className={styles.link}>
                            <p className={styles.text}>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}