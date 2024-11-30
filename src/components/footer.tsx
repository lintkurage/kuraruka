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
                        <h3 className={styles.licensetext}>{license}</h3>
                        <h3 className={styles.licensetext}>(C) kuraruka All Rights Reserved.</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}