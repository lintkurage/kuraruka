import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "src/styles/contact.module.css"

export default function Contactcontents() {
    return (
        <>
            <div>
                <div>
                    <h1 className={styles.titletext}>Contact</h1>
                    <hr className={styles.line} />
                </div>
                <div className={styles.contents}>
                    <div>
                        <h3 className={styles.Requestcon}><span className={styles.Request}>制作物のリクエスト、お問い合わせについて</span></h3>
                        <p>可能な限り、リクエストやお仕事はお受けいたします</p>
                        <p>研究に直結することを優先しておりますが一度ご相談ください<br />
                            研究対象:3Dプリンター等のものづくり、UI/UXデザイン、モーションキャプチャー、機械学習</p>
                        <p>何かございましたら内容と連絡先を記載の上、以下のメールアドレスまでご連絡ください</p>
                        <h3 className={styles.address}><span className={styles.mail}>連絡先: lintkurage@gmail.com</span></h3>
                        <p>2日から5日程度で返信いたします <br />
                            大学生のため学業、研究などで忙しい場合がございます<br />
                            特に7月後半、1月後半から2月前半<br />
                            お相手様がわからない場合やリクエストに関しては、メールにはお返事できないことがあります
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.Requestcon}><span className={styles.Request}>各種SNSについて</span></h3>
                        <p>以下のSNSを運用しております<br /><br /></p>
                        <p>X(旧Twitter): <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>日常や旅行、温泉、研究についてなどを発信</p>
                        <p >Git Hub: <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>個人開発のコード、電子工作で使用したコードを掲載</p>
                        <p>YouTube: <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>気が向いたときに様々なコンテンツを発信</p>
                        <p>HP: <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>Web技術、ゲーム開発、温泉、音楽等様々なコンテンツについてのブログ記事を発信</p>
                    </div>
                </div>
            </div>
        </>
    );
}