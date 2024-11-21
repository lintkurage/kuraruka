import { useState } from 'react';
import { BlogType } from 'src/types/blog';
import BlogItem from './blogitem';
import styles from "src/styles/blogpage.module.css"

interface BlogProps {
    blogs: BlogType[];
}

const Blogs = ({ blogs }: BlogProps) => {
    // 1ページあたりの表示件数
    const ITEMS_PER_PAGE = 10;

    // 現在のページ番号（初期値は1）
    const [currentPage, setCurrentPage] = useState(1);

    // 総ページ数の計算
    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

    // 現在のページに対応するブログ記事の抽出
    const currentBlogs = blogs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // ページ変更時のハンドラー
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.content}>
            <div className="">
                {currentBlogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog}></BlogItem>
                ))}
            </div>

            {/* ページネーションのUI */}
            <div className="pagination">
                <ul className={styles.ulist}>
                    <li>
                        <button className={styles.pagenationbutton}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &lt;
                        </button>
                    </li>
                    <li>
                        {/* ページ番号の表示 */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={styles.pagenationbutton}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </li>
                    <li>
                        <button
                            className={styles.pagenationbutton}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;
