import React, { ReactNode } from "react";
import styles from "../styles/footer.module.css"
import Link from "next/link";

interface FooterProp {
    license: string;
}

export default function Footer({ license }: FooterProp) {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.navcontents}>
                    <nav className={styles.nav}>
                        {/* メニューリスト */}
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link href="/" className={styles.link}>
                                    <p className={styles.linkfont}>Home</p>
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/about" className={styles.link}>
                                    <p className={styles.linkfont}>About</p>
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/blog" className={styles.link}>
                                    <p className={styles.linkfont}>Blog</p>
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/contact" className={styles.link}>
                                    <p className={styles.linkfont}>Contact</p>
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link href="/privacypolicy" className={styles.link}>
                                    <p className={styles.linkfont}>Privacy Policy</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footercontents}>
                    <div>
                        <p className={styles.licensetext}>{license}</p>
                        <h3 className={styles.licensetext}>(C) kuraruka All Rights Reserved.</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}