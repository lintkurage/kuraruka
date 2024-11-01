import { BlogType } from "src/types/blog";
import { format } from "date-fns"
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blogitem.module.css"

interface BlogItemProps {
    blog: BlogType
}

const BlogItem = ({ blog }: BlogItemProps) => {
    const categoryColor = blog.category.color || "gray"

    return (
        <div className={styles.content}>
            <div className={styles.article}>
            <Link href={`/blog/${blog.slug}`} className={styles.link}>
                <div className={styles.blogcontents}>
                    <div>
                        <Image
                            src={blog.eyecatch ? blog.eyecatch.url : "/indexkurage.jpg"}
                            width={600}
                            height={400}
                            alt="image"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.namecontents}>
                        <div>
                            <h2 className={styles.nametitle}>{blog.title}</h2>
                        </div>
                        <div>
                            <p className={styles.text}>{format(new Date(blog.publishData), "yyyy/MM/dd")}</p>
                        </div>
                        <div className={styles.summarycontents}>
                            <p className={styles.text}>{blog.summary}</p>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default BlogItem