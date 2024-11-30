import { BlogType } from "src/types/blog";
import {useState,useEffect} from "react";
import { format } from "date-fns"
import Link from "next/link";
import styles from "../styles/blogitem.module.css"

interface BlogItemProps {
    blog: BlogType
}

const BlogItem = ({ blog }: BlogItemProps) => {
    const categoryColor = blog.category.color || "gray"
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
        <div className={styles.content}>
            <div className={styles.article}>
                <div className={styles.blogcontents}>

                    <div className={styles.imagecontents}>
                        <Link href={`/blog/${blog.slug}`} className={styles.link}>
                            <img src={blog.eyecatch ? blog.eyecatch.url : "/indexkurage.jpg"} alt={blog.title} className={styles.image}/>
                        </Link>
                    </div>
                    <div className={styles.namecontents}>
                        <div  className={styles.nametitle}>
                            <Link href={`/blog/${blog.slug}`} className={styles.link}>
                                <h2>{blog.title}</h2>
                            </Link>
                        </div>
                        <div>
                            <p className={styles.text}>{format(new Date(blog.publishData), "yyyy/MM/dd")}</p>
                        </div>
                        <div className={styles.summarycontents}>
                            <p className={styles.text}>{blog.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogItem