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
                <div>
                    <h2 className={styles.nametext}>iruka2kurage(いるかとくらげ)</h2>
                    <div className={styles.content}>
                        <p className={styles.contenttext}>温泉といるか、くらげをこよなく愛する理系大学生。</p>
                        <p className={styles.contenttext}>専門はデジタルファブリケーション。その他、Webフロントエンド開発、ゲームや音楽制作等行っています。</p>
                        <p className={styles.contenttext}>人々にくすっと笑ってもらえるものを作ります。</p>
                        <p className={styles.contenttexth3}>X(旧Twitter): <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p className={styles.contenttexth3}>Git Hub: <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p className={styles.contenttexth3}>YouTube: <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                    </div>
                </div>
            </div>
        </>
    );

}