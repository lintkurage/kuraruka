import { useState } from 'react';
import { BlogType } from 'src/types/blog';
import ArticleItem from './articleitem';
import styles from "src/styles/blogpage.module.css"

interface BlogProps {
    blogs: BlogType[];
}

const Article = ({ blogs }: BlogProps) => {
    // 最新の記事を何件まで取ってくるか
    const ITEMS_PER_PAGE = 5;

    // 現在のページ番号（初期値は1）
    const [currentPage, setCurrentPage] = useState(1);

    // 現在のページに対応するブログ記事の抽出
    const currentBlogs = blogs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className={styles.content}>
            <div className={styles.newarticle}>
                <h2><span className='marker'>最新記事</span></h2>
            </div>
            <div className="">
                {currentBlogs.map((blog) => (
                    <ArticleItem key={blog.id} blog={blog}></ArticleItem>
                ))}
            </div>
        </div>
    );
};

export default Article;
