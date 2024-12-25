import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "src/styles/privacypolicycontents.module.css"

export default function PrivacyPolicycontents() {
    return (
        <>
            <div>
                <div>
                    <h1 className={styles.titletext}>プライバシーポリシー / Praivacy Policy</h1>
                    <hr className={styles.line} />
                </div>
                <div className={styles.contents}>
                    <div>
                        <p>くらるかブログ/kuraruka blog(以下、「当サイト」とします.)は、訪問者のプライバシーを尊重し、個人情報の保護に努めています.<br />
                            本プライバシーポリシー(以下、「本ポリシー」とします.)は、当サイトがどのように情報を収集、使用、管理するかを説明しています.</p>
                    </div>
                    <div className={styles.PrivacyPolicycontents}>
                        <div className={styles.policy}>
                            <h3><span className="marker">当サイトの運営情報</span></h3>
                            <p>運営者 : iruka2kurage / いるかとくらげ</p>
                            <p>ブログ名 : くらるかブログ / kuraruka blog</p>
                            <p>Web Page URL : https://iruka2kurage.com</p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">初出掲載日及び最終改定日</span></h3>
                            <p>初出掲載日 : 2024年12月25日</p>
                            <p>最終改定日 : 2024年12月25日</p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第1条 個人情報の定義</span></h3>
                            <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します.</p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第2条 個人情報の収集と利用</span></h3>
                            <p>当サイトでは、お問い合わせ時に、名前（ハンドルネーム）、メールアドレス等の個人情報をお尋ねすることがあります. <br />
                                これらの情報は、お問い合わせへの回答や必要な情報を電子メールでご連絡する場合にのみ使用し、これらの目的以外では使用いたしません.</p>
                        </div>
                        <div className={styles.policy}>
                            <h3 ><span className="marker">第3条 クッキー（Cookie）について</span></h3>
                            <p>当サイトは、Googleアドセンスによる広告配信や訪問者のサイト利用状況の把握のためにクッキー（Cookie）を使用することがあります. <br />
                                クッキーは、訪問者のブラウザを通じて情報を収集しますが、個人を特定するものではありません. <br />
                                Cookieを無効にする方法は <Link href="https://policies.google.com/technologies/ads?gl=jp" className={styles.link}>広告ーポリシーと規約ーGoogle</Link>をご確認ください。
                            </p>
                        </div>
                        <div className={styles.policy}>
                            <h3 ><span className="marker">第4条 アクセス解析ツールについて</span></h3>
                            <p>当サイトでは、Googleアナリティクスを使用して、サイトの利用状況を分析しています. Googleアナリティクスもクッキーを使用してデータを収集しますが、個人を特定する情報は含まれません . <br />
                                なお、この規約に関しては、<Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" className={styles.link}>Googleアナリティクス利用規約</Link>または、
                                <Link href="https://policies.google.com/technologies/partner-sites" className={styles.link}>Googleポリシーと規約</Link>をご覧ください。
                            </p>
                        </div>
                        <div className={styles.policy}>
                            <h3 ><span className="marker">第5条 広告について</span></h3>
                            <p>当サイトでは、以下の第三者配信の広告サービスを利用しています.</p>
                            <ul>
                                <li><p>・A8.net</p></li>
                            </ul>
                            <p>これらの第三者配信事業者はユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用する場合があります. <br />
                                Cookieを無効にする方法やGoogleアドセンスに関する詳細は、 <Link href="https://policies.google.com/technologies/ads?gl=jp">広告ーポリシーと規約ーGoogle</Link>をご確認ください。</p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第6条 情報の共有と開示</span></h3>
                            <p>当サイトは、法的要求がある場合や、当サイトの権利、財産、安全の保護のために必要と判断される場合を除き、個人情報を第三者に開示または共有しません. </p>
                        </div>
                        <div>
                            <h3><span className="marker">第7条 個人情報の管理方法</span></h3>
                            <p>当サイトは第三者に皆さまの重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLを使用しております. <br />
                                SSL(SecureSocketLayer)とはデータを暗号化して通信するセキュリティ機能です. <br />
                                SSLで暗号化することによってお客さまの個人情報をハッカーやクラッカーから守り、安全に情報を送信することができます. </p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第8条 免責事項</span></h3>
                            <p>当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません. <br />
                                また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません. <br />
                                情報が古くなっていることもございます. 当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください. </p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第9条 著作権について</span></h3>
                            <p>
                                当サイトのコンテンツ（写真や画像、文章など）の著作権につきましては、 原則として当サイトに帰属しており、無断転載することを禁止します. <br />
                                これらのコンテンツの無断転載、複製、配布等は禁止されています. <br />
                                当サイトのコンテンツを利用したい場合は、<Link href="/contact" className={styles.link}>Contact</Link> ページ記載のメールアドレスより別途お問い合わせください. <br />
                            </p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第10条 リンクについて</span></h3>
                            <p>
                                当サイトは原則リンクフリーです. リンクを行う場合の許可や連絡は不要です. <br />
                                ただし、以下の場合はリンクをご遠慮ください.
                            </p>
                            <ul>
                                <li><p>・当サイトや第三者を誹謗中傷する内容を含むサイトからのリンク</p></li>
                                <li><p>・違法な内容を含むサイトからのリンク</p></li>
                                <li><p>・インラインフレームなど、当サイトのコンテンツが原型を留めない形でのリンク</p></li>
                            </ul>
                            <p>当サイトへのリンク設定により生じた損害に関して、当サイトは一切の責任を負いません.</p>
                        </div>
                        <div className={styles.policy}>
                            <h3><span className="marker">第11条 お問い合わせについて</span></h3>
                            <p>本ポリシーに関するお問い合わせは、下記リンク先のContactページにあるメールアドレスまでお願いいたします. </p>
                            <p className={styles.policy}><Link href="/contact" className={styles.link}>Contact</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}