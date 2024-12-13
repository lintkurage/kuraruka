import React, {useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/contents.module.css"

export default function Contents() {
    //画像の大きさパラメータ
    const imagewidth=400
    const imagehight=240
    const modilesize=768

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 初期判定
        const updateMobileView = () => {
            setIsMobile(window.innerWidth <= modilesize); 
        };

        updateMobileView();
        // リサイズイベントリスナー
        window.addEventListener("resize", updateMobileView);
        return () => window.removeEventListener("resize", updateMobileView);
    }, []);

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
                        <Link href="/blog/makewebsite">
                        <img src="/kurarukahero.png" alt="works01" className={styles.image}/>
                           </Link> 
                    </div>
                    <div className={styles.textcontents}>
                    <Link href="/blog/makewebsite"><h2><span className="marker">My Home Page</span></h2> </Link> 
                        <div className={styles.contentstext}>
                            <p>このWebサイトとポートフォリオサイトは、Nextjs+TypeScriptを用いて制作しました。</p>
                            <p>Conoha VPS+ドメインで公開しています。あまり情報がなかったので構築に苦戦しました。<br />
                            Docker化を行いkamalを使用して公開しました.</p>
                            <p>BlogページはMicroCMSで管理しています。</p>
                            <p>Portfolioページは現在作成中です</p>
                            <p>ポートフォリオページでは、スキルセット、研究などについて記載する予定です</p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p>機材 : MacBook Pro(コーディング) , 自作PC(デザイン)</p>
                                <p >フロントエンド: Nextjs 14.2.15 , TypeScript , CSS</p>
                                <p>バックエンド : Nodejs  CMS : Micro CMS バージョン管理 : Git , GitHub</p>
                                <p>グラフィック・UI/UX・デザイン : Adobe Illustrator , PhotoShop , StoryBook 8.3.6 </p>
                                <p>VPS : Conoha VPS <br />
                                その他 : Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*くらげらんぷ*/}
                <div className={styles.workscontents}>
                    <div className={styles.imagecontents}>
                        <img src="/kurarukaimage.png" alt="works01" className={styles.image}/>
                    </div>
                    <div className={styles.textcontents}>
                            <h2><span className="marker">くらげらんぷ</span></h2>
                        <div className={styles.contentstext}>
                            <p>ものづくり活動の一環としてくらげのかたちをしたランプを作成してみました。</p>
                            <p>3Dプリンターを使用して制作しました。</p>
                            <p>くらげのかたちが可愛くできて大満足の作品となりました。</p>
                            <p>ちょうど京都水族館でくらげらんぷのイベントがあったので参考にしました</p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p>機材 : MacBook Pro , Bambu X1 Carbon</p>
                                <p>材料 : PLAフィラメント , 鉄パイプ , ランプレセプタクル(E17型) , VVF-1.6-2 , コネクタ類 </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 水槽に飾るくらげ */}
                <div className={styles.workscontents}>
                    <div className={styles.imagecontents}>
                        <img src="/modelingeyecatch.png" alt="works01" className={styles.image}/>
                    </div>
                    <div className={styles.textcontents}>
                            <h2><span className="marker">くらげポッド 水草Version</span></h2>
                        <div className={styles.contentstext}>
                            <p>研究課題で水槽で水草を育てる際に必要となり可愛い水槽、水草の移動しやすさと育てやすさを考慮して制作しました。</p>
                            <p>研究室にある3Dプリンターを使用して制作しました。</p>
                            <p>くらげよりたこに見えてしまったのが心残りではあるが足を動かすためのひんじ作成をこだわりました</p>
                            <p>ひんじの隙間について最適な大きさがわかるようにモデルも製作してみました</p>
                            <p>制作した記事は<Link href="/blog/kuragepod" className={styles.portfoliolink}>こちら</Link></p>
                            <div>
                                <h3 className={styles.useingsofttext}>使用機材・技術</h3>
                                <p >機材 : MacBook Pro , Bambu X1 Carbon,Bambu P1S</p>
                                <p >材料 : PLAフィラメント </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* next Contents */}
            </div>
        </>
    );
}

