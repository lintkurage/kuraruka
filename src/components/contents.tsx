import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/contents.module.css"

export default function Contents() {
    return (
        <>
            <div className={styles.contents}>
                <div>
                    <h1 className={styles.titletext}>Works</h1>
                    <hr className={styles.line} />
                </div>

                {/*HPContentsです*/}
                <div className={styles.workscontents}>
                    <div className={styles.imagecontents}>
                        <Link href="/">
                            <Image
                                src="/indexpengin.jpg"
                                width={600}
                                height={400}
                                alt="works01"
                            />
                        </Link>
                    </div>
                    <div className={styles.textcontents}>
                        <Link href="/" className={styles.link}>
                            <h2 className={styles.contentstitle}>Portfolio Web site and My Home Page</h2>
                        </Link>
                        <div className={styles.contentstext}>
                            <p className={styles.text}>このWebサイトとポートフォリオサイトは、Nextjs+TypeScriptを用いて制作しました。</p>
                            <p className={styles.text}>レンタルサーバーを借りて公開しているため、静的に変換して公開しています。</p>
                            <p className={styles.text}>BlogページはMicroCMSで管理しています。</p>
                            <p className={styles.text}>Portfolioページは<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link>または、Aboutページの自己紹介欄のリンクからどうぞ</p>
                            <p className={styles.text}>ポートフォリオページでは、スキルセット、研究などについて記載されていますので気軽に見ていってね!</p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p className={styles.techtext}>機材 : MacBook Pro(コーディング) , 自作PC(デザイン)</p>
                                <p className={styles.techtext}>フロントエンド: Nextjs 14.2.15 , TypeScript , CSS</p>
                                <p className={styles.techtext}>バックエンド : Nodejs  CMS : Micro CMS  CI/CD : GitHubActions バージョン管理 : Git , GitHub</p>
                                <p className={styles.techtext}>グラフィック・UI/UX・デザイン : Adobe Illustrator PhotoShop , StoryBook 8.3.6 </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*くらげらんぷ*/}
                <div className={styles.workscontents}>
                    <div className={styles.imagecontents}>
                        <Link href="/">
                            <Image
                                src="/indexkurage.jpg"
                                width={600}
                                height={400}
                                alt="works01"
                            />
                        </Link>
                    </div>
                    <div className={styles.textcontents}>
                        <Link href="/" className={styles.link}>
                            <h2 className={styles.contentstitle}>くらげらんぷ</h2>
                        </Link>
                        <div className={styles.contentstext}>
                            <p className={styles.text}>ものづくり活動の一環としてくらげのかたちをしたランプを作成してみました。</p>
                            <p className={styles.text}>研究室にある3Dプリンターを使用して制作しました。</p>
                            <p className={styles.text}>くらげのかたちが可愛くできて大満足の作品となりました。</p>
                            <p className={styles.text}>制作した記事は<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link></p>
                            <p className={styles.text}>くらげのstlデータは<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link></p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p className={styles.techtext}>機材 : MacBook Pro , Bambu X1 </p>
                                <p className={styles.techtext}>材料 : PLAフィラメント , 鉄パイプ , ランプレセプタクル(E17型) , VVF-1.6-2 , コネクタ類 </p>
                                <p className={styles.techtext}>グラフィック・UI/UX・デザイン : Autodesk Fusion</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 水槽に飾るくらげ */}
                <div className={styles.workscontents}>
                    <div className={styles.imagecontents}>
                        <Link href="/">
                            <Image
                                src="/indexkurage.jpg"
                                width={600}
                                height={400}
                                alt="works01"
                            />
                        </Link>
                    </div>
                    <div className={styles.textcontents}>
                        <Link href="/" className={styles.link}>
                            <h2 className={styles.contentstitle}>くらげポッド 水草Version</h2>
                        </Link>
                        <div className={styles.contentstext}>
                            <p className={styles.text}>水槽で水草を育てる際に必要となり可愛い水槽、水草の移動しやすさを考慮して制作しました。</p>
                            <p className={styles.text}>研究室にある3Dプリンターを使用して制作しました。</p>
                            <p className={styles.text}>くらげ作りすぎかもしれませんね</p>
                            <p className={styles.text}>制作した記事は<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link></p>
                            <p className={styles.text}>くらげのstlデータは<Link href="/portfolio" className={styles.portfoliolink}>こちら</Link></p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p className={styles.techtext}>機材 : MacBook Pro , Bambu X1 </p>
                                <p className={styles.techtext}>材料 : PLAフィラメント </p>
                                <p className={styles.techtext}>グラフィック・UI/UX・デザイン : Autodesk Fusion</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* next Contents */}
            </div>
        </>
    );
}

