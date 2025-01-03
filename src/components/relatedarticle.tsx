import { useEffect, useState } from 'react';
import Layout from 'src/components/layout';
import Article from 'src/components/article';
import { client } from 'src/libs/client';
import { BlogType } from '@/types/blog';
import Loading from 'src/components/loading';
import styles from "src/styles/blogindex.module.css"

const Relatedarticle = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // エラー状態の追加

    useEffect(() => {
        const fetchBlogs = async () => {
            let allBlogs: BlogType[] = [];
            let offset = 0;
            const limit = 20; // 1回で取得する件数

            try {
                // すべてのページのデータを取得
                while (true) {
                    const res = await client.getList<BlogType>({
                        endpoint: 'blogs',
                        queries: {
                            orders: '-publishedAt', // 新しい順に並べる
                            limit,  // 1回で取得する件数
                            offset, // 次のページの開始位置
                        },
                    });

                    allBlogs = [...allBlogs, ...res.contents]; // データを追加

                    // 取得したデータが`limit`未満の場合は終了（最終ページ）
                    if (res.contents.length < limit) {
                        break;
                    }

                    // 次のページへ進む
                    offset += limit;
                }

                setBlogs(allBlogs); // 取得したデータを状態にセット
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError('ブログの取得に失敗しました。'); // エラーメッセージの設定
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        );
    }

    if (error) {
        return (
            <>
                <div className={styles.content}>
                    <h1>{error}</h1> {/* エラーメッセージを表示 */}
                </div>
            </>
        );
    }

    return (
        <>
            <Article blogs={blogs} />

        </>
    );
};

export default Relatedarticle;
