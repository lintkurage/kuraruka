import { BlogType } from "src/types/blog";
import { useState, useEffect } from "react";
import { format } from "date-fns"
import Link from "next/link";
import styles from "../styles/articleitem.module.css"

interface BlogItemProps {
    blog: BlogType
}

const ArticleItem = ({ blog }: BlogItemProps) => {
    const imagewidth = 400
    const imagehight = 240
    const modilesize = 768

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
        <div className={styles.content}>
            <div className={styles.article}>
                <div className={styles.blogcontents}>

                    <div>
                        <Link href={`/blog/${blog.slug}`} className={styles.link}>
                            <img src={blog.eyecatch ? blog.eyecatch.url : "/indexkurage.jpg"} alt="image" className={styles.image} />
                        </Link>
                    </div>
                    <div className={styles.namecontents}>
                        <div className={styles.nametitle}>
                            <Link href={`/blog/${blog.slug}`} className={styles.link}>
                                <h3>{blog.title}</h3>
                            </Link>
                        </div>
                        <div>
                            <p>Author : {blog.Author} </p>
                            <p className={styles.text}>Date : {format(new Date(blog.publishData), "yyyy/MM/dd")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ArticleItem ;