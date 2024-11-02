import React, { ReactNode } from "react";
import styles from "../styles/bloghero.module.css"

export default function Bloghero() {
    return (
        <>
            <div>
                <div className={styles.content}>
                    <h1 className={styles.titletext}>Blog</h1>
                    <hr className={styles.line} />
                </div>
            </div>
        </>
    );
}