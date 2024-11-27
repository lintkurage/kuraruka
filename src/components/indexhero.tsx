import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/indexhero.module.css"

export default function Indexhero() {
    //画像の大きさパラメータ
    const mainimagewidth=1000
    const mainimagehight=400
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.headertopmain}>
                    <div className={styles.image}>
                        <Image
                            className={styles.img}
                            src="/kurarukahero.png"
                            width={mainimagewidth}
                            height={mainimagehight}
                            alt="index1"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.profilearea}>
                <h1 className={styles.profiletext}>PROFILE</h1>
                <hr className={styles.line} />
                <div>
                    <h3 className={styles.nametext}>iruka2kurage(いるかとくらげ)</h3>
                    <div className={styles.content}>
                        <p>温泉といるか、くらげをこよなく愛する理系大学生。</p>
                        <p>専門はデジタルファブリケーション。その他、Webフロントエンド開発、ゲームや音楽制作等行っています。</p>
                        <p>人々にくすっと笑ってもらえるものを作っています。</p>
                        <p>X(旧Twitter): <Link href="https://x.com/lintkurage" className={styles.link}>https://x.com/lintkurage</Link></p>
                        <p >Git Hub: <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>YouTube: <Link href="https://x.gd/cxtfQ" className={styles.link}>hhttps://x.gd/cxtfQ</Link></p>
                    </div>
                </div>
            </div>
        </>
    );

}