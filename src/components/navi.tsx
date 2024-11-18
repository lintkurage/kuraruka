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
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/about" className={styles.link}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/blog" className={styles.link}>
                            <p>Blog</p>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/contact" className={styles.link}>
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}