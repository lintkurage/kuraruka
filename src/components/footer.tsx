import Link from "next/link"
import React, { ReactNode } from "react";
import styles from "../styles/footer.module.css"

interface FooterProp{
    license:string;
}

export default function Footer({license}:FooterProp){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footercontents}>
                    <div>
                        <p className={styles.licensetext}>{license}</p>
                        <p className={styles.licensetext}>(C) kuraruka All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}