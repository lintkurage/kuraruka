import styles from "src/styles/blognamecontents.module.css"
import Link from "next/link";

export default function BlognameContents(){
    return(
        <>
            <div className={styles.contents}>
                <div className={styles.box}>
                    <p>この記事を書いた人</p>
                    <h3><span className={styles.name}>iruka2kurage(いるかとくらげ)</span></h3>
                    <p>情報学を専攻している理系大学生.専門はデジタルファブリケーション、UI/UXなど
                        趣味は、温泉巡り、ものづくり、麻雀など <br />
                        Web開発やものづくり、温泉などについての記事を書いています.
                    </p>
                    <div>
                        <br />
                        <p>SNSについて</p>
                        <p>X(旧Twitter): <Link href="https://x.com/lintkurage" className={styles.link}>https://x.com/lintkurage</Link></p>
                        <p>日常や旅行、温泉、研究についてなどを発信</p>
                        <p >Git Hub: <Link href="https://github.com/lintkurage" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>個人開発のコード、電子工作で使用したコードを掲載</p>
                        <p>YouTube: <Link href="/contact" className={styles.link}>https://github.com/lintkurage</Link></p>
                        <p>気が向いたときに様々なコンテンツを発信</p>
                        <p>HP: <Link href="/" className={styles.link}>https://iruka2kurage.com</Link></p>
                        <p>Web技術、ゲーム開発、温泉、音楽等様々なコンテンツについてのブログ記事を発信</p>
                    </div>
                </div>
            </div>
        </>
    );
}