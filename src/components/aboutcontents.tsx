import React, { ReactNode ,useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/aboutcontents.module.css"

export default function Aboutcontents() {
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
                    <h1 className={styles.titletext}>Development Environment</h1>
                    <hr className={styles.line} />
                </div>
                <div>
                    <div className={styles.developmentenvironment}>
                        <div className={styles.imagecontents}>
                            <Link href="/">
                                <Image
                                    src="/indexpengin.jpg"
                                    width={imagewidth}
                                    height={imagehight}
                                    alt="works01"
                                    layout={isMobile ? "intrinsic" : "none"}
                                    className={styles.image}
                                />
                            </Link>
                        </div>
                        <div className={styles.textcontents}>
                            <div>
                                <h3>MacBook Pro 16inch 2021</h3>
                                <ul className={styles.ul}>
                                    <li><p>Processor : Apple M1Pro</p></li>
                                    <li><p>Memory : 16GB</p></li>
                                    <li><p>OS : MacOS Sonoma 14.6 (2024/10/31時点)</p></li>
                                    <li><p>使用用途 : Webアプリケーション開発、プログラミング全般、モデリング、動画編集</p></li>
                                </ul>
                            </div>
                            <div>
                                <h3>自作PC</h3>
                                <ul className={styles.ul}>
                                    <li><p>Processor : Intel Core i7 14700K</p></li>
                                    <li><p>Memory : 32GB</p></li>
                                    <li><p>GPU : GeForce RTX 4070Ti</p></li>
                                    <li><p>OS : Windows 11</p></li>
                                    <li><p>使用用途 : ゲーム開発、音楽制作、モデリング、動画編集</p></li>
                                </ul>
                            </div>
                            <div>
                                <h3>周辺機器</h3>
                                <ul className={styles.ul}>
                                    <li><p>オーディオインターフェイス : UR22C</p></li>
                                    <li><p>MIDIキーボード : M-AUDIO KEYSTATION 61 MK3</p></li>
                                    <li><p>タブレット : ipad Air(第5世代),Apple Pencil(第2世代)</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}