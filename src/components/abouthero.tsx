import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/abouthero.module.css"

export default function Abouthero() {
    return (
        <>
            <div className={styles.hero}>
                <div>
                    <h1 className={styles.titletext}>About Me</h1>
                    <hr className={styles.line} />
                </div>
                <div className={styles.heropos}>
                    <div className={styles.contents}>
                        <div>
                            <Image
                                src="/kurarukacharacter.PNG"
                                width={300}
                                height={300}
                                alt="kurarukacharactericon"
                            />
                        </div>
                        <div className={styles.textcontents}>
                            <div>
                                <h2 className={styles.nametitle}>iruka2kurage(いるかとくらげ)</h2>
                            </div>

                            <div className={styles.explanation}>
                                <p className={styles.text}>温泉といるか、くらげをこよなく愛する理系大学生・エンジニア</p>
                                <p className={styles.text}>1月生まれ</p>
                                <p className={styles.text}>専攻 : 情報学</p>
                                <p className={styles.text}>得意分野 : デジタルファブリケーション、メディア表現、Web技術、電気</p>
                                <p className={styles.text}>学習中 : 機械学習/AI、モーションキャプチャー、感性工学、UI/UX</p>
                                <p className={styles.text}>3Dプリンターやレーザーカッターなどを駆使してたものづくり、ゲームやWebアプリケーション制作、</p>
                                <p className={styles.text}>音楽制作など多岐にわたる活動を行っています</p>
                                <p className={styles.text}>今やりたいことは、温泉地紹介本制作、制作物販売など</p>
                                <p className={styles.text}>好きなこと : 旅行・温泉地巡り、ものづくり、ゲーム</p>
                                <p className={styles.text}>好きなゲーム : スーパーマリオ3、星のカービィシリーズ</p>
                                <p className={styles.text}>ポートフォリオページは<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link>からどうぞ</p>
                                <p className={styles.contenttexth3}>X(旧Twitter) : <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                                <p className={styles.contenttexth3}>Git Hub : <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                                <p className={styles.contenttexth3}>YouTube : <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                                <p className={styles.contenttexth3}>HP : <Link href="/index.html" className={styles.link}>https</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}