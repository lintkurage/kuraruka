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
                                className={styles.image}
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.textcontents}>
                            <div>
                                <h2 className={styles.nametitle}><span className="marker">iruka2kurage(いるかとくらげ)</span></h2>
                            </div>

                            <div className={styles.explanation}>
                                <p>温泉といるか、くらげをこよなく愛する理系大学生・エンジニア、1月生まれ</p>
                                <p>専攻 : 情報学</p>
                                <p>得意分野 : デジタルファブリケーション、メディア表現、Web技術、電気</p>
                                <p>学習中 : 機械学習/AI、モーションキャプチャー、感性工学、UI/UX</p>
                                <p>3Dプリンターやレーザーカッターなどを駆使してたものづくり、ゲームやWebアプリケーション制作、</p>
                                <p>音楽制作など多岐にわたる活動を行っています</p>
                                <p>アイコンはてまりまろさんに描いていただきました</p>
                                <p>てまりまろさんのXアカウント:<Link href="https://x.com/temariame14" className={styles.link}>https://x.com/temariame14</Link></p>
                                <p>今やりたいことは、温泉地紹介本制作、制作物販売など</p>
                                <p>好きなこと : 旅行・温泉地巡り、ものづくり、ゲーム</p>
                                <p>好きなゲーム : スーパーマリオ3、星のカービィシリーズ</p>
                                <p>ポートフォリオページは絶賛制作中です{/*<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link>からどうぞ*/}</p>
                                <p>X(旧Twitter) : <Link href="https://x.com/lintkurage" className={styles.link}>https://x.com/lintkurage</Link></p>
                                <p>Git Hub : <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                                <p>YouTube : <Link href="https://x.gd/cxtfQ" className={styles.link}>https://x.gd/cxtfQ</Link></p>
                                <p>HP : <Link href="/index.html" className={styles.link}>https</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}