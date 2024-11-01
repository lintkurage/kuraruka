import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/aboutcontents.module.css"

export default function Aboutcontents() {
    return (
        <>
            <div className={styles.contents}>
                <div>
                    <h1 className={styles.titletext}>Development Environment</h1>
                    <hr className={styles.line} />
                </div>
                <div>
                    <div className={styles.developmentenvironment}>
                        <div className={styles.imagecontents}>
                            <Link href="/">
                                <Image
                                    src="/indexpengin.jpg"
                                    width={450}
                                    height={300}
                                    alt="works01"
                                />
                            </Link>
                        </div>
                        <div>
                            <div>
                                <h3 className={styles.texth3}>MacBook Pro 16inch 2021</h3>
                                <ul>
                                    <li><p className={styles.devtext}>Processor : Apple M1Pro</p></li>
                                    <li><p className={styles.devtext}>Memory : 16GB</p></li>
                                    <li><p className={styles.devtext}>OS : MacOS Sonoma 14.6 (2024/10/31時点)</p></li>
                                    <li><p className={styles.devtext}>使用用途 : Webアプリケーション開発、プログラミング全般、モデリング、動画編集</p></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.texth3}>自作PC</h3>
                                <ul>
                                    <li><p className={styles.devtext}>Processor : Intel Core i7 14700K</p></li>
                                    <li><p className={styles.devtext}>Memory : 32GB</p></li>
                                    <li><p className={styles.devtext}>GPU : GeForce RTX 4070Ti</p></li>
                                    <li><p className={styles.devtext}>OS : Windows 11</p></li>
                                    <li><p className={styles.devtext}>使用用途 : ゲーム開発、音楽制作、モデリング、動画編集</p></li>
                                </ul>      
                            </div>
                            <div>
                                <h3 className={styles.texth3}>周辺機器</h3>
                                <ul>
                                    <li><p className={styles.devtext}>オーディオインターフェイス : UR22C</p></li>
                                    <li><p className={styles.devtext}>MIDIキーボード : M-AUDIO KEYSTATION 61 MK3</p></li>
                                    <li><p className={styles.devtext}>タブレット : ipad Air(第5世代),Apple Pencil(第2世代)</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}